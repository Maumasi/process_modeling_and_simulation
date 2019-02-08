import React from 'react';

const Tab = ({ tabName }) => {
  let classes = `${tabName}-tab tab-section item`;
  if(tabName === 'Bio') {
    classes += ' active';
  }

  return (
    <a
      className={classes}
      onClick={()=> {
        const tab = document.getElementsByClassName("tab-section");
        [...tab].forEach((el) => {
          el.classList.remove('active')
        });

        const selectedTab = document.querySelector(`.${tabName}-tab.tab-section.item`);
        selectedTab.classList.add("active");
      }}
      >
        { tabName }
    </a>
  );
}

export { Tab };
