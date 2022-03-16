import React, { useContext } from 'react';
import { ProjectMenuWrapper, DarkForestLink, AshwoodLink, RuralLink, UrbanLink } from './style'
import { Box, Flex } from '../../theme/base/layout';
import { Burger, Bars } from '../Navbar/style';
import { ProjectMenuContext } from '../Navbar/project-menu-context';

const ProjectsMenu = (toggleNav) => {
    const { isProjectsMenuOpen } = useContext(ProjectMenuContext);

    console.log('render')
    return (

        <ProjectMenuWrapper className={isProjectsMenuOpen ? 'open' : 'closed'} >
            <Burger $menu='projects-menu' zIndex='103' right='76px'>
                <Bars $mode='open' />
            </Burger>
            <Flex flexDirection='column' py={{ xxs: '80px', lg: '118px' }} ml={{ xxs: '36px', lg: '150px', xxl: '303px' }}>
                <DarkForestLink onClick={toggleNav} to='dark-forest-house' mb={{ xxs: '18px', lg: '43px' }}>Darkforest kuća</DarkForestLink>
                <AshwoodLink onClick={toggleNav} to='ashwood-house' mb={{ xxs: '18px', lg: '43px' }}>Ashwood kuća</AshwoodLink>
                <RuralLink onClick={toggleNav} to='rural-house' mb={{ xxs: '18px', lg: '43px' }}>Ruralna kuća</RuralLink>
                <UrbanLink onClick={toggleNav} to='urban-house' mb={{ xxs: '18px', lg: '43px' }}>Urbana kuća</UrbanLink>
            </Flex>
        </ProjectMenuWrapper>
    )
}

export default ProjectsMenu;
