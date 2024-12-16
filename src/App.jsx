import { useRef } from "react";
import WebgiViewer from "./components/WebgiViewer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div id="loader">
            <div className="gif">
              <img src="./network.gif" alt="" />
            </div>
          </div>
          <Header />
          <main>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <WebgiViewer webgiGLB="scene (1).glb" />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
