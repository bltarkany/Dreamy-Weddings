import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components/ui/appbars/index';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
