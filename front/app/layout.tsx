import './globals.css';
import { Signika } from 'next/font/google';
import StyledComponentsRegistry from '../lib/styled-registry';
import Topbar from './topbar';

const defaultFont = Signika({ subsets: ['latin'] });

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
      <body className={defaultFont.className}>
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

