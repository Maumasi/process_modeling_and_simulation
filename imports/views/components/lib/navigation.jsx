

import React from 'react';

const Navigation = () => {
  return (
    <navigation  className="ui grid">
      <div className="one wide column"></div>
      <div className="two wide column">
        <div className="ui vertical fluid tabular menu">
          <a className="item active">
            Bio
          </a>
          <a className="item">
            Pics
          </a>
          <a className="item">
            Companies
          </a>
          <a className="item">
            Links
          </a>
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
