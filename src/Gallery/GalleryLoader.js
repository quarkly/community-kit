import React from 'react';
import atomize from '@quarkly/atomize';
import styled, { css, keyframes } from 'styled-components';
import { Icon } from '@quarkly/widgets';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg); 
  } 
  100% {
    transform: rotate(360deg); 
  } 
`;

const animation = () => css`
  ${rotate} 2s linear infinite
`; 

const Animate = styled(Icon)`
  animation: ${animation};
`;

const Rotate = ({
  isLoading = false,
  children,
  ...props
}) => (
  <Animate {...props}
    icon="AiOutlineLoading"
    category="ai"
    size="30px"
    
    display={isLoading ? 'block' : 'none'}
    top="calc(50% - 15px)"
    left="calc(50% - 15px)"
    position="absolute"
    z-index="125"
  >
    {children} 
  </Animate>  
);

export default atomize(Rotate)({
  name: 'Loader',
});
