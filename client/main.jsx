import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Nav, Footer, Header, Content } from '/imports/views/components';

// <HomeHero />
const App = () => {
  return (
      <main>
        <Header />
        <div>
          <div className="ui section divider"></div>
          <Nav />
        </div>

        <Footer />
      </main>
  );
}



Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
