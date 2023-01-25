import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Video from "./Component/Video";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/videos"  element={<Video/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
