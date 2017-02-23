const components = {};

// TODO: use a util from react-com to import all components
// or we could have some DSL to load components from folder
import Counter from './components/Counter';
import Footer from './components/Footer';

components.Counter = Counter;
components.Footer = Footer;

export default components;
