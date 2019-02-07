import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Navigation, Footer, HomeHero } from '/imports/views/components';

const App = () => {
  return (
      <main>
        <div>
          <HomeHero />
          <Navigation />
        </div>

        <Footer />
      </main>
  );
}



Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
