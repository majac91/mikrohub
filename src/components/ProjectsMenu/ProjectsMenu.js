import React, { useContext } from 'react';
import { ProjectMenuWrapper, ProjectLink } from './style'
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
            <Flex flexDirection='column' py={{ sm: '80px', lg: '118px' }} ml={{ sm: '36px', md: '150px', lg: '303px' }}>
                <ProjectLink to='darkforest-house' mb={{ sm: '18px', lg: '43px' }}>Darkforest kuća</ProjectLink>
                <ProjectLink to='ashwood-house' mb={{ sm: '18px', lg: '43px' }}>Ashwood kuća</ProjectLink>
                <ProjectLink to='rural-house' mb={{ sm: '18px', lg: '43px' }}>Ruralna kuća</ProjectLink>
                <ProjectLink to='urban-house' mb={{ sm: '18px', lg: '43px' }}>Urbana kuća</ProjectLink>
            </Flex>
        </ProjectMenuWrapper>
    )
}

export default ProjectsMenu;
