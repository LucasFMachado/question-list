import styled from 'styled-components'

export const Item = styled.div`
  width: 100%;
  list-style: none;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.text};
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
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
      text-align: end;
      font-weight: 500;

      a {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: ${props => props.theme.colors.text};

        svg {
          height: 1rem;
          width: 1rem;
          position: relative;
          top: 2px;
        }

        :hover {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    .votes {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;

      span {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`
