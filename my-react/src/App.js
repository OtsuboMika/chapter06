import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Detail } from './pages/Detail';
import { Routes, Route } from "react-router-dom";
import { Contact } from './pages/Contact';


function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts/:id" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </div>
  );
};

export default App;
