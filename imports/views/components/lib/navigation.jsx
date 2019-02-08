

import React from 'react';

import { Tab } from './tab'
import { SectionContent } from './section_content'


const Navigation = () => {
  return (
    <nav  className="ui grid">
      <div className="one wide column"></div>
      <div className="two wide column">
        <div className="ui vertical fluid tabular menu">
          <Tab tabName="Introduction" init />
          {
            // <Tab tabName="Pics" />
            // <Tab tabName="Companies" />
            // <Tab tabName="Links" />
          }
        </div>
      </div>
      <div className="twelve wide stretched column">
        <div className="ui segment">
          <SectionContent />
        </div>
      </div>
    </nav>
  );
}

// export component
export { Navigation };
