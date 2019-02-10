import React from 'react';

const date = new Date();

const Footer = () => {
  return (
    <footer className="ui grid center">
      <p className="sixeen wide column">Maumasi Copyright &copy; { date.getFullYear() }</p>
    </footer>
  );
}

export { Footer };
