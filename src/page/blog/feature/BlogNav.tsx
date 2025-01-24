'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import GitHubIcon from 'public/icons/github-mark.svg';
import ResumeIcon from 'public/icons/file.svg';

const BlogNav = () => {
  return (
    <aside className="bg-white dark:bg-gray-200 p-8 rounded-lg flex flex-col gap-4">
      <Welcome />
      <DarkModeToggle />
      {/* <PostFilter /> */}
      <div style={{ display: 'flex', gap: 16 }}>
        <ExternalLink title="Resume" href={'/'} icon={ResumeIcon} />
        <ExternalLink
          title="GitHub"
          href={'https://github.com/gilmujjang'}
          icon={GitHubIcon}
        />
      </div>
      <Copyright />
    </aside>
  );
};

const Welcome = () => {
  return <span className="text-2xl">민무길의 블로그</span>;
};

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rotateCount, setRotateCount] = useState(0);
  console.log('🚀 ~ DarkModeToggle ~ isDarkMode:', isDarkMode, rotateCount);
  // 소행성 위에 어린왕자가 앉아있고 다크모드 on/off할때마다 별과 달, 태양이 돌면서 밝아졌다 어두워졌다함
  // 한바퀴 돌면 하루 지난걸로 치고 날짜 카운트
  // 날짜 변화에 따라 옆에 장미가 성장하고 죽음
  // refresh 적용시 시간 로퇌

  const handleToggle = () => {
    document.documentElement.classList.toggle('dark', !isDarkMode);
    setRotateCount((prev) => prev + 1);
    setIsDarkMode((prev) => !prev); // 회전 상태 토글
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative w-64 h-32 bg-blue-900 dark:bg-gray-950 border rounded-xl overflow-hidden"
        onClick={handleToggle}
      >
        <Image
          src="/images/little_prince.png"
          alt="little prince"
          width={96}
          height={96}
          className="absolute bottom-0 left-4"
        />
        <div
          className={`absolute transition-transform duration-1000`}
          style={{ transform: `rotate(${rotateCount * 180}deg)` }}
        >
          <div className="w-64 h-32 flex justify-end p-2">
            <div className="w-10 h-10 rounded-full bg-yellow-500"></div>
          </div>
          <div className="w-64 h-32 flex justify-start items-end p-2">
            <div className="w-10 h-10 rounded-full bg-yellow-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostFilter = () => {
  return (
    <>
      <span className="text-xs">Categories</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span className="text-sm">All</span>
        <span className="text-sm">Development</span>
        <span className="text-sm">Investment</span>
      </div>
    </>
  );
};

const ExternalLink = ({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: any;
}) => {
  return (
    <a className="text-base flex gap-1" href={href}>
      <Image src={icon} alt="GitHub Icon" width={24} height={24} />
      <span>{title}</span>
    </a>
  );
};

const Copyright = () => {
  return <span className="text-sm">Copyright 민무길</span>;
};

export default BlogNav;
