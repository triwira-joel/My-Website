import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import './app.scss';
import Works from "./components/works/Works.jsx";
import { useState } from 'react';
import Diorama from "./components/diorama/Diorama.jsx";
// import Circle from "./components/circle/Circle.jsx";

function App() {
  const titles = ['Hello.', 'Hi.', 'Hola.'];
  const [title, setTitle] = useState(0);
  const [diorama, setDiorama] = useState(false);
  return (
    <div className="app">
      <Topbar title={title} setTitle={setTitle} titles={titles} />
      <div className="sections">
        <Home />
        <About />
        <Works diorama={diorama} setDiorama={setDiorama} />
        <Contact />
      </div>
      <div className="diorama">
        <Diorama diorama={diorama} setDiorama={setDiorama} />
      </div>

    </div>
  );
}

export default App;
