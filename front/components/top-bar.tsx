'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  border-bottom: 1px solid #444;
`;

const Caps = styled.span`
  text-transform: small-caps;
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

const Links = {
  Home: '/',
  Styleguide: '/styleguide'
};

const Entry = ({name, href, index}) => {
  const Outer = index === 0 ? FirstLi : Li;
  return (<Outer><Link {...{href}}><Caps>{name}</Caps></Link></Outer>);
};

const TopBar = () => (
  <Section>
    <Ul>
      { Object.keys(Links).map(
        (name, index) => <Entry
          key={`top-menu-${index}`}
          {...{name, href: Links[name], index} }
        />
      )}
    </Ul>
  </Section>
);

export default TopBar;

