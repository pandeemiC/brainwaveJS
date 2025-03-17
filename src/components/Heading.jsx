import React from 'react';

const Heading = ({ className, children }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {children}
    </div>
  );
};

export default Heading;