import React from 'react';
import  './style/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageModel from './pages/PageModel';
import { menu } from './components/base/menu_header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            menu.map((mn, index)=> (
              <Route key={index} path={mn.permalien} element={<PageModel/>} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App