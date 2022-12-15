import Intro from "./OOBE/Intro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Config from "./OOBE/Config";

function App() {
  return (
    <Router>
      <div className="App h-screen w-screen bg-white text-black dark:bg-gray-800 dark:text-white">
        <Routes>
          <Route path="/welcome" element={<Intro />}/>
          <Route path="/config/:id" element={<Config />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;