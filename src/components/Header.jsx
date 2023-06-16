import React from 'react'

import HeaderImg from "/images/bg-header-desktop.svg"

const Header = () => {
  return (
    <header style={{backgroundColor:"#5DA5A4"}}>
        <img src={HeaderImg} alt="header image" />
    </header>
  )
}

export default Header