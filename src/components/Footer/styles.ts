import styled from 'styled-components'

export const Component = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-top: 3px solid ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 100vw;
  margin-top: 1rem;
  position: relative;
  bottom: 0;
`
