import TopbarComponent from '../components/topbar';

const links: { [key: string]: string } = {};
links.Home = '/';
links.Blog = '/blog';
links.Styleguide = '/styleguide';

const Topbar = () => (
  <TopbarComponent {...{links}} />
);

export default Topbar;

