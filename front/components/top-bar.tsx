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
`;

const links: { [key: string]: string } = {};
links.Home = '/';
links.Blog = '/blog';
links.Styleguide = '/styleguide';

const Entry = (props: {
  name: string;
  href: string;
  path: string;
  index: number;
}) => {
  const { name, href, path, index } = props;

  const Outer = index === 0 ? FirstLi : Li;
  const className = href === path ?
    "active route" :
    "route";

  return (<Outer>
    <Link {...{className, href}}>
      {name}
    </Link>
  </Outer>);
};

const TopBar = () => {
  const path = usePathname();

  return (<Section>
    <Ul>
      { Object.keys(links).map(
        (name, index) => <Entry
          key={`top-menu-${index}`}
          {...{ name, href: links[name], path, index }}
        />)}
    </Ul>
  </Section>);
};

export default TopBar;

