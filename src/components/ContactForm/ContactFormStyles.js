import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-row-gap: 10px;
  width: 460px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

  textarea {
    height: 12vh;
  }

  button {
    width: 100px;
    color: #d4c0c0;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    cursor: pointer;
    border: none;

    &:hover {
      background: #801414;
    }
  }
`;

export const Deets = styled.div`
  display: grid;
  grid-column-gap: 10px;
`;

export const Name = styled.input`
  grid-area: 1 / 1 / 2 / 2;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const Email = styled.input`
  grid-area: 1 / 2 / 2 / 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 2 / 2;
    margin-top: 10px;
  }
`;
