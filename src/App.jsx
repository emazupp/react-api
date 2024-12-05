import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import "./assets/css/index.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("ciao");
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
