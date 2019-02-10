import React from 'react';

import { Tab } from './tab'
// import { SectionContent } from './section_content'
import { Content } from './content'


const Nav = () => {
  return (
    <div className="ui grid">
      <div className="three wide column"></div>
      <nav  className="one wide column">
        <div className="sixteen wide ui secondary vertical pointing menu nav">

          <Tab tabName="Research and Analysis" init href="#page" />
          <div className="menu">
            <Tab tabName="Introduction" addedClasses={['sub-item']} href="#introduction" />
            <Tab tabName="Proposed Business Model" addedClasses={['sub-item']} href="#proposed-business-model" />
            <Tab tabName="KPI" addedClasses={['sub-item']} href="#kpi" />
            <Tab tabName="Cost Analysis" addedClasses={['sub-item']} href="#cost-analysis"/>
            <Tab tabName="Resources" addedClasses={['sub-item']} href="#resources" />
          </div>


          {
            // <a className="sub-item item">Enterprise</a>
            // <a className="sub-item item">Consumer</a>
            // <Tab tabName="Messages" />
            // <Tab tabName="Friends" />
          }

        </div>
      </nav>
      <div className="twelve wide column">
        <Content />
      </div>
    </div>
  );
}

// export component
export { Nav };
