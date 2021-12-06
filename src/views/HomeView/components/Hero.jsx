import styled from 'styled-components';

export function Hero({ title }) {
  return (
    <HeroSection>
      {title ? (
        <HeroTitle>{title}</HeroTitle>
      ) : (
        <HeroTitle>Welcome! </HeroTitle>
      )}
    </HeroSection>
  );
}

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 53px);
  /* max-width: 100%; */
  height: 100%;
  background-color: var(--dark-bg-color);
`;

const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 35px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dark-bg-text-color);
`;
