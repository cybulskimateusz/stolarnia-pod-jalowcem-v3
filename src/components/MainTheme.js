import React, { createRef } from "react"

//own components
import {BackImageContainer} from "./BackImageContainer" 
import {ImageSlider} from "./ImageSlider" 
import {GlobalStyle} from "./GlobalStyle"
import {Footer}  from "./Footer"
import Header from "./header/Header"
import MenuButton from "./header/MenuButton"
import Logo from "./header/Logo"
import { Menu } from "./Menu"

const MainTheme = ({images, backImage}) => {

  const imageRef = createRef()
  const sliderRef = createRef()
  const headerRef = createRef()
  const menuRef = createRef()

  const handleMenu = () => {
    const refs = [imageRef, sliderRef, headerRef, menuRef]
    refs.forEach(el => el.current.classList.toggle("menu--active"))
  }

  return (
    <>
      <header>
        <Header ref={headerRef}>
          <Logo>Stolarnia pod jałowcem</Logo>
          <MenuButton onClick={handleMenu}></MenuButton>
        </Header>
        <Menu ref={menuRef} />
      </header>
      <main>
        <GlobalStyle />
          <BackImageContainer ref={imageRef}>
            <img alt="zdjęcie" src={backImage}/>
          </BackImageContainer>
          <ImageSlider ref={sliderRef} imgList={images}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default MainTheme
