import DarkModeToggle from '@/components/DarkModeToggle';
import ScrollIndicator from '@/components/ScrollIndicator';
import Image from 'next/image';
import GitHubIcon from 'public/icons/github-mark.svg';
import ResumeIcon from 'public/icons/file.svg';

export default function Header() {
  const __DEV__ = process.env.NODE_ENV === 'development';
  return (
    <div className="w-full">
      <div className="h-[64px] flex items-center justify-between font-medium px-4">
        <span>
          <a
            className="rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary"
            href={
              __DEV__ ? 'http://blog.localhost:3000' : 'https://blog.mugil.dev'
            }
          >
            민무길 블로그
          </a>
        </span>
        <span className="flex items-center gap-4">
          <ExternalLink
            title="Resume"
            href={
              __DEV__
                ? 'http://resume.localhost:3000'
                : 'https://resume.mugil.dev'
            }
            icon={ResumeIcon}
          />
          <ExternalLink
            title="GitHub"
            href={'https://github.com/gilmujjang'}
            icon={GitHubIcon}
          />
          <DarkModeToggle />
        </span>
      </div>
      <ScrollIndicator />
    </div>
  );
}

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
