import React, { useContext } from 'react';
import { ProjectMenuWrapper, DarkForestLink, AshwoodLink, RuralLink, UrbanLink } from './style'
import { Box, Flex } from '../../theme/base/layout';
import { Burger, Bars } from '../Navbar/style';
import { ProjectMenuContext } from '../Navbar/project-menu-context';

const ProjectsMenu = () => {
    const { isProjectsMenuOpen } = useContext(ProjectMenuContext);

    return (

        <ProjectMenuWrapper className={isProjectsMenuOpen ? '' : 'closed'} >
            <Burger $menu='projects-menu'>
                <Bars $mode='open' />
            </Burger>
            <Flex flexDirection='column' py={{ sm: '80px', lg: '118px' }} ml={{ sm: '36px', lg: '150px', xxl: '303px' }}>
                <DarkForestLink to='darkforest-house' mb={{ sm: '18px', lg: '43px' }}>Darkforest kuća</DarkForestLink>
                <AshwoodLink to='ashwood-house' mb={{ sm: '18px', lg: '43px' }}>Ashwood kuća</AshwoodLink>
                <RuralLink to='rural-house' mb={{ sm: '18px', lg: '43px' }}>Ruralna kuća</RuralLink>
                <UrbanLink to='urban-house' mb={{ sm: '18px', lg: '43px' }}>Urbana kuća</UrbanLink>
            </Flex>
        </ProjectMenuWrapper>
    )
}

export default ProjectsMenu;
