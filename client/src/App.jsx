import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import Signup from "./pages/Signup";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
