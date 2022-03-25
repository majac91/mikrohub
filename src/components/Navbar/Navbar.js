import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

import { ProjectMenuProvider } from './project-menu-context';

import { Nav, Logo, Burger, Bars, NavMenu, NavItem, NavLink } from './style';
import { Box } from '../../theme/base/layout';
import ProjectsMenu from '../ProjectsMenu/ProjectsMenu';


const Navbar = ({ isProjectsMenuOpen, setIsProjectsMenuOpen, toggleProjectsMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

    const mikroRef = useRef();
    const hubRef = useRef();
    const navMenuRef = useRef();

    // useEffect(() => {
    //     gsap.timeline({ defaults: { duration: 1 } })
    //         .to([hubRef.current, mikroRef.current],
    //             {
    //                 width: 0,
    //                 autoAlpha: 0.2,
    //                 duration: 0.6,
    //                 ease: "slow(0.7, 0.7, false)"
    //             })
    // }, []);

    const toggleNav = () => setIsOpen(prev => !prev);

    // const toggleProjectsMenu = () => {
    //     setIsProjectsMenuOpen(prev => !prev);
    // };

    return (
        <ProjectMenuProvider value={{ isProjectsMenuOpen }}>
            <Box>
                <Nav className={isOpen && 'open'}>
                    <Logo>
                        <Link to="/">
                            <span>m</span>
                            <span ref={mikroRef}>ikro</span>
                            <span>.h</span>
                            <span ref={hubRef}>ub</span>
                        </Link>
                    </Logo>
                    <Burger onClick={toggleNav} display={isProjectsMenuOpen ? 'none' : 'block'}>
                        <Bars $mode={isOpen ? 'open' : 'closed'} />
                    </Burger>
                    <NavMenu ref={navMenuRef} $mode={isOpen ? 'open' : 'closed'}>
                        <NavItem onClick={toggleProjectsMenu}>
                            <NavLink to='#' disabled={true} >Projekti</NavLink>
                            {isProjectsMenuOpen && <ProjectsMenu onClick={toggleNav} />}
                        </NavItem>
                        <NavItem onClick={toggleNav}>
                            <NavLink to="process">Proces</NavLink>
                        </NavItem>
                        <NavItem onClick={toggleNav}>
                            <NavLink to="contact">Kontakt</NavLink>
                        </NavItem>
                        <NavItem onClick={toggleNav}>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                    </NavMenu>
                </Nav>
            </Box>
        </ProjectMenuProvider>
    );
}

export default Navbar;
