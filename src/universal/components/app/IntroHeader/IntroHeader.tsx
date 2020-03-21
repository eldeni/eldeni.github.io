import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { useContentData } from '@@src/universal/contexts/IsomorphicDataContext';
import { w320 } from '@@src/universal/styles/media';

const textShadow1 = keyframes({
  '0%, 100%': {
    transform: 'translate(0px, 0px)',
  },
  '20%': {
    transform: 'translate(9px, 1px)',
  },
  '40%': {
    transform: 'translate(0px, 0px)',
  },
});

const textShadow2 = keyframes({
  '0%, 100%': {
    transform: 'translate(0px, 0px)',
  },
  '20%': {
    transform: 'translate(5px, -1px)',
  },
  '40%': {
    transform: 'translate(0px, 0px)',
  },
});

const StyledIntroHeader = styled.div({
});

const Top = styled.div({
});

const Bottom = styled.div({
  marginTop: 15,
});

const Title = styled.div({
  '& .dummy': {
    opacity: 0,
  },
  '& .effect-1': {
    color: '#e62e73',
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  '& .effect-2': {
    color: '#665dd5',
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  '& .main': {
    position: 'absolute',
    top: 0,
    transition: '1s ease',
    zIndex: 10,
  },
  '&:hover .effect-1': {
    transform: 'translate(9px, 1px)',
  },
  '&:hover .effect-2': {
    transform: 'translate(5px, -1px)',
  },
  '&:hover .main': {
    color: '#eff',
  },
  color: 'white',
  cursor: 'pointer',
  fontFamily: '"Work Sans"',
  fontSize: '2.0rem',
  fontWeight: 800,
  position: 'relative',
  ...w320({
    fontSize: '1.82rem',
  }),
}, css`
  & .effect-1 {
    animation: 10s ease 0s infinite normal forwards ${textShadow1};
  }

  & .effect-2 {
    animation: 10s ease 0s infinite normal forwards ${textShadow2};
  }
`);

const Introduction = styled.div({
  '& > div': {
    marginTop: '0.6em',
  },
  '& p': {
    display: 'inline',
  },
  minHeight: 90,
  paddingTop: 5,
  ...w320({
    minHeight: 80,
    paddingTop: 0,
  }),
});

const Photo = styled.img({
  '&:hover': {
    transform: 'scale(1.2)',
    transformOrigin: 'top right',
  },
  borderRadius: 6,
  float: 'right',
  height: 100,
  margin: '0px 0 6px 6px',
  transition: '1s ease',
  width: 100,
  ...w320({
    height: 85,
    width: 85,
  }),
});

const Contact = styled.ul({
  '& a': {
    '&:hover': {
      borderBottom: 'none',
    },
    borderBottom: '1px solid #c4bddb',
    color: '#c4bddb',
  },
  '& li': {
    color: '#c4bddb',
    display: 'inline-block',
  },
  '& li:not(:first-child)': {
    marginLeft: 5,
  },
  '& li:not(:first-child)::before': {
    content: '"| "',
  },
  fontSize: '1rem',
  marginTop: 13,
});

const IntroHeader = () => {
  const { general } = useContentData()!;

  return (
    <StyledIntroHeader>
      <Top>
        <Title>
          <Link to="/">
            <p className="dummy">
              {general.name}
            </p>
            <p className="main">
              {general.name}
            </p>
            <p className="effect-1">
              {general.name}
            </p>
            <p className="effect-2">
              {general.name}
            </p>
          </Link>
        </Title>
      </Top>
      <Bottom>
        <Photo
          src={general.photoUrl}
        />
        <Introduction>
          <p dangerouslySetInnerHTML={{ __html: general.introduction.p1 }} />
          {general.introduction.p2 && <div><p dangerouslySetInnerHTML={{ __html: general.introduction.p2 }} /></div>}
        </Introduction>
        <Contact>
          <li>
            <a href={`mailto:${general.email}`}>{general.email}</a>
          </li>
          <li>
            <a href={general.github}>Github</a>
          </li>
          <li>
            <a href={general.linkedIn}>LinkedIn</a>
          </li>
        </Contact>
      </Bottom>
    </StyledIntroHeader>
  );
};

export default IntroHeader;
