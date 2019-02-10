import React from 'react';

const Image = ({ srcLink, desription, height, width }) => {
  return (
    <div>
      <img src={srcLink} alt={desription} height={height} width={width} />
    </div>
  );
}

// export component
export { Image };
