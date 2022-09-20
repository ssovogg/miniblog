import "./app.css";
import React, { useState } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="container">
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>
        <h3>Coding</h3>
      </footer>
    </div>
  );
}

export default App;
