import Introduce from './feature/Introduce';
import WorkExperience from './feature/WorkExperience';
import Education from './feature/Education';
import Project from './feature/Project';

export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto p-8 flex flex-col gap-24 md:gap-32">
      <Introduce />
      <WorkExperience />
      <Project />
      <Education />
    </section>
  );
}
