'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rotateCount, setRotateCount] = useState(0);
  // 소행성 위에 어린왕자가 앉아있고 다크모드 on/off할때마다 별과 달, 태양이 돌면서 밝아졌다 어두워졌다함
  // 한바퀴 돌면 하루 지난걸로 치고 날짜 카운트
  // 날짜 변화에 따라 옆에 장미가 성장하고 죽음
  // refresh 적용시 시간 로퇌

  // 브라우저의 다크모드 설정 감지 및 초기 상태 적용
  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const handleToggle = () => {
    document.documentElement.classList.toggle('dark', !isDarkMode);
    setRotateCount((prev) => prev + 1);
    setIsDarkMode((prev) => !prev); // 회전 상태 토글
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative w-32 h-16 bg-blue-900 dark:bg-gray-950 transition-colors duration-1000 border rounded-xl overflow-hidden"
        onClick={handleToggle}
      >
        <Image
          src="/images/little_prince.png"
          alt="little prince"
          width={48}
          height={48}
          className="absolute bottom-0 left-4"
        />
        <div
          className={`absolute transition-transform duration-1000`}
          style={{ transform: `rotate(${rotateCount * 180}deg)` }}
        >
          <div className="w-32 h-16 flex justify-end p-2">
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
          </div>
          <div className="w-32 h-16 flex justify-start items-end p-2">
            <div className="w-8 h-8 rounded-full bg-yellow-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
