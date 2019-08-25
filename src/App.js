import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers-statefullComponents/BurgerBuilder/burgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <p>Testing if this works!</p>
      </Layout>
      <BurgerBuilder />
    </div>
  );
}

export default App;
