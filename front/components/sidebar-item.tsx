'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

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

const OuterActive = styled(Outer)`
  background-color: rgba(0,0,0,0.2);
`;

const Right = styled.span`
  float: right;
`;

const SidebarItem = (props: {
  name: string;
  href: string;
}) => {
  const { name, href } = props;
  const path = usePathname();
  const Wrapper = path.includes(href) ? OuterActive : Outer;

  return (<Link {...{href}}>
    <Wrapper>
      {name}<Right>{'>'}</Right>
    </Wrapper>
  </Link>);
};

export default SidebarItem;

