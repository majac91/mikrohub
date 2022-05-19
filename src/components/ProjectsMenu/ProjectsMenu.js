import React, { useRef, useContext, useLayoutEffect } from 'react';

import { isMobile } from 'react-device-detect';
import { slideUp } from '../../utils/animation/animate';

import { ProjectMenuWrapper, DarkForestLink, AshwoodLink, RuralLink, UrbanLink } from './style'
import { Box, Flex } from '../../theme/base/layout';
import { Burger, Bars } from '../Navbar/style';
import { ProjectMenuContext } from '../Navbar/project-menu-context';

const ProjectsMenu = ({ toggleNav }) => {
    let link1Ref = useRef(null)
    let link2Ref = useRef(null)
    let link3Ref = useRef(null)
    let link4Ref = useRef(null)


    // useLayoutEffect(() => {
    //     if (!isMobile) {
    //         slideUp(link1Ref);
    //         slideUp(link2Ref, .5);
    //         slideUp(link3Ref, .7);
    //         slideUp(link4Ref, .7);
    //     }
    // }, []);

    const { isProjectsMenuOpen } = useContext(ProjectMenuContext);

    const close = () => {
        setTimeout(() => {
            toggleNav();
        }, 500);
    }
    return (

        <ProjectMenuWrapper className={isProjectsMenuOpen ? 'open' : 'closed'} >
            <Burger $menu='projects-menu' zIndex='103' right='76px'>
                <Bars $mode='open' />
            </Burger>
            <Flex flexDirection='column' py={{ xxs: '80px', lg: '118px' }} ml={{ xxs: '36px', lg: '150px', xxl: '303px' }}>
                <DarkForestLink ref={(el) => { link1Ref = el }} onClick={close} to='/dark-forest-house' mb={{ xxs: '18px', lg: '43px' }}>Darkforest kuća</DarkForestLink>
                <AshwoodLink ref={(el) => { link2Ref = el }} onClick={close} to='ashwood-house' mb={{ xxs: '18px', lg: '43px' }}>Ashwood kuća</AshwoodLink>
                <RuralLink ref={(el) => { link3Ref = el }} onClick={close} to='rural-house' mb={{ xxs: '18px', lg: '43px' }}>Ruralna kuća</RuralLink>
                <UrbanLink ref={(el) => { link4Ref = el }} onClick={close} to='urban-house' mb={{ xxs: '18px', lg: '43px' }}>Urbana kuća</UrbanLink>
            </Flex>
        </ProjectMenuWrapper>
    )
}

export default ProjectsMenu;
