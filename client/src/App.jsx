import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/ui/appbars/header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default App;
