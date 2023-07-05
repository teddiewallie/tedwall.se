'use client';

import styled from 'styled-components';
import { Newsreader } from 'next/font/google';

const font = Newsreader({ subsets: ['latin'] });

const Wrapper = styled.article`
  min-width: 20em;
  max-width: 40em;
  padding-left: 1em;
  padding-right: 2vw;
  padding-top: 1em;
  line-height: 1.6em;
  font-size: 1.1em;
`;

const Article = (props: {children: React.ReactNode}) => {
  const { children } = props;

  return (<Wrapper className={font.className}>{children}</Wrapper>);
};

export default Article;

