import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const CardInfoContainer = styled.div`
  padding: 0 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const GridContainer = styled.section`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  place-items: start;
  column-gap: 5px;
  row-gap: 30px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  width: 320px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CardHeader = styled.h3`
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.colors.cardHeader};
  padding: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardInfo = styled.p`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;
