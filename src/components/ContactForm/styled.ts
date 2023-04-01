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
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Deets = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.input`
  height: 40px;
`;
