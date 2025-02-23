import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Education = () => {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">금오공과대학교</h3>
            <span>2016. 02 - 2022. 02</span>
          </div>
          <span className="whitespace-pre-wrap">기계시스템 공학 전공</span>
        </div>
      </div>
    </section>
  );
};
export default Education;
