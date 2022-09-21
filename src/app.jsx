import "./app.css";
import React, { useState } from "react";
import AppRouter from "./router/AppRouter";

function App({ db }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="container">
      <AppRouter isLoggedIn={isLoggedIn} db={db} />
      <footer>
        <h3>Coding</h3>
      </footer>
    </div>
  );
}

export default App;
