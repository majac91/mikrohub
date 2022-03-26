import React from 'react';
import { ProjectCoverWrapper, ProjectImgWrapper, ProjectTitle } from './style'
import { Box } from '../../../theme/base/layout';

const ProjectCover = ({ title, img }) => {

    return (
        <ProjectCoverWrapper>
            <Box>
                <ProjectTitle>
                    {title.map((word, index) => {
                        return <span key={index}>{word}</span>
                    })}
                </ProjectTitle>
            </Box>
            <ProjectImgWrapper>
                <img src={img} alt="" />
            </ProjectImgWrapper>
        </ProjectCoverWrapper>
    );
}

export default ProjectCover;
