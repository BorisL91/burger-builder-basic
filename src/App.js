import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers-statefullComponents/BurgerBuilder/burgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
