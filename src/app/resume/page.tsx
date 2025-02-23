import Introduce from './feature/Introduce';
import WorkExperience from './feature/WorkExperience';
import Education from './feature/Education';
import Project from './feature/Project';

export default function Resume() {
  return (
    <>
      <Introduce />
      <WorkExperience />
      <Project />
      <Education />
    </>
  );
}
