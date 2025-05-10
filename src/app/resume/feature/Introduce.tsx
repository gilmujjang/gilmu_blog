import React, { ReactNode } from 'react';

const Introduce = () => {
  const __DEV__ = process.env.NODE_ENV === 'development';
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
              backgroundColor: 'gray',
            }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">
              안녕하세요!
              <br />
              프론트엔드 개발자{' '}
              <span className="text-PRIMARY font-bold">민무길</span> 입니다
            </h1>
            <div className="flex gap-1">
              <ContactItem href="mailto:alsanrlf@naver.com">Email</ContactItem>
              <ContactItem href="https://github.com/gilmujjang">
                Github
              </ContactItem>
              <ContactItem
                href={
                  __DEV__
                    ? 'http://blog.localhost:3000'
                    : 'https://blog.mugil.dev'
                }
                newTab={false}
              >
                Blog
              </ContactItem>
            </div>
          </div>
        </div>
        <p>해내는 개발자?</p>
      </div>
    </section>
  );
};

export default Introduce;

const ContactItem = ({
  children,
  href,
  newTab = true,
}: {
  children: ReactNode;
  href: string;
  newTab?: boolean;
}) => {
  return (
    <a
      target={newTab ? '_blank' : undefined}
      rel="noreferrer"
      href={href}
      className="w-fit"
    >
      <span
        className="px-1 text-xs dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK text-BLACK 
      hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
      >
        {children}
      </span>
    </a>
  );
};
