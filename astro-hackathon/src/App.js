import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FindOut />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
