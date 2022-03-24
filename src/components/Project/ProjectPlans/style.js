import styled from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';
import { space } from 'styled-system';

export const PlanCard = styled.div`
    width: 100%;
    
    ${respondTo.lg`
        flex: 0 0 45%;
    `}

    ${space};
`