import styled from 'styled-components';

export const Form = styled.form`
  input,
  textarea {
    width: 280px;
  }

  textarea {
    height: 12vh;
  }

  button {
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

export const Diver = styled.div`
  margin-bottom: 1vh;
`;
