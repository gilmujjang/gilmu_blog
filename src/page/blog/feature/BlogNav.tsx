import Image from 'next/image';
import React from 'react';
import GitHubIcon from 'public/icons/github-mark.svg';
import ResumeIcon from 'public/icons/file.svg';

const BlogNav = () => {
  return (
    <aside className="bg-white p-8 rounded-lg flex flex-col gap-4">
      <Welcome />
      {/* <DarkModeToggle /> */}
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
  return <div>Dark Mode Toggle</div>;
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
