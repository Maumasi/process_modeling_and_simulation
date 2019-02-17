import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Tab = ({ tabName, addedClasses, init, href}) => {
  const tabClassName = tabName.split(' ').join('-');
  let classes = `${tabClassName}-tab sixteen wide column tab-section item`;

  if(addedClasses) {
    addedClasses.forEach((cls) => {
      classes += " "+ cls;
    });
  }

  if(init) {
    classes += ' active';
  }

  return (
    <AnchorLink
      href={href}
      className={classes}
      onClick={()=> {
        const tab = document.getElementsByClassName("tab-section");
        [...tab].forEach((el) => {
          el.classList.remove('active')
        });

        document.querySelector(`.${tabClassName}-tab.tab-section.item`)
          .classList.add("active");
      }}
      >
        { tabName }
    </AnchorLink>
  );
}

export { Tab };
