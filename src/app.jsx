import './app.css';
import React, { useState } from "react";
import AppRouter from './router/AppRouter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
    <header>
      <h1>Blog</h1>
    </header>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>
      <h2>Coding</h2>
    </footer>
    </>
  );
}

export default App;
