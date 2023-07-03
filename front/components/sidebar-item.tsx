'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Outer = styled.section`
  width: 10em;
  padding: 0.8em 2em;
  border-bottom: 1px solid #343434;
  position: relative;
  user-select: none;
  transition: background-color 0.1s ease-in;


  &:hover {
    background-color: rgba(0,0,0,0.2);
  }
`;

const Right = styled.span`
  float: right;
`;

const SidebarItem = (props: {
  name: string;
  href: string;
}) => {
  const { name, href } = props;

  return (<Link {...{href}}>
    <Outer>
      {name}<Right>{'>'}</Right>
    </Outer>
  </Link>);
};

export default SidebarItem;

