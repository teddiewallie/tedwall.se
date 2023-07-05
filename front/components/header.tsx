'use client'

import { Truculenta } from 'next/font/google';
import styled from 'styled-components';

const headerFont = Truculenta({ subsets: ['latin'] });

const Headers = (props: {
  type: string,
  value: string
}) => {
  const { type, value } = props;

  const style =`
    font-weight: 400;
    margin: 0;
    margin-bottom: 1.3em;
    line-height: 0;
  `;

  const headerMap: {[key: string]: any} = {
    h1: styled.h1`${style}`,
    h2: styled.h2`${style}`,
    h3: styled.h3`${style}`,
    h4: styled.h4`${style}`,
    h5: styled.h5`${style}`,
    h6: styled.h6`${style}`,
  };

  const Header = headerMap[type];

  return (<Header className={headerFont.className}>{value}</Header>);
};

export default Headers;

