import TopbarComponent from '../components/topbar';
import items from '../models/topbar-items';

const Topbar = () => (
  <TopbarComponent {...{items}} />
);

export default Topbar;

