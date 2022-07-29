import React from "react";
import { Navigation, Footer, ScrollToTop } from "components";
import { Toaster } from "react-hot-toast";
import { RoutesList } from "routes";
// import { toastSettings } from "constants";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
        }}
      />
      <ScrollToTop>
        <Navigation />
        <RoutesList />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
