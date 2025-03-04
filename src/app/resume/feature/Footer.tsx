import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex gap-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:alsanrlf@naver.com"
          className="w-fit"
        >
          <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK">
            Email
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gilmujjang"
          className="w-fit"
        >
          <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK">
            Github
          </span>
        </a>
        <a target="_blank" rel="noreferrer" href="/blog" className="w-fit">
          <span className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK">
            Blog
          </span>
        </a>
      </div>
      <span className="whitespace-pre-wrap text-center">
        Copyright 2025. 민무길 All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
