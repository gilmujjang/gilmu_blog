import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import SectionTitle from '../components/SectionTitle';

const WorkExperience = () => {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <div className="flex md:flex-col items-center md:items-start mr-4 gap-4">
            <Image
              src="/images/nemo.png"
              alt="네모앱 로고"
              width={96}
              height={96}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid"
            />
            <CompanyInfo
              name="슈가힐"
              job="Frontend Developer"
              start="2022.04"
            />
          </div>
          <div>
            <div className="md:flex items-center gap-4 w-full mb-2 hidden">
              <div className="h-[1px] bg-GRAY_HEAVY/20 flex-grow" />
              <span className="text-GRAY_HEAVY p-2 text-center italic">
                MAU NN만의 상가, 사무실 1위 프롭테크앱 네모!
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <ExperienceByProduct
                product="네모앱"
                links={[
                  {
                    name: 'AppStore',
                    href: 'https://apps.apple.com/kr/app/%EB%84%A4%EB%AA%A8-%EC%83%81%EA%B0%80-%EC%82%AC%EB%AC%B4%EC%8B%A4-%EC%B0%BD%EC%97%85%ED%95%A0-%EB%95%8C-%EB%84%A4%EB%AA%A8/id1209888606',
                  },
                  {
                    name: 'PlayStore',
                    href: 'https://play.google.com/store/apps/details?id=kr.co.sugarhill.nemoapp&hl=ko',
                  },
                ]}
                productDescription={
                  'MAU NN만의 상가, 사무실 1위 프롭테크앱 네모! 2023년 부터 단독으로 네모앱의 신규 프로젝트 개발, 유지 보수, 스토어 관리등의 업무를 진행 했습니다. 개발환경, 디펜던시 마이그레이션 및 전체 리팩토링 등의 업무도 진행했습니다.'
                }
                techStack={['ReactNative']}
                experiences={[
                  {
                    title: '배포 자동화',
                    description:
                      'fastlane과 github actions, Xcode cloud를 사용해 네모앱의 배포 자동화를 개발했습니다. CI/CD와의 연계를 위해 브랜치 관리 방법을 git flow에서 trunk-based 방식으로 변경했습니다.',
                  },
                  {
                    title: '앱푸시와 딥링크 개발',
                    description:
                      'FCM을 사용해 앱푸시를 개발하고 딥링크 스킴을 개발해서 앱푸시에 딥링크를 함께 보내어 마케팅에 활용하게 되었습니다.',
                  },
                  {
                    title: 'ReactNative 버전 마이그레이션',
                    description:
                      'android build gradle, java, node 등의 개발환경과 react native를 포함한 40여가지의 라이브러리 버전 마이그레이션을 진행했습니다. Sentry 기준 에러 발생률이 50% 감소했습니다.',
                  },
                  {
                    title: '네모앱 개발 및 운영',
                    description:
                      '네모앱 신규기능 개발 및 유지보수, 스토어 관리등의 업무를 진행 했습니다.',
                  },
                ]}
              />
              <ExperienceByProduct
                product="네모웹"
                links={[
                  {
                    name: 'Web',
                    href: 'https://www.nemoapp.kr/store',
                  },
                ]}
                productDescription={
                  '.net과 React가 결합된 형태의 레거시 프로젝트를 Next.js 13으로 마이그레이션 하는 프로젝트에서 지도와 리스트, 상세화면 등 일반유저가 사용하는 화면단을 개발했습니다..'
                }
                techStack={['Next.js']}
                experiences={[
                  {
                    title: '매물, 지역 마커 클러스터링 시스템 개발',
                    description:
                      '카카오 지도 API를 사용해 매물, 지역 마커 클러스터링 시스템를 개발했습니다. 수천개의 마커를 렌더링 하는 과정에서 성능 최적화에 대해 고민했습니다.',
                  },
                  {
                    title: '네모앱과 지도 서비스 공유',
                    description:
                      '네모앱에서 WebView를 사용해 웹의 지도와 서비스를 공유해서 서비스의 통일성을 유지했습니다. ReactNative와 Next.js에서 공통으로 사용할 수 있는것과 없는것을 구별하여 성공적으로 통합했습니다.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceByProduct = ({
  product,
  links,
  productDescription,
  techStack,
  experiences,
}: {
  product: string;
  links: { href: string; name: string }[];
  productDescription: string;
  techStack: string[];
  experiences: { title: string; description: string }[];
}) => {
  return (
    <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
      <div className="flex gap-4 my-4 items-center">
        <h4 className="text-xl font-semibold">{product}</h4>
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.href}
              target="_blank"
              className="text-PRIMARY italic underline"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <blockquote className="my-1 w-full rounded-lg bg-PRIMARY/10 border-PRIMARY p-4">
        <p>{productDescription}</p>
      </blockquote>
      <div className="flex gap-2 my-4">
        {techStack.map((tech) => {
          return (
            <span
              key={tech}
              className="rounded-md bg-GRAY_LIGHT text-PRIMARY px-2 py-0.5"
            >
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {experiences.map((experience) => {
          return (
            <div
              key={experience.title}
              className="markdown w-full flex flex-col gap-1"
            >
              <h4 className="text-lg font-semibold">{experience.title}</h4>
              <p className="text-sm">{experience.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CompanyInfo = ({
  name,
  job,
  start,
  end,
}: {
  name: string;
  job: string;
  start: string;
  end?: string;
}) => {
  return (
    <div className="w-48">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <div className="flex flex-col">
        <span>{job}</span>
        <span>
          {start} ~ {end || '재직중'}
        </span>
      </div>
    </div>
  );
};

export default WorkExperience;
