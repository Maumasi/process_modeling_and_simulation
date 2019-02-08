

import React from 'react';

import { Tab } from './tab'


const Navigation = () => {
  return (
    <navigation  className="ui grid">
      <div className="one wide column"></div>
      <div className="two wide column">
        <div className="ui vertical fluid tabular menu">
          <Tab tabName="Bio" />
          <Tab tabName="Pics" />
          <Tab tabName="Companies" />
          <Tab tabName="Links" />
        </div>
      </div>
      <div className="twelve wide stretched column">
        <div className="ui segment">
          This is an stretched grid column. This segment will always match the tab height
        </div>
      </div>
    </navigation>
  );
}

// export component
export { Navigation };
