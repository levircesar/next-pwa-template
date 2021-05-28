import React, { useState, useContext } from 'react'
import { Button, Overlay, Desktop, Mobile, NavBar, NavMenu } from './NewSideBar'
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
import styles from './styles.module.scss'

interface Props {
  toggleTheme?(): void
}

const SideBarComponent: React.FC<Props> = ({ toggleTheme }) => {
  const [sidebar, setSidebar] = useState(false)
  const { colors, title } = useContext(ThemeContext)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      {sidebar && <Overlay onClick={showSidebar}></Overlay>}

      <Desktop></Desktop>

      <Mobile>
        <NavBar>
          <div className={styles.boxImg}>
            <Link href="/">
              <h2>
                <span>&lt;</span> NavBar<span>/&gt;</span>
              </h2>
            </Link>
          </div>
          <button className={styles.menuBars}>
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
          </button>
        </NavBar>
        <NavMenu>
          <nav
            className={
              sidebar ? `${styles.navMenu} ${styles.active}` : styles.navMenu
            }>
            <ul className={styles.navMenuItems}>
              <li className={styles.navBarToogle}>
                <button className={styles.menuBars}>
                  <FaTimes onClick={showSidebar} />
                </button>
              </li>
              {SideBarData.map((item, index) => {
                return (
                  <li key={index} className={styles.navText}>
                    <Link key={index} href={item.path}>
                      <Button onClick={showSidebar}>{item.title}</Button>
                    </Link>
                  </li>
                )
              })}
              <li className={styles.navText}>
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
              </li>
            </ul>
          </nav>
        </NavMenu>
      </Mobile>
    </>
  )
}

export default SideBarComponent
