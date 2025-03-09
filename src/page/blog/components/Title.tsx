import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl font-semibold mb-2">{children}</h2>;
};

export default Title;
