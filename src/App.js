
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen from './Screens/Screen';
import Contact from './Screens/Contact'
import Author from './Screens/Author';

function App() {
  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Screen />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/author' element={<Author/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
