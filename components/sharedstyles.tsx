import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0;
  text-align: center;
  text-decoration: none;

  a {
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  color: blue;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  font-size: 1.1rem;
  margin: 0 0.75rem;
  padding: 0.75rem;
`;

export { Container, Main, Title, Description, CodeTag };
