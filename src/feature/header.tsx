import DarkModeToggle from '@/components/DarkModeToggle';
import ScrollIndicator from '@/components/ScrollIndicator';
import Image from 'next/image';
import GitHubIcon from 'public/icons/github-mark.svg';
import ResumeIcon from 'public/icons/file.svg';

export default function Header() {
  const __DEV__ = process.env.NODE_ENV === 'development';
  return (
    <header className="w-full sticky top-0 border-b border-gray-200 dark:border-gray-700 transition-colors duration-1000">
      <div className="h-[64px] flex items-center justify-between font-medium px-4 md:static md:h-20 bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <span>
          <a
            className="text-BLACK dark:text-white rounded-full px-4 py-1 text-center text-sm hover:text-primary bg-muted font-medium text-primary"
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
    </header>
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
    <a className="text-BLACK dark:text-white text-base flex gap-1" href={href}>
      <Image src={icon} alt="GitHub Icon" width={24} height={24} />
      <span>{title}</span>
    </a>
  );
};
