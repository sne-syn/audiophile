import Link from "next/link";
import styled from "styled-components";

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-top: 3rem;
  max-width: 800px;
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  color: inherit;
  padding: 1.5rem;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    border-color: #0070f3;
    color: #0070f3;
  }
`;

const StyledA = styled.p`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`;

const StyledLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about" name="About Page &rarr;" />
      </Card>
    </FlexContainer>
  );
}
