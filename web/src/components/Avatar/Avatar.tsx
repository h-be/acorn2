import React from 'react'
import './Avatar.scss'
import { pickColorForString } from '../../styles'
import { StatusCssColorClass, Status } from '../Header/Status'
import Tooltip from '../Tooltip/Tooltip'

interface AvatarProps {
  size: 'small' | 'small-medium' | 'medium' | 'medium-large' | 'large'
  firstName: string
  lastName: string
  avatarUrl: string
  highlighted?: boolean
  clickable?: boolean
  onClick?: () => void
  imported: boolean
  withStatus?: boolean
  withWhiteBorder?: boolean
  withStatusBorder?: boolean
  selfAssignedStatus?: string
  withTooltip?: boolean
  // tooltipText?: string
}

function Avatar({
  firstName,
  lastName,
  avatarUrl,
  highlighted,
  size = 'medium',
  clickable,
  onClick,
  imported,
  withStatus,
  withWhiteBorder,
  withStatusBorder,
  selfAssignedStatus,
  withTooltip,
  // tooltipText,
}: AvatarProps) {
  let classes = []
  // Avatar optional properties
  if (highlighted) classes.push('highlighted')
  if (clickable) classes.push('clickable')
  if (imported) classes.push('imported')
  if (withStatus) classes.push('with-status')
  if (withTooltip) classes.push('with-tooltip')

  if (!avatarUrl) {
    const backgroundInitialsAvatar = pickColorForString(firstName)

    //const backgroundInitialsAvatar = initialsAvatarcolors[0]
    const style = {
      backgroundColor: backgroundInitialsAvatar,
    }
    classes.push('initials-avatar')
    return (
      <div
        className={`avatar-wrapper 
        ${withWhiteBorder ? 'with-border white' : ''} 
        ${
          withStatusBorder
            ? `with-border status-color ${StatusCssColorClass[selfAssignedStatus]}`
            : ''
        } 
        ${
          size === 'small'
            ? 'small'
            : size === 'small-medium'
            ? 'small-medium'
            : size === 'medium'
            ? 'medium'
            : size === 'medium-large'
            ? 'medium-large'
            : size === 'large'
            ? 'large'
            : ''
        }`}
      >
        <div className={classes.join(' ')} onClick={onClick} style={style}>
          {firstName[0].toUpperCase()}
          {lastName[0].toUpperCase()}
        </div>
        {/* TODO: Current status circle color under avatar*/}
        {withStatus && (
          <div className="status-circle-wrapper">
            <div
              className={`status-circle ${StatusCssColorClass[selfAssignedStatus]}`}
            ></div>
          </div>
        )}
        {withTooltip && <Tooltip text={`${firstName} ${lastName}`} />}
      </div>
    )
  }

  classes.push('avatar')
  return (
    <div
      className={`avatar-wrapper 
      ${withWhiteBorder ? 'with-border white' : ''} 
      ${
        withStatusBorder
          ? `with-border status-color ${StatusCssColorClass[selfAssignedStatus]}`
          : ''
      }
      ${
        size === 'small'
          ? 'small'
          : size === 'small-medium'
          ? 'small-medium'
          : size === 'medium'
          ? 'medium'
          : size === 'medium-large'
          ? 'medium-large'
          : size === 'large'
          ? 'large'
          : ''
      }`}
    >
      <img src={avatarUrl} className={classes.join(' ')} onClick={onClick} />
      {/* TODO: Current status circle color under avatar*/}
      {withStatus && (
        <div className="status-circle-wrapper">
          <div
            className={`status-circle ${StatusCssColorClass[selfAssignedStatus]}`}
          ></div>
        </div>
      )}
      {withTooltip && <Tooltip text={`${firstName} ${lastName}`} />}
    </div>
  )
}

export default Avatar
