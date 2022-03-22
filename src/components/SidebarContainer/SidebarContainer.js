import React from 'react';
import { Box, Flex } from '../../theme/base/layout';
import { SidebrWrapper, Sidebar, SidebarContent } from './style';
import { H1 } from '../../theme/base/typography';

const SidebarContainer = ({ children }) => {

    return (
        <SidebrWrapper>
            <Sidebar>
                <h1>
                    <Flex flexDirection='column'>
                        <span>mikro.</span>
                        <span>hhub</span>
                    </Flex>
                </h1>
            </Sidebar>
            <SidebarContent>
                {children}
            </SidebarContent>
        </SidebrWrapper>
    );
}

export default SidebarContainer;
