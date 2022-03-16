import React from 'react';
import { ProjectCoverWrapper, ProjectImgWrapper, ProjectTitle } from './style'

const ProjectCover = ({ title, img }) => {

    return (
        <ProjectCoverWrapper>
            <ProjectTitle>
                {title.map((word, index) => {
                    return <span key={index}>{word}</span>
                })}
            </ProjectTitle>
            <ProjectImgWrapper>
                <img src={img} alt="" />
            </ProjectImgWrapper>
        </ProjectCoverWrapper>
    );
}

export default ProjectCover;
