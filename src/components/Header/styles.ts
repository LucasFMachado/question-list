import styled from 'styled-components'

export const Component = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100vw;
  margin-bottom: 1rem;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    width: 100%;

    h1 {
      color: ${({ theme }) => theme.colors.text};
    }

    .searchControl {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      input {
        height: 3rem;
        padding: 1rem;
        width: 500px;
        border-radius: 0.5rem;
        border: none;
      }

      button {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
        border: none;

        svg {
          height: 2rem;
          width: 2rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`
