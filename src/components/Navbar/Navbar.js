import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Nav, Logo, Burger, Bars, NavMenu, NavItem } from './style';
import { Box } from '../../theme/layout';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mikroRef = useRef();
    const hubRef = useRef();
    const navMenuRef = useRef();
    const navItemRef = useRef([]);

    useEffect(() => {
        gsap.timeline({ defaults: { duration: 1 } })
            .to([hubRef.current, mikroRef.current], { width: 0, autoAlpha: 0.2, duration: 0.6, ease: "slow(0.7, 0.7, false)" })
    }, []);


    const toggleNav = () => setIsOpen(prev => !prev);

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        console.log(isOpen);
        if (isOpen) {
            tl.to(navMenuRef.current, { x: 0, ease: "slow(0.7, 0.7, false)" })
                .from([navItemRef.current], { translateY: '100%', duration: 0.5, })
        } else {
            tl.to([navItemRef.current], { translateY: '0%', duration: 0.5, })
                .to(navMenuRef.current, { x: "-100%", ease: "slow(0.7, 0.7, false)" })
        }
    }, [isOpen]);


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
                    <NavItem onClick={toggleNav}><Link ref={element => { navItemRef.current[0] = element; }} to="projects">Projekti</Link></NavItem>
                    <NavItem onClick={toggleNav}><Link ref={element => { navItemRef.current[1] = element; }} to="process">Proces</Link></NavItem>
                    <NavItem onClick={toggleNav}><Link ref={element => { navItemRef.current[2] = element; }} to="contact">Kontakt</Link></NavItem>
                    <NavItem onClick={toggleNav}><Link ref={element => { navItemRef.current[3] = element; }} to="about">About</Link></NavItem>
                </NavMenu>
            </Nav>
        </Box>
    );
}

export default Navbar;
