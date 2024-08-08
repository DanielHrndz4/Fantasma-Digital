import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
