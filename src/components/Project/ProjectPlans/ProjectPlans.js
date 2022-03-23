import React from 'react';
import { ImgWrapper } from '../../../theme/base/media';
import { Box, Flex } from '../../../theme/base/layout';
import { PlanCard } from './style';
import { H3, TextRight, TextLeft } from '../../../theme/base/typography';

const ProjectPlans = ({ plans }) => {

    return (
        <Box>
            <Flex pt={{ xs: '39px', md: '95px' }} pb={{ xs: '47px', md: '113px' }} flexDirection={{ xs: 'column', xl: 'row' }} justifyContent='space-between' alignItems='flex-start'>
                <PlanCard mb={{ xxs: '30px', md: 0 }}>
                    <H3 whiteSpace='nowrap' fontSize={{ xs: '24px', md: '40px', xl: '50px', ultraWide: '70px' }} mb={{ xxs: '30px', md: '40px' }}>{plans.plan1.title}</H3>
                    <ImgWrapper aspect='94%' mb={{ xxs: '30px', md: '80px' }}>
                        <img src={plans.plan1.img} alt='first floor plan' />
                    </ImgWrapper>
                    <TextLeft display={{ xs: 'none', md: 'block' }}>{plans.plan1.content}</TextLeft>
                </PlanCard>
                <PlanCard>
                    <H3 fontSize={{ xs: '24px', md: '70px' }} fontSize={{ xs: '24px', md: '40px', xl: '50px', ultraWide: '70px' }} mb={{ xxs: '30px', md: '40px' }}>{plans.plan2.title}</H3>
                    <ImgWrapper aspect='94%' mb={{ xxs: '30px', md: '80px' }}>
                        <img src={plans.plan2.img} alt='first floor plan' />
                    </ImgWrapper>
                    <TextRight display={{ xs: 'none', md: 'block' }}>{plans.plan2.content}</TextRight>
                    <TextLeft display={{ md: 'none' }}>{plans.plan1.content}</TextLeft>

                </PlanCard>
            </Flex >
        </Box>
    );
}

export default ProjectPlans;
