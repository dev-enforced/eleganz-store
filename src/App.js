import React from "react";
import { Navigation,Footer } from "./components";
import {RoutesList} from "./routes/Routes";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <RoutesList/>
      <Footer/>
    </div>
  );
}

export default App;
