import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Component = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  ::after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.colors.text};
    border-color: ${props => props.theme.colors.text} transparent
      ${props => props.theme.colors.text} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`
