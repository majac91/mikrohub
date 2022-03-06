import styled from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';

export const PlanCard = styled.div`
    ${respondTo.lg`
        max-width: 45%;
    `}
`