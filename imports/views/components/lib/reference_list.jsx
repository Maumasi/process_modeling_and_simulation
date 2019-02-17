
import React from 'react';


const ReferenceList = ({ references }) => {

  refList = references.map(({ reference, link }, i) => {
    return (
      <li key={i}>
        <p>{reference} <a href={`"${link}"`} target="_blank">{link}</a></p>
      </li>
    );
  });

  return (
    <div>
      <ul className="ref-list">
        { refList }
      </ul>
    </div>
  );
}



export { ReferenceList };
