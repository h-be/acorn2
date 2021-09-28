import React, { useRef, useState } from 'react'
import { NavLink, Route, useHistory, useLocation } from 'react-router-dom'

import { GUIDE_IS_OPEN } from '../GuideBook/guideIsOpen'
import { Status, StatusCssColorClass, StatusIcons } from './Status'
import Icon from '../Icon/Icon'
import Avatar from '../Avatar/Avatar'
import useOnClickOutside from 'use-onclickoutside'
import { CSSTransition } from 'react-transition-group'

function AvatarMenuItem({
  title,
  onClick,
  className,
}: {
  title: string
  onClick: () => void
  className?: string
}) {
  return (
    <button className={className} onClick={onClick}>
      <p>{title}</p>
    </button>
  )
}

function StatusMenuItem({ color, title, onClick }) {
  return (
    <button onClick={onClick}>
      {/* @ts-ignore */}
      <div className={`status-circle ${color}`} />
      <p>{title}</p>
    </button>
  )
}

function SearchResultItem({}) {
  return (
    <div className="search-result-item-wrapper">
      <Icon
        name="comment.svg"
        size="small"
        className="light-grey not-hoverable"
      />
      <div className="search-result-item-text">result</div>
    </div>
  )
}

function SearchResultsFilter({}) {
  const [isFilterApplied, setIsFilterApplied] = useState(false)
  return (
    <div
      className={`search-results-filter-wrapper ${
        isFilterApplied ? 'filter-is-applied' : ''
      } `}
      onClick={() => {
        setIsFilterApplied(!isFilterApplied)
      }}
    >
      Titles
    </div>
  )
}

function HeaderRightPanel({
  hideGuidebookHelpMessage,
  whoami,
  onClickEditProfile,
  onClickPreferences,
  saveStatus,
  status,
}) {
  const ref = useRef()
  useOnClickOutside(ref, () => {
    setIsAvatarMenuOpen(false)
    setIsStatusOpen(false)
  })
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [filterText, setFilterText] = useState('')
  const location = useLocation()
  // hover states
  const [isAvatarHover, setIsAvatarHover] = useState(false)
  // hover handlers
  const onHoverAvatarEnter = () => {
    setIsAvatarHover(true)
  }
  const onHoverAvatarLeave = () => {
    setIsAvatarHover(false)
  }

  // check the url for GUIDE_IS_OPEN
  // and affect the state
  const searchParams = new URLSearchParams(location.search)
  const isGuideOpen = !!searchParams.get(GUIDE_IS_OPEN)

  return (
    <>
      <div
        className={`search-button-wrapper ${
          isSearchOpen ? 'search-is-open' : ''
        } 
        ${filterText !== '' ? 'results-dropdown-is-open' : ''}`}
      >
        <div className="search-icon-input">
          <div className="search-open-icon">
            <Icon
              name="search.svg"
              size="small"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen)
                setFilterText('')
              }}
            />
          </div>
          <div>
            <CSSTransition
              in={isSearchOpen}
              timeout={100}
              unmountOnExit
              classNames="search-input-wrapper"
            >
              <input
                type="text"
                onChange={(e) => setFilterText(e.target.value.toLowerCase())}
                value={filterText}
                placeholder="Search for a goal, comment, and more"
                autoFocus
              />
            </CSSTransition>
          </div>
          {filterText !== '' && (
            <Icon
              name="x.svg"
              size="small"
              className="light-grey"
              onClick={() => {
                setFilterText('')
              }}
            />
          )}
        </div>
        {/* <CSSTransition
          in={filterText !== ''}
          timeout={200}
          unmountOnExit
          className="search-results-dropdown-wrapper"
        > */}
        {filterText !== '' && (
          <div className="search-results-dropdown">
            <div className="search-results-filters">
              <SearchResultsFilter />
              <SearchResultsFilter />
              <SearchResultsFilter />
            </div>
            <div className="search-results-list">
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
            </div>
          </div>
        )}
        {/* </CSSTransition> */}
      </div>

      <div className="header-right-panel">
        {/* open or close the guidebook, depending on if it */}
        {/* is currently open or closed */}
        {/* Guidebook Button */}
        {/* @ts-ignore */}
        <NavLink
          className="header-right-panel-icon"
          to={`${location.pathname}${
            isGuideOpen ? '' : '?' + GUIDE_IS_OPEN + '=1'
          }`}
          // if clicked on guidebook for the first time, remove the help message
          // and remember not to show that in the future (store that locally) aka persist
          onClick={hideGuidebookHelpMessage}
        >
          {/* @ts-ignore */}
          <Icon
            name="booklet.svg"
            className="header-right-panel-icon"
            withTooltip
            tooltipText="Guidebook"
            size="small"
          />
        </NavLink>
        <div className="avatar-and-status-wrapper">
          <div
            className="avatar-container"
            onMouseEnter={onHoverAvatarEnter}
            onMouseLeave={onHoverAvatarLeave}
          >
            {/* @ts-ignore */}
            <Avatar
              first_name={whoami.entry.first_name}
              last_name={whoami.entry.last_name}
              avatar_url={whoami.entry.avatar_url}
              imported={whoami.entry.is_imported}
              highlighted={isAvatarMenuOpen || isAvatarHover}
              clickable
              onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
              medium
            />
          </div>
          {/* Current status circle color under avatar*/}
          <div className="status-circle-wrapper">
            <div
              className={`status-circle ${StatusCssColorClass[status]}`}
            ></div>
          </div>
        </div>
        {/* Profile Menu */}
        {isAvatarMenuOpen && (
          <div className="profile-wrapper" ref={ref}>
            <AvatarMenuItem
              className={isStatusOpen ? 'active' : ''}
              title="Change Status"
              onClick={() => setIsStatusOpen(true)}
            />
            {isStatusOpen && (
              <div className="user-status-wrapper">
                {Object.keys(Status).map((key) => (
                  <StatusMenuItem
                    key={key}
                    color={StatusCssColorClass[key]}
                    title={key}
                    onClick={() => {
                      saveStatus(Status[key])
                      setIsAvatarMenuOpen(false)
                      setIsStatusOpen(false)
                    }}
                  />
                ))}
              </div>
            )}
            <AvatarMenuItem
              title="Profile Settings"
              onClick={() => {
                onClickEditProfile()
                setIsAvatarMenuOpen(false)
              }}
            />
            <AvatarMenuItem
              title="Preferences"
              onClick={() => {
                onClickPreferences()
                setIsAvatarMenuOpen(false)
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default HeaderRightPanel
