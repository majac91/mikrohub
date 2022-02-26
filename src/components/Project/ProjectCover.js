import React from 'react';
import img from '../../img/dark-forest/cover.jpeg'
import { ProjectCoverWrapper, ProjectImgWrapper, ProjectTitle } from './style'
// import { ImgWrapper } from "../../theme/base/media.js"

const ProjectCover = ({ title }) => {
    return (
        <ProjectCoverWrapper>
            <ProjectTitle>
                <span>{title}</span>
            </ProjectTitle>
            <ProjectImgWrapper>
                <img src={img} alt="" />
            </ProjectImgWrapper>
        </ProjectCoverWrapper>
    );
}

export default ProjectCover;
