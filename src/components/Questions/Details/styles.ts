import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Item = styled.div`
  width: 100%;
  list-style: none;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.text};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    border-radius: 0.5rem;
  }

  .information {
    width: 100%;

    h3 {
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }

    .actions {
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: ${props => props.theme.colors.text};
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: ${props => props.theme.colors.secondary};

        :hover {
          color: ${props => props.theme.colors.primary};
          background-color: ${props => props.theme.colors.secondaryDark};
        }
      }

      a {
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.5rem;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.error};
      }

      svg {
        height: 1rem;
        width: 1rem;
        position: relative;
        top: 2px;
      }
    }

    .votes {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;

      span {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`
