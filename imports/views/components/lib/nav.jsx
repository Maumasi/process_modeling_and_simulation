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
          </div>

          <div className="ui hidden divider"></div>
          <div class="ui divider"></div>
          <div className="ui hidden divider"></div>

          <Tab tabName="Business Process Analysis" href="#business-process-analysis" />
          <div className="menu">
            <Tab tabName="Sales Strategy" addedClasses={['sub-item']} href="#sales-strategy" />
            <Tab tabName="Pricing Analysis" addedClasses={['sub-item']} href="#pricing-analysis" />
            <Tab tabName="Domestic In-Store Pricing Strategy" addedClasses={['sub-item']} href="#domestic-in-store-pricing-strategy" />
            <Tab tabName="Online Ecommerce Pricing Strategy" addedClasses={['sub-item']} href="#online-ecommerce-pricing-strategy"/>
          </div>

          <div className="ui hidden divider"></div>
          <div class="ui divider"></div>
          <div className="ui hidden divider"></div>

          <Tab tabName="Operations Research" href="#operations-research" />
          <div className="menu">
            <Tab tabName="Operations Research" addedClasses={['sub-item']} href="#operations-analysis" />
            <Tab tabName="5yr Plan: Phase 1" addedClasses={['sub-item']} href="#5yr-plan-phase-1" />
            <Tab tabName="5yr Plan: Phase 2" addedClasses={['sub-item']} href="#5yr-plan-phase-2" />
            <Tab tabName="5yr Plan: Phase 3" addedClasses={['sub-item']} href="#5yr-plan-phase-3" />
            <Tab tabName="5yr Plan: Phase 4" addedClasses={['sub-item']} href="#5yr-plan-phase-4" />
            <Tab tabName="5yr Plan: Phase 5" addedClasses={['sub-item']} href="#5yr-plan-phase-5" />
            <Tab tabName="Decision Analysis" addedClasses={['sub-item']} href="#decision-analysis" />
          </div>




          <div className="ui hidden divider"></div>
          <div class="ui divider"></div>
          <div className="ui hidden divider"></div>

          <Tab tabName="Resources" href="#resources" />

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
