import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MDXImage = ({ src, alt = src, width = 600, height = 400 }: Props) => {
  return <Image alt={alt} src={src} width={width} height={height} />;
};

export default MDXImage;
