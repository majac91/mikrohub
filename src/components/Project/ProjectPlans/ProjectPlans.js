import React from 'react';
import { ImgWrapper } from '../../../theme/base/media';
import { Box, Flex } from '../../../theme/base/layout';
import { PlanCard } from './style';
import { TextRight, TextLeft } from '../../../theme/base/typography';

const ProjectPlans = ({ plans }) => {

    return (
        <Box>
            <Flex pt={['39px', '95px']} pb={['47px', '113px']} flexDirection={{ xs: 'column', md: 'row' }} flex='0 0 50%' justifyContent='space-between'>
                <PlanCard>
                    <h3>{plans.plan1.title}</h3>
                    <ImgWrapper aspect='94%'>
                        <img src={plans.plan1.img} alt='first floor plan' />
                    </ImgWrapper>
                    <TextLeft>{plans.plan2.content}</TextLeft>
                </PlanCard>
                <PlanCard>
                    <h3>{plans.plan2.title}</h3>
                    <ImgWrapper aspect='94%'>
                        <img src={plans.plan2.img} alt='first floor plan' />
                    </ImgWrapper>
                    <TextRight>{plans.plan2.content}</TextRight>
                </PlanCard>
            </Flex >
        </Box>
    );
}

export default ProjectPlans;
