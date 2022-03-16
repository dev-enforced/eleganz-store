import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Mockbee, MockMan } from "./pages/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockbee" element={<Mockbee />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
