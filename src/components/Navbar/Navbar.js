import React, { useState, useEffect, useRef } from 'react';
import { Nav, Logo, Burger, Bars, NavMenu, NavItem, NavLink } from './style';
import { Box } from '../../theme/base/layout';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mikroRef = useRef();
    const hubRef = useRef();
    const navMenuRef = useRef();

    useEffect(() => {
        gsap.timeline({ defaults: { duration: 1 } })
            .to([hubRef.current, mikroRef.current], { width: 0, autoAlpha: 0.2, duration: 0.6, ease: "slow(0.7, 0.7, false)" })
    }, []);

    const toggleNav = () => setIsOpen(prev => !prev);

    return (
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
                <Burger onClick={toggleNav}>
                    <Bars $mode={isOpen ? 'open' : 'closed'} />
                </Burger>
                <NavMenu ref={navMenuRef} $mode={isOpen ? 'open' : 'closed'}>
                    <NavItem onClick={toggleNav}>
                        <NavLink to="projects">Projekti</NavLink>
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
    );
}

export default Navbar;
