import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import { menu } from '../components/base/menu_header';

function PageModel() {
  const location = useLocation();
  let locationPath = location.pathname.replace("/", "");
  return (
    <>
        <Header/>
        <main className='section_page'>
            {
              menu.map((mn) => (
                locationPath === mn.permalien.replace("/", "") ?
                (
                  mn.components
                ) : <></>
              ))
            }
        </main>
        <Footer/>
    </>
  )
}

export default PageModel
