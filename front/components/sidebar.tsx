'use client';

import styled from 'styled-components';
import SidebarItem from './sidebar-item';
import { useEffect, useState } from 'react';

const sectionWidth = '14em';

const Section = styled.section`
  width: ${sectionWidth};
  height: calc(100vh - 3.3em);
  position: relative;
  background-color: #252525;
  border-right: 1px solid #343434;
  transition: height 0.5s;
`;

const HiddenSection = styled.section`
  display: none;
`;

const Toggle = styled.button`
  border-radius: 0 0 1em 0;
  border-width: 0;
  border-right: 1px solid #343434;
  border-bottom: 1px solid #343434;
  background-color: #252525;
  position: absolute;
  left: calc(${sectionWidth} - 2.3em);
  font-size: 1.2em;
  padding: 0 0.5em;
  color: #ccc;
  cursor: pointer;
`;

const HiddenToggle = styled(Toggle)`
  position: absolute;
  left: 0;
`;

const Sidebar = (props: {
  items: object
}) => {
  const { items } = props;
  const [ isHidden, setHidden ] = useState(JSON.parse(localStorage.getItem('sidebar-is-hidden')) || false);

  useEffect(() => {
    localStorage.setItem('sidebar-is-hidden', JSON.stringify(isHidden));
  }, [isHidden]);

  const SidebarItems = Object.entries(items).map(([name, href], index) => {
    return (<SidebarItem key={`sidebar-${index}`} {...{name, href}} />);
  });

  const Wrapper = isHidden ? HiddenSection : Section;

  return (<>
    <Wrapper>
      <Toggle onClick={() => setHidden(!isHidden)}>☰</Toggle>
      { ...SidebarItems }
    </Wrapper>
    {isHidden && (<HiddenToggle onClick={() => setHidden(!isHidden)}>☰</HiddenToggle>)}
  </>);
};

export default Sidebar;

