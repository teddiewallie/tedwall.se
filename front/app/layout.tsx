import './globals.css';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/styled-registry';
import Topbar from './topbar';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'tedwall.se',
  description: 'tedwall.se',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Topbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
};

export { metadata };
export default RootLayout;

