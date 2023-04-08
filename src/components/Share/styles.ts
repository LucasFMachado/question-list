import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Widget = styled.div`
  width: 50%;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.text};
  padding: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inputControl {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    input {
      height: 3rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: none;
      background-color: ${props => props.theme.colors.primaryLight};
    }

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: ${props => props.theme.colors.text};
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.colors.success};
      height: 3rem;
      margin-top: 1rem;

      svg {
        height: 1rem;
        width: 1rem;
        position: relative;
        top: 2px;
      }

      :hover {
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.secondaryDark};
      }
    }
  }
`
