import styled from 'styled-components'

export const Component = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    height: 20rem;
    width: 20rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.error};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    color: ${props => props.theme.colors.error};
    background-color: ${props => props.theme.colors.primaryLight};

    svg {
      height: 5rem;
      width: 5rem;
      color: ${props => props.theme.colors.error};
    }

    p {
      font-size: 2rem;
      font-weight: bold;
      color: ${props => props.theme.colors.error};
    }

    button {
      height: 3rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.colors.primary};
      width: 75%;

      :hover {
        background-color: ${props => props.theme.colors.primaryDark};
      }
    }
  }
`
