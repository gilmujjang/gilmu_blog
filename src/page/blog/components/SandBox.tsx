import dynamic from 'next/dynamic';
import React from 'react';

interface Props {
  slug: string;
}

const SandBox = ({ slug }: Props) => {
  const Atraction = dynamic(() => import(`@/blog/playground/${slug}/main.tsx`));
  return <Atraction />;
};

export default SandBox;
