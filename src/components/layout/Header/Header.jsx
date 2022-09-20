import React from 'react';

const Header = (props) => (
    <header>
      <h1>{props.title}</h1>
      {props.children}
    </header>
  );

export default Header;