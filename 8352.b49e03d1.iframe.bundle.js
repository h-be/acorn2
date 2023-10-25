(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[8352],{"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{SD:()=>ComputedScope,Zn:()=>ComputedSimpleAchievementStatus,iK:()=>LayeringAlgorithm,RelationInput:()=>RelationInput});var lib=__webpack_require__("../node_modules/zod/lib/index.mjs");const profileSchema=lib.z.object({firstName:lib.z.string(),lastName:lib.z.string(),handle:lib.z.string(),status:lib.z.enum(["Online","Offline","Away"]),avatarUrl:lib.z.string(),agentPubKey:lib.z.string(),isImported:lib.z.boolean()}),connectionV11Schema=lib.z.object({parentActionHash:lib.z.string(),childActionHash:lib.z.string(),randomizer:lib.z.number(),isImported:lib.z.boolean()}),connectionV12Schema=lib.z.object({parentActionHash:lib.z.string(),childActionHash:lib.z.string(),siblingOrder:lib.z.number(),randomizer:lib.z.number(),isImported:lib.z.boolean()}),ConnectionV11SchemaWithActionHash=lib.z.object({actionHash:lib.z.string()}).merge(connectionV11Schema),ConnectionV12SchemaWithActionHash=lib.z.object({actionHash:lib.z.string()}).merge(connectionV12Schema),BackwardsCompatibleConnectionSchema=lib.z.union([ConnectionV12SchemaWithActionHash,ConnectionV11SchemaWithActionHash]),BackwardsCompatibleProjectConnectionsStateSchema=lib.z.record(BackwardsCompatibleConnectionSchema),ProjectConnectionsStateSchema=lib.z.record(ConnectionV12SchemaWithActionHash),EntryPointSchema=lib.z.object({color:lib.z.string(),creatorAgentPubKey:lib.z.string(),createdAt:lib.z.number(),outcomeActionHash:lib.z.string(),isImported:lib.z.boolean()}),ProjectEntryPointsStateSchema=lib.z.record(lib.z.object({actionHash:lib.z.string()}).merge(EntryPointSchema)),smallTaskSchema=lib.z.object({complete:lib.z.boolean(),task:lib.z.string()}),achievementStatus=lib.z.enum(["Achieved","NotAchieved"]),smallScopeSchema=lib.z.object({Small:lib.z.object({achievementStatus,targetDate:lib.z.number().nullable(),taskList:lib.z.array(smallTaskSchema)})}),smallsEstimateSchema=lib.z.number().nullable(),timeFrameSchema=lib.z.object({fromDate:lib.z.number(),toDate:lib.z.number()}).nullable(),uncertainScopeSchema=lib.z.object({Uncertain:lib.z.object({smallsEstimate:smallsEstimateSchema,timeFrame:timeFrameSchema,inBreakdown:lib.z.boolean()})}),scopeSchema=lib.z.union([smallScopeSchema,uncertainScopeSchema]),withActionHashSchema=lib.z.object({actionHash:lib.z.string().nonempty()}),OutcomeSchema=lib.z.object({content:lib.z.string(),creatorAgentPubKey:lib.z.string(),editorAgentPubKey:lib.z.string().nullable(),timestampCreated:lib.z.number().gt(0),timestampUpdated:lib.z.number().gt(0).nullable(),scope:scopeSchema,tags:lib.z.array(lib.z.string()).nullable(),description:lib.z.string(),isImported:lib.z.boolean(),githubLink:lib.z.string().url().or(lib.z.literal(""))}),ProjectOutcomesStateSchema=lib.z.record(withActionHashSchema.merge(OutcomeSchema)),OutcomeCommentSchema=lib.z.object({outcomeActionHash:lib.z.string(),content:lib.z.string(),creatorAgentPubKey:lib.z.string(),unixTimestamp:lib.z.number(),isImported:lib.z.boolean()}),ProjectOutcomeCommentsStateSchema=lib.z.record(lib.z.object({actionHash:lib.z.string()}).merge(OutcomeCommentSchema)),OutcomeMemberSchema=lib.z.object({outcomeActionHash:lib.z.string(),memberAgentPubKey:lib.z.string(),creatorAgentPubKey:lib.z.string(),unixTimestamp:lib.z.number(),isImported:lib.z.boolean()}),ProjectOutcomeMembersStateSchema=lib.z.record(lib.z.object({actionHash:lib.z.string()}).merge(OutcomeMemberSchema)),ProjectMetaV0Schema=lib.z.object({creatorAgentPubKey:lib.z.string(),createdAt:lib.z.number(),name:lib.z.string(),image:lib.z.string().nullable(),passphrase:lib.z.string(),isImported:lib.z.boolean(),isMigrated:lib.z.string().nullable()}),projectMetaV0Schema=withActionHashSchema.merge(ProjectMetaV0Schema);var LayeringAlgorithm;!function(LayeringAlgorithm){LayeringAlgorithm.LongestPath="LongestPath",LayeringAlgorithm.CoffmanGraham="CoffmanGraham",LayeringAlgorithm.Classic="Classic"}(LayeringAlgorithm||(LayeringAlgorithm={}));const LayeringAlgorithmSchema=lib.z.nativeEnum(LayeringAlgorithm),ProjectMetaV1Schema=lib.z.object({layeringAlgorithm:LayeringAlgorithmSchema,topPriorityOutcomes:lib.z.array(lib.z.string())}).merge(ProjectMetaV0Schema),projectMetaV1Schema=withActionHashSchema.merge(ProjectMetaV1Schema),projectMetaSchema=lib.z.union([projectMetaV1Schema,projectMetaV0Schema]),TagSchema=lib.z.object({backgroundColor:lib.z.string(),text:lib.z.string()}),ProjectTagsStateSchema=lib.z.record(lib.z.object({actionHash:lib.z.string()}).merge(TagSchema)),BackwardsCompatibleProjectExportSchema=lib.z.object({projectMeta:projectMetaSchema,outcomes:ProjectOutcomesStateSchema,connections:BackwardsCompatibleProjectConnectionsStateSchema,outcomeMembers:ProjectOutcomeMembersStateSchema,outcomeComments:ProjectOutcomeCommentsStateSchema,entryPoints:ProjectEntryPointsStateSchema,tags:ProjectTagsStateSchema}),projectExportDataSchema=lib.z.object({projectMeta:projectMetaV1Schema,outcomes:ProjectOutcomesStateSchema,connections:ProjectConnectionsStateSchema,outcomeMembers:ProjectOutcomeMembersStateSchema,outcomeComments:ProjectOutcomeCommentsStateSchema,entryPoints:ProjectEntryPointsStateSchema,tags:ProjectTagsStateSchema});lib.z.object({myProfile:profileSchema,projects:lib.z.array(BackwardsCompatibleProjectExportSchema),integrityVersion:lib.z.number().optional()}),lib.z.object({myProfile:profileSchema,projects:lib.z.array(projectExportDataSchema),integrityVersion:lib.z.number()});let ComputedSimpleAchievementStatus=function(ComputedSimpleAchievementStatus){return ComputedSimpleAchievementStatus.NotAchieved="NotAchieved",ComputedSimpleAchievementStatus.Achieved="Achieved",ComputedSimpleAchievementStatus.PartiallyAchieved="PartiallyAchieved",ComputedSimpleAchievementStatus}({}),ComputedScope=function(ComputedScope){return ComputedScope.Small="Small",ComputedScope.Uncertain="Uncertain",ComputedScope.Big="Big",ComputedScope}({}),RelationInput=function(RelationInput){return RelationInput.ExistingOutcomeAsParent="ExistingOutcomeAsParent",RelationInput.ExistingOutcomeAsChild="ExistingOutcomeAsChild",RelationInput}({})},"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/variables.scss":(module,exports,__webpack_require__)=>{var ___CSS_LOADER_API_IMPORT___=__webpack_require__("../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("../node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff"),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2"),___CSS_LOADER_URL_IMPORT_3___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff"),___CSS_LOADER_URL_IMPORT_4___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2"),___CSS_LOADER_URL_IMPORT_5___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff"),___CSS_LOADER_URL_IMPORT_6___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2"),___CSS_LOADER_URL_IMPORT_7___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff"),___CSS_LOADER_URL_IMPORT_8___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2"),___CSS_LOADER_URL_IMPORT_9___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff"),___CSS_LOADER_URL_IMPORT_10___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff2"),___CSS_LOADER_URL_IMPORT_11___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff"),___CSS_LOADER_URL_IMPORT_12___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff2"),___CSS_LOADER_URL_IMPORT_13___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___),___CSS_LOADER_URL_REPLACEMENT_8___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___),___CSS_LOADER_URL_REPLACEMENT_9___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___),___CSS_LOADER_URL_REPLACEMENT_10___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___),___CSS_LOADER_URL_REPLACEMENT_11___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___),___CSS_LOADER_URL_REPLACEMENT_12___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___),___CSS_LOADER_URL_REPLACEMENT_13___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);exports.push([module.id,'@font-face{font-family:"PlusJakartaSans-regular";src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-medium";src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-semibold";src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-bold";src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-extrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_8___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_9___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"gilroyextrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_10___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_11___+') format("woff");font-weight:normal;font-style:normal}@font-face{font-family:"gilroylight";src:url('+___CSS_LOADER_URL_REPLACEMENT_12___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_13___+') format("woff");font-weight:normal;font-style:normal}:root{--color-virtually-transaprent: #ffffff00;--color-green-shadow: #4a604392;--shadow-brown-shadow: #8377699b;--color-silver: #757171;--color-green: #008414;--color-forest-green: #15841d;--color-bronze: #a89958;--color-pumpkin: #c46310;--color-topaz: #f7cf75;--color-ultramarine-blue: #344cff;--color-gray: #808080;--color-alto: #d0d0d0;--color-turquoise: #12d6c7;--color-persian-green: #00a599;--color-myrtle-green: #277670;--icon-color-light-grey: #d0d0d0;--bg-color-primary: #f7f5f3;--bg-color-secondary: #ffffff;--bg-color-secondary-read-only: #ffffff80;--bg-color-tertiary: #fbfbf9;--bg-color-hover: #f4f1ed;--bg-color-hover-semi-transparent: #f4f1eda1;--color-silver: #bebebe;--bg-color-canvas: #f4f2f0;--bg-color-popup: #ebeae7eb;--bg-color-achieved: #e9efe7;--bg-color-light-green: #e5f5e0;--bg-color-warning: #ffeee3;--bg-color-warning-hover: #ffe6d5;--bg-color-button-cream: #f7f5f1;--bg-color-toast-confirmation: #dbe5e2;--bg-color-toast-information: #dbe5e2;--bg-color-toast-warning: #f1e5d8;--bg-color-toast-destructive: #eedad4;--bg-color-primary-dark: #555555;--bg-color-hover-dark: #c7beb430;--border-color-primary: #222222;--border-color-secondary: #4d4d4d;--border-color-timberwolf: #dbd7d0;--border-color-platinum: #ede7e7;--border-color-bright-gray: #efefef;--border-color-pale-silver: #c3bfba;--border-color-form-input: #f3efeb;--shadow-color: #c7beb472;--shadow-color-read-only: #c7beb437;--shadow-color-dark: #c7beb4bd;--shadow-color-hover: #c7beb4bd;--shadow-color-high-priority: #334cf8;--font-family-primary-extrabold: "PlusJakartaSans-extrabold", sans-serif;--font-family-primary-bold: "PlusJakartaSans-bold", sans-serif;--font-family-primary-semibold: "PlusJakartaSans-semibold", sans-serif;--font-family-primary-medium: "PlusJakartaSans-medium", sans-serif;--font-family-primary-regular: "PlusJakartaSans-regular", sans-serif;--font-family-secondary-extrabold: "gilroyextrabold", sans-serif;--text-color-primary: #222222;--text-color-secondary: #4d4d4d;--text-color-tertiary: #8d8c8c;--text-color-quaternary: #9d9d9d;--text-color-caption: #bcbcbc;--text-color-placeholder: #bdbdbd;--text-color-strikethrough: #aea49972;--text-color-invalid: #ff5d36;--text-color-link: #344cff;--text-color-warning: #c52700;--text-color-dark-bg: #ffffff;--text-color-toast-confirmation: #22796f;--text-color-toast-information: #22796f;--text-color-toast-warning: #bf8342;--text-color-toast-destructive: #b52c0c}',""]),module.exports=exports},"./src/variables.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/variables.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.9d536b59.woff"},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.eba219e4.woff2"},"./src/fonts/gilroy/gilroy-light-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.ba334d23.woff"},"./src/fonts/gilroy/gilroy-light-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.77d9316b.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.3d6b4fa0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.50cf6471.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.d59e544c.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.259d19d6.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.724099a1.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.ff53fe0e.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.f344d0fa.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.c4e0d187.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.0c667bc0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.dc64b89d.woff2"}}]);