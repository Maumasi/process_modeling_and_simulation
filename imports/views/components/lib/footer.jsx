import React from 'react';

const date = new Date();

const Footer = () => {
  return (
    <footer className="ui grid center">
      <div className="one wide column"></div>
      <p className="fourteen wide column">Maumasi Copyright &copy; { date.getFullYear() }</p>
    </footer>
  );
}

export { Footer };
