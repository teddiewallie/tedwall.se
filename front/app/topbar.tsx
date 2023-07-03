import TopbarComponent from '../components/topbar';

const links: { [key: string]: string } = {};
links.Home = '/';
links.Blog = '/blog';
links.Styleguide = '/styleguide';
links.GitHub = 'https://github.com/teddiewallie/tedwall.se';

const Topbar = () => (
  <TopbarComponent {...{links}} />
);

export default Topbar;

