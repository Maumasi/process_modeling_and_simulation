import React from 'react';

import { Tab } from './tab'
// import { SectionContent } from './section_content'
import { Content } from './content'


const Nav = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <nav  className="three wide column">
        <div className="fifteen wide ui secondary vertical pointing menu nav">
          <Tab tabName="Introduction" init />
          <Tab tabName="Messages" />
          <Tab tabName="Friends" />
        </div>
      </nav>
      <div className="eleven wide column">
        <Content />
      </div>
    </div>
  );
}

// export component
export { Nav };
