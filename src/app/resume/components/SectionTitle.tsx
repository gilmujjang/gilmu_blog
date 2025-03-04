import React from 'react';

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-3xl font-semibold pb-4 mb-12 border-b">{children}</h2>
  );
};

export default SectionTitle;
