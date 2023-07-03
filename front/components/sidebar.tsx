'use client';

import styled from 'styled-components';
import SidebarItem from './sidebar-item';

const Section = styled.section`
  height: calc(100vh + 1px);
  position: relative;
  top: -1px;
  background-color: #252525;
  border-right: 1px solid #343434;
  float: left;
`;

const Sidebar = (props: {
  items: object
}) => {
  const { items } = props;

  return (<Section>
    { Object.keys(items).map(
      (name: string) => <SidebarItem {...{ name, href: items[name] }}/>
    )}
  </Section>);
};

export default Sidebar;

