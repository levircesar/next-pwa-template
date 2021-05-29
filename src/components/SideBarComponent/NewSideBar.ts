import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const Desktop = styled.div`
  display: none;
  @media (max-width: 798px) {
    display: none;
  }
`

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-right: 2px solid ${props => props.theme.colors.buttonColor};
  height: 100vh;
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`

export const BoxImg = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
  }

  h2 {
    padding: 1rem;
    cursor: pointer;
    transition: 0.5s;
    color: white;

    span {
      opacity: 0;
      position: relative;
      transition: 0.7s;
      &:nth-last-of-type(1) {
        left: -200px;
      }
      &:nth-last-of-type(2) {
        left: 200px;
      }
    }

    &:hover {
      span {
        left: 0px;
        opacity: 1;
        color: ${props => props.theme.colors.buttonHover};
      }
      transform: scale(1.2);
    }
  }
`

export const Social = styled.div`
  a {
    font-size: 28px;
    margin: 0 10px;
    color: ${props => props.theme.colors.text};

    &:hover {
      color: ${props => props.theme.colors.buttonHover};
    }
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  button {
    width: 25%;
    margin: 5px;
  }
`

export const Button = styled.button`
  width: 70px;
  padding: 0.5rem;
  margin-right: 2px;
  background: ${props => props.theme.colors.buttonColor};
  border: 0;
  transition: 0.2s;

  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`
export const Mobile = styled.div`
  display: block;
  @media (max-width: 798px) {
    display: block;
  }
`

export const NavBar = styled.div`
  background-color: ${props => props.theme.colors.buttonColor};
  height: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const NavMenu = styled.div`
  .navbar {
    background-color: ${props => props.theme.colors.buttonColor};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
    right: -100%;
    transition: 850ms;
  }

  .active {
    right: 0;
    transition: 300ms;
  }
`

export const MenuBars = styled.button`
  font-size: 2rem;
  background: none;
  color: white;
  border: 0;
  padding: 1rem;
`

export const NavMenuItems = styled.ul`
  width: 100%;
`

export const NavText = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0 8px 16px;
  list-style: none;
  height: 60px;

  button {
    border: 0;
    text-decoration: none;
    cursor: pointer;
    color: #f5f5f5;
    background-color: ${props => props.theme.colors.buttonColor};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  button:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.buttonHover};
  }

  a {
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #f5f5f5;
    background-color: ${props => props.theme.colors.buttonColor};
    font-size: 18px;
    justify-content: center;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  a:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.buttonHover};
  }
`

export const NavBarToogle = styled.li`
  background-color: ${props => props.theme.colors.buttonColor};
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
`
