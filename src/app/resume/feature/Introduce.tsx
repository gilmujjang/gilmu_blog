import Image from 'next/image';
import React, { ReactNode } from 'react';

const Introduce = () => {
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
              <ContactItem href="/blog" newTab={false}>
                Blog
              </ContactItem>
            </div>
          </div>
        </div>
        <p></p>
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
        className="px-1 text-xs text-BLACK dark:text-GRAY_LIGHT hover:text-BLACK dark:hover:text-BLACK 
      hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
      >
        {children}
      </span>
    </a>
  );
};
