import DarkModeToggle from '@/components/DarkModeToggle';
import ScrollIndicator from '@/components/ScrollIndicator';
import FileIcon from '@/components/icons/FileIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import { headers } from 'next/headers';

export default function Header() {
  const __DEV__ = process.env.NODE_ENV === 'development';
  const headersList = headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0];
  return (
    <header className="w-full sticky top-0 border-b border-GRAY_SEMI_LIGHT dark:border-GRAY_SEMI_HEAVY transition-colors duration-1000">
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
          {subdomain === 'blog' ? (
            <ExternalLink
              title="Resume"
              href={
                __DEV__
                  ? 'http://resume.localhost:3000'
                  : 'https://resume.mugil.dev'
              }
              icon={FileIcon}
            />
          ) : (
            <ExternalLink
              title="Blog"
              href={
                __DEV__
                  ? 'http://blog.localhost:3000'
                  : 'https://blog.mugil.dev'
              }
              icon={FileIcon}
            />
          )}
          <ExternalLink
            title="GitHub"
            href={'https://github.com/gilmujjang'}
            icon={GithubIcon}
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
  icon: Icon,
}: {
  title: string;
  href: string;
  icon: any;
}) => {
  return (
    <a
      className="text-base flex gap-1 text-gray-900 dark:text-gray-100"
      href={href}
    >
      <Icon />
      <span>{title}</span>
    </a>
  );
};
