'use client';

import styled from 'styled-components';
import SidebarItem from './sidebar-item';

const Section = styled.section`
  height: calc(100vh - 3.3em);
  position: relative;
  background-color: #252525;
  border-right: 1px solid #343434;
  float: left;
`;

const Sidebar = (props: {
  items: object
}) => {
  const { items } = props;

  const SidebarItems = Object.entries(items).map(([name, href], index) => {
    return (<SidebarItem key={`sidebar-${index}`} {...{name, href}} />);
  });

  return (<Section>
    { ...SidebarItems }
  </Section>);
};

export default Sidebar;

