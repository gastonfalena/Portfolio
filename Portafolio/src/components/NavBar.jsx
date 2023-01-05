import { useState } from 'react'
import {Container, LogoContainer, Menu, MenuItem,MobileIcon, MenuItemLink, Wrapper} from './navBarElements'
import { FaBattleNet,FaBars,FaTimes,FaHome,FaUserAlt,FaGlasses,FaBriefcase } from 'react-icons/fa'
import {IconContext} from 'react-icons'
const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    
    <Container>
      <Wrapper>
        <IconContext.Provider value={{style:{fontSize:"2em"}}}>
        <LogoContainer>
        <FaBattleNet id='battle'/>
        <p>Gastón</p>
        <p>Falena</p>
        </LogoContainer>
        <MobileIcon onClick = {()=> setShowMobileMenu(!showMobileMenu)} >
            {
              showMobileMenu ? <FaTimes/> : <FaBars/>
            }
        </MobileIcon>
        <Menu open = {showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick = {()=> setShowMobileMenu(!showMobileMenu)} >
            <div>
              <FaHome/>
              HOME
            </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick = {()=> setShowMobileMenu(!showMobileMenu)} >
            <div>
              <FaUserAlt/>
              About Me
            </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick = {()=> setShowMobileMenu(!showMobileMenu)} >
            <div>
              <FaBriefcase/>
              Portfolio
            </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick = {()=> setShowMobileMenu(!showMobileMenu)} >
            <div>
              <FaGlasses/>
              Contact
            </div>
            </MenuItemLink>
          </MenuItem>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}

export default NavBar