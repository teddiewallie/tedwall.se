'use client';

import styled, { css } from 'styled-components';
import SidebarItem from './sidebar-item';
import { useEffect, useState } from 'react';

let sectionWidth = '14em';

const Section = styled.section<{ isHidden: Boolean; }>`
  flex: 0 0 ${sectionWidth};
  height: calc(100vh - 3.3em);
  position: relative;
  background-color: #252525;
  border-right: 1px solid #343434;
  transition: flex 0.3s ease-in-out;
  overflow: hidden;
  align-self: flex-start;

  ${(props) => props.isHidden && css`
    width: 0;
    flex: 0 0 0;
  `};
`;

const Toggle = styled.button<{ isHidden: Boolean; }>`
  border-radius: 0 0 1em 0;
  border-width: 0;
  border-right: 1px solid #343434;
  border-bottom: 1px solid #343434;
  background-color: #252525;
  position: absolute;
  left: calc(${sectionWidth} - 2.3em);
  font-size: 1.2em;
  padding: 0 0.6em 0.2em 0.5em;
  color: #ccc;
  cursor: pointer;
  transition-property: left, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  animation: boxShadow 1s ease-out;

  @keyframes boxShadow {
    0% { box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.0); }
    49% { box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.0); }
    50% { box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3); }
    100% { box-shadow: 10px 10px 20px 5px rgba(255, 255, 255, 0.0); }
  }

  &:hover {
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.2);
  }

  ${(props) => props.isHidden && css`
    left: 0em;
  `};
`;

const Sidebar = (props: { items: object }) => {
  const { items } = props;

  const [ isHidden, setHidden ] = useState(true);
 
  const SidebarItems = Object.entries(items).map(([name, href], index) => {
    return (<SidebarItem key={`sidebar-${index}`} {...{name, href}} />);
  });

  return (<>
    <Section {...{ isHidden }}>
      { ...SidebarItems }
    </Section>
    <Toggle {...{ isHidden }} onClick={() => setHidden(!isHidden)}>☰</Toggle>
  </>);
};

export default Sidebar;

