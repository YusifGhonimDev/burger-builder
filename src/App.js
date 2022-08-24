import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./index.css";

const App = () => (
  <div>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>
);

export default App;
