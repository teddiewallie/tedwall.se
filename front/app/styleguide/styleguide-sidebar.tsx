import items from '../../models/styleguide-items'
import Sidebar from '../../components/sidebar';

const StyleguideSidebar = () => (
  <Sidebar {...{items}} />
);

export default StyleguideSidebar;

