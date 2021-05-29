import React, { useState, useContext } from 'react'
import {
  Button,
  Overlay,
  Desktop,
  Mobile,
  NavBar,
  NavMenu,
  MenuBars,
  NavMenuItems,
  NavText,
  NavBarToogle,
  BoxImg
} from './NewSideBar'
import Link from 'next/link'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
  FaMoon,
  FaSun,
  FaGithub
} from 'react-icons/fa'

import { SideBarData } from '../../utils/SideBarData'

interface Props {
  toggleTheme?(): void
}

const SideBarComponent: React.FC<Props> = ({ toggleTheme }) => {
  const [sidebar, setSidebar] = useState(false)
  const { colors, title } = useContext(ThemeContext)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      {sidebar && <Overlay onClick={showSidebar} />}

      <Desktop></Desktop>

      <Mobile>
        <NavBar>
          <BoxImg>
            <Link href="/">
              <h2>
                <span>&lt;</span> Menu<span>/&gt;</span>
              </h2>
            </Link>
          </BoxImg>
          <MenuBars>
            {title === 'light' ? (
              <FaSun onClick={toggleTheme} />
            ) : (
              <FaMoon onClick={toggleTheme} />
            )}
            <Switch
              onChange={toggleTheme}
              checked={title === 'light'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={colors.text}
              onColor={colors.backgroundSecondary}
            />
            <FaBars style={{ marginLeft: '20px' }} onClick={showSidebar} />
          </MenuBars>
        </NavBar>
        <NavMenu>
          <nav className={sidebar ? `navbar active` : `navbar`}>
            <NavMenuItems>
              <NavBarToogle>
                <MenuBars>
                  <FaTimes onClick={showSidebar} />
                </MenuBars>
              </NavBarToogle>
              {SideBarData.map((item, index) => {
                return (
                  <NavText key={index}>
                    <Link key={index} href={item.path}>
                      <Button onClick={showSidebar}>{item.title}</Button>
                    </Link>
                  </NavText>
                )
              })}
              <NavText>
                <a href="https://www.instagram.com/levirlms/">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/levir.lemos/">
                  <FaFacebook />
                </a>
                <a href="https://wa.me/5585998413146">
                  <FaWhatsapp />
                </a>
                <a href="https://github.com/levircesar">
                  <FaGithub />
                </a>
              </NavText>
            </NavMenuItems>
          </nav>
        </NavMenu>
      </Mobile>
    </>
  )
}

export default SideBarComponent
