import Image from 'next/image';
import React from 'react';
import CategoryTag from './CategoryTag';

export default function Post() {
  return (
    <div className="border rounded-lg  hover:shadow-lg transition-shadow flex">
      <Image
        src="/thumbnail/react-native-build-thumbnail.png"
        alt="Thumbnail"
        width={200}
        height={200}
        className=" rounded-l-lg lg:w-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <CategoryTag type={'develope'} />
        <h2 className="text-xl font-semibold mb-2">
          React Native 빌드 훑어보기
        </h2>
        <p className="text-sm text-gray-600">Bundle 파일 위주로 훑어봅니다</p>
      </div>
    </div>
  );
}
