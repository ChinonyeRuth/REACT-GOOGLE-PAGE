import React from 'react'
import AppsCollection from './AppsCollection'
import Avatar from './Avatar'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <div className="Header">
      <MenuItem />
      <AppsCollection />
      <Avatar />
    </div>
  )
}

export default Header
