import React from 'react';

import { Text } from '../../theme/base/typography'
import { Box } from '../../theme/base/layout';
import { fontSize } from 'styled-system';


const Footer = () => {
    return (
        <Box textAlign='center' pb='60px'>
            <Text fontFamily='GraphikLight' fontSize={{ xxs: '12px', md: '18px' }}>© mikro.hhub</Text>
            <Text fontFamily='GraphikLight' fontSize={{ xxs: '12px', md: '18px' }}> made with love
            {/* <label>
                    <input type="checkbox" />
                    <svg viewBox="0 0 532 532">
                        <path id="heart" transform="translate(10, 10)" d="M256,96.5l-19.7-20.3C186.1,24.3,104.5,15.9,49.7,62.6c-62.8,53.6-66.1,149.8-9.9,207.9l193.5,199.8 c12.5,12.9,32.8,12.9,45.3,0l193.5-199.8c56.3-58.1,53-154.3-9.8-207.9l0,0C407.5,15.9,326,24.3,275.7,76.2L256,96.5z" />
                    </svg>
                    <span></span>
                </label> */}
             by majacvetkovic</Text>
        </Box>
    );
}

export default Footer;
