import React from 'react';

const Description = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-xl font-semibold mb-2">{children}</h4>;
};

export default Description;
