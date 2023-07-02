'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

const Section = styled.section`
  background-color: #252525;
  border-bottom: 1px solid #343434;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em;
`;

const Li = styled.li`
  display: inline-block;
  padding-left: 1em;
`;

const FirstLi = styled.li`
  display: inline-block;
  font-size: 3em;
  float: left;
  position: relative;
  top: -0.46em;
  color: #222;
  text-shadow: -1px -1px 1px #181818;
`;

const links: { [key: string]: string } = {};
links.Home = '/';
links.Blog = '/blog';
links.Styleguide = '/styleguide';

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

const TopBar = () => {
  const path = usePathname();

  return (<Section>
    <Ul>
    <FirstLi>»</FirstLi>
      { Object.keys(links).map(
        (name, index) => <Entry
          key={`top-menu-${index}`}
          {...{ name, href: links[name], path }}
        />)}
    </Ul>
  </Section>);
};

export default TopBar;

