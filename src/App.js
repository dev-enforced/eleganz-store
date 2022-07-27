import React from "react";
import { Navigation, Footer, ScrollToTop } from "components";
import { RoutesList } from "routes";
function App() {

  return (
    <div className="App">
      <ScrollToTop>
        <Navigation />
        <RoutesList />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
