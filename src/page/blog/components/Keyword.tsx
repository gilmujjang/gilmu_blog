import React from 'react';

const Keyword = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-gray-600 text-sm bg-gray-200 px-2 py-0.5 rounded">
      {children}
    </span>
  );
};

export default Keyword;
