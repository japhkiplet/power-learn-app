import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
