import { useRouter } from 'next/router';

function ProjectPage() {
  const router = useRouter();
  console.log('%c-> developmentConsole: router= ', 'color:#77dcfd', router);
  return (
    <div>
      <h1>Hello,the ProjectPage</h1>
      <h2>The Portofolio project Page.</h2>
    </div>
  );
}

export default ProjectPage;
