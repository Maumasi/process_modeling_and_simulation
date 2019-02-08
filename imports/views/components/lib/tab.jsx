import React from 'react';

const Tab = ({ tabName, init}) => {
  let classes = `${tabName}-tab tab-section item`;
  if(init) {
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

        document.querySelector(`.${tabName}-tab.tab-section.item`)
          .classList.add("active");
      }}
      >
        { tabName }
    </a>
  );
}

export { Tab };
