import React from 'react';
import { Flex } from '../../theme/base/layout';
import { SidebrWrapper, Sidebar, SidebarContent } from './style';

const SidebarContainer = ({ children, title }) => {

    return (
        <SidebrWrapper>
            <Sidebar>
                <h1>
                    <Flex mt='150px' flexDirection='column'>
                        {title.map((word, index) => {
                            return <span key={index}>{word}</span>
                        })}
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
