import React from 'react';

const Keyword = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-sm bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded transition-colors duration-1000">
      {children}
    </span>
  );
};

export default Keyword;
