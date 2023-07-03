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
  padding: 0.4em 0.8em 0.8em 0.8em;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 1em;
`;

const FirstLi = styled(Li)`
  text-shadow: -1px -1px 1px #181818;
  font-size: 1.7em;
  position: relative;
  top: 0.1em;
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

const TopBar = (props: { links: array }) => {
  const { links } = props;
  console.log(links);
  const path = usePathname();

  return (<Section>
    <Ul>
    <FirstLi>></FirstLi>
      { Object.keys(links).map(
        (name, index) => <Entry
          key={`top-menu-${index}`}
          {...{ name, href: links[name], path }}
        />)}
    </Ul>
  </Section>);
};

export default TopBar;

