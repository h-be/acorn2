import { getAppWs } from '../../hcWebsockets'
import { cellIdFromString } from '../../utils'
import { RootState } from '../../redux/reducer'
import { AllProjectsDataExport } from '../export'
import { createWhoami } from '../../redux/persistent/profiles/who-am-i/actions'
import { installProjectApp } from '../../projects/installProject'
import { joinProjectCellId } from '../../redux/persistent/cells/actions'
import { createProfilesZomeApi } from './zomeApiCreators'
import { installProjectAppAndImport } from './installProjectAppAndImport'
import ProfilesZomeApi from '../../api/profilesApi'

export async function internalImportProjectsData(
  // dependencies
  profilesZomeApi: ProfilesZomeApi,
  _installProjectAppAndImport: typeof installProjectAppAndImport,
  _installProjectApp: typeof installProjectApp,
  store: any,
  // main input data and callbacks
  migrationData: string,
  onStep: (completed: number, toComplete: number) => void
) {
  const migrationDataParsed: AllProjectsDataExport = JSON.parse(migrationData)

  const initialState: RootState = store.getState()
  const myAgentPubKey = initialState.agentAddress

  const profilesCellIdString = initialState.cells.profiles
  const profilesCellId = cellIdFromString(profilesCellIdString)

  // prepare a list of only the NON-migrated projects to migrate
  const projectsToMigrate = migrationDataParsed.projects.filter((project) => {
    return !project.projectMeta.isMigrated
  })

  const migratedProjectsToJoin = migrationDataParsed.projects.filter(
    (project) => {
      return project.projectMeta.isMigrated
    }
  )

  // count the number of steps this is going to take
  const totalSteps =
    1 + // the create personal profile step
    projectsToMigrate.length + // the number of projects to import
    migratedProjectsToJoin.length // the number of projects to join
  let stepsSoFar = 0

  // import active user's own profile
  const importedProfile = await profilesZomeApi.profile.createWhoami(
    profilesCellId,
    migrationDataParsed.myProfile
  )
  store.dispatch(createWhoami(profilesCellIdString, importedProfile))
  stepsSoFar++
  onStep(stepsSoFar, totalSteps)

  // import each individual project, notifying of progress after each
  // one completes
  for await (let projectData of projectsToMigrate) {
    const passphrase = projectData.projectMeta.passphrase
    await _installProjectAppAndImport(
      myAgentPubKey,
      projectData,
      passphrase,
      store.dispatch,
    )
    stepsSoFar++
    onStep(stepsSoFar, totalSteps)
  }

  // join each project that has already been migrated by a peer
  for await (let projectData of migratedProjectsToJoin) {
    const passphrase = projectData.projectMeta.passphrase
    const [cellIdString, _, __] = await _installProjectApp(passphrase)
    store.dispatch(joinProjectCellId(cellIdString))
    stepsSoFar++
    onStep(stepsSoFar, totalSteps)
  }
}

export default async function importProjectsData(
  store: any,
  migrationData: string,
  onStep: (completed: number, toComplete: number) => void
) {
  const appWebsocket = await getAppWs()
  const profilesZomeApi = createProfilesZomeApi(appWebsocket)
  return internalImportProjectsData(
    profilesZomeApi,
    installProjectAppAndImport,
    installProjectApp,
    store,
    migrationData,
    onStep
  )
}
