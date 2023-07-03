'use client';

import Sidebar from './styleguide-sidebar';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2em;
  margin-left: 16em;
`;

const Layout = (props: { children: object }) => {
  const { children } = props;
  return (
    <>
      <Sidebar />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
