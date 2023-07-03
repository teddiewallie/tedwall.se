'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

const Section = styled.section`
  background-color: #252525;
  border-bottom: 1px solid #343434;
  user-select: none;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 1em;
`;

const Entry = (props: {
  name: string;
  href: string;
  path: string;
}) => {
  const { name, href, path } = props;

  const className = href === path ?
    "active route" :
    "route";

  return (<Li>
    <Link {...{className, href}}>
      {name}
    </Link>
  </Li>);
};

const TopBar = (props: { links: object }) => {
  const { links } = props;
  console.log(links);
  const path = usePathname();

  const Entries = Object.entries(links).map(([name, href], index) => (
    <Entry key={`top-menu-${index}`} {...{name, href, path}} />
  ));

  return(<Section>
    <Ul>
      {...Entries}
    </Ul>
  </Section>);
};

export default TopBar;

