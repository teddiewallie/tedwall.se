'use client';

import Sidebar from './styleguide-sidebar';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
`;

const Content = styled.section`
  margin: 2em;
`;

const Layout = (props: {
  children: React.ReactNode
}) => {
  const { children } = props;
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Layout;
