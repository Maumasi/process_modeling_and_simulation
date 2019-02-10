import React from 'react';

import { Tab } from './tab'
// import { SectionContent } from './section_content'
import { Content } from './content'


const Nav = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <nav  className="three wide column">
        <div className="sixteen wide ui secondary vertical pointing menu nav">

          <Tab tabName="Research and Analysis" init />
          <div className="menu">
            <Tab tabName="Introduction" addedClasses={['sub-item']} href="#introduction" />
            <Tab tabName="Proposed Business Model" addedClasses={['sub-item']} href="#proposed-business-model" />
            <Tab tabName="Cost Analysis" addedClasses={['sub-item']} />
          </div>


          {
            // <a className="sub-item item">Enterprise</a>
            // <a className="sub-item item">Consumer</a>
            // <Tab tabName="Messages" />
            // <Tab tabName="Friends" />
          }

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
