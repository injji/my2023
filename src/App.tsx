import React from "react";
import GlobalStyle from "./common/GlobalStyle";
import Main from "./pages/Main/Main";
import SliderSync from "./pages/SliderSync";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Main />
      </Layout>

      {/* <SliderSync /> */}
    </>
  );
};

export default App;
