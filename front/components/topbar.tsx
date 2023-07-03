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
  margin-left: 1.4em;
`;

const Entry = (props: {
  name: string;
  href: string;
  path: string;
}) => {
  const { name, href, path } = props;

  let className = 'route';
  className = href === path ? `${className} active` : className;
  className = href.includes('styleguide') && path.includes('styleguide') ? `${className} active` : className;
  className = href.includes('blog') && path.includes('blog') ? `${className} active` : className;

  return (<Li>
    <Link {...{className, href}}>
      {name}
    </Link>
  </Li>);
};

const TopBar = (props: { items: object }) => {
  const { items } = props;
  const path = usePathname();

  const Entries = Object.entries(items).map(([name, href], index) => (
    <Entry key={`top-menu-${index}`} {...{name, href, path}} />
  ));

  return(<Section>
    <Ul>
      {...Entries}
    </Ul>
  </Section>);
};

export default TopBar;

