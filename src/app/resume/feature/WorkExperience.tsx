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
          <div>
          <div className="flex md:flex-col items-center md:items-start mr-4 gap-4 md:sticky md:top-12">
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
                    title: '코드푸시 AppCenter 마이그레이션',
                    period: '2025.03 - 2025.04',
                    description:'번들파일을 S3에 업로드하고 히스토리를 json으로 관리하는 방식으로 마이그레이션 했습니다. 업데이트 체크 속도는 95%, 번들 파일 다운로드 속도는 70% 개선했습니다.'
                  },
                  {
                    title: '네모앱 CI/CD 구축',
                    period: '2025.01 - 2025.02',
                    description:
                      'github actions, fastlane, Xcode cloude를 사용해 커밋의 브랜치와 태그명을 사용해 테스트용과 배포용 앱 버전을 구분하여 스토어에 업데이트하는 시스템을 개발했습니다.',
                  },
                  {
                    title: '앱푸시, 딥링크 개발',
                    period: '2024.09 - 2024.11',
                    description:
                      '마케팅 팀에서 발송할 다양한 푸시알림과 웹뷰를 통해서 관리해야하는 여러 딥링크 사용방식을 url 파라미터를 사용하는 방식으로 통합해서 관리했습니다.',
                  },
                  {
                    title: 'ReactNative 버전 마이그레이션',
                    period: '2024.07 - 2024.11',
                    description:
                      '2년간 진행하지 못했던 React Native 0.63 -> 0.74, 40여가지의 라이브러리 디펜던시 및 android build gradle, node, java 버전 마이그레이션을 완료했습니다.',
                  },
                  {
                    title: '네모앱 개발 및 운영',
                    period: '2022.04 - 2025.07',
                    description:
                      '네모 앱의 신규 기능 개발 및 유지보수 담당했습니다.',
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
                    title: '카카오 지도를 사용한 마커 클러스터링 개발',
                    period: '2023.10 - 2024.02',
                    description:
                      '서비스의 BM에 맞는 기능을 구현하기 위해 줌 레벨에 따른 마커 클러스터링 기능을 개발했습니다. 앱은 웹뷰를 사용하여 구현했습니다.',
                  },
                  {
                    title: '네모웹 리뉴얼',
                    period: '2023.10 - 2024.03',
                    description:
                      '.net 과 React가 결합된 형태였던 레거시 웹서비스를 Next.js로 마이그레이션 했습니다. 카카오 지도 API를 사용해 지도 서비스 전반과 일반 유저가 보는 리스트, 상세 등의 기능 개발하고 리액트 네이티브의 웹뷰를 사용해 지도 서비스를 통합해서 리소스를 절약했습니다.',
                  },
                  {
                    title: '부동산 중개 CRM 개발',
                    period: '2022.10 - 2023.03',
                    description:
                      '중개사들의 고객관리를 위한 CRM을 개발했습니다. 중개사에게는 매물추천, 메모, 계약정보, 계약서 출력 등의 기능을 제공하고 관리자에게는 담당 중개사의 업무 현황 파악, 피드백 기능 등을 제공했습니다.',
                  },
                  {
                    title: '네모웹, 백오피스 서비스 개발 및 운영',
                    period: '2022.04 - 2023.09',
                    description:
                      '네모웹의 신규 기능 개발 및 유지보수 담당했습니다. 내부 사용자 100명 규모의 CRM 프론트 개발했습니다.',
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
  experiences: { title: string; period: string; description: string }[];
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
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => {
          return (
            <div
              key={experience.title}
              className="markdown w-full flex flex-col gap-1"
            >
              <h4 className="text-lg font-semibold">{experience.title}</h4>
              <p className="text-sm">{experience.period}</p>
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
