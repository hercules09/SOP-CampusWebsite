import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    // NavBtn,
    // NavBtnLink 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    //when scroll past 80px, trigger header background
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Bits-G Hub</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >College-Space</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}>Student Blog</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}>Food Delivery</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}>Bits-Shop</NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn> */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar