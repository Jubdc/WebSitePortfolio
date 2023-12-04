import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;
import behanceIcon from '../icons/Cercle.png';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  position: relative;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 50px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const StyledIcon = styled.img`
  position: absolute;
  top: 63%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 260px;

  @media (max-width: 940px) and (max-height: 800px) {
    display: none;
  }

  // Vous pouvez ajouter d'autres styles si nécessaire
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
    </div>
  );

  const six = () => (
    <StyledIcon src={behanceIcon} alt="Behance Icon" style={{ transitionDelay: ` 600ms` }} />
  );

  const items = [one, two, three, four, five, six];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
      <StyledIcon src={behanceIcon} alt="Behance Icon" />
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
