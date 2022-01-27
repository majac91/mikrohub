import React, { useState } from 'react';
import { Nav, Logo, Burger, Bars, NavMenu, NavItem } from './navbar-elements';
import { Box } from '../../theme/layout';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            <Nav className={isOpen && 'open'}>
                <Logo>
                    mikrohub
            </Logo>
                <Burger onClick={() => setIsOpen(prev => !prev)}>
                    <Bars $mode={isOpen ? 'open' : 'closed'} />
                </Burger>
                <NavMenu>
                    <NavItem><a href=''>Projekti</a></NavItem>
                    <NavItem><a href=''>Proces</a></NavItem>
                    <NavItem><a href=''>Kontakt</a></NavItem>
                    <NavItem><a href=''>0 nama</a></NavItem>
                </NavMenu>
            </Nav>
        </Box>
    );
}

export default Navbar;
