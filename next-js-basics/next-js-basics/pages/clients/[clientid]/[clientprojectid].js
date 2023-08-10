import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log('%c-> developmentConsole: router= ', 'color:#77dcfd', router);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a selected Client.</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
