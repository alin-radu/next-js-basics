import { useRouter } from 'next/router';

function BlogsPostsPage() {
  const router = useRouter();
  console.log('%c-> developmentConsole: router= ', 'color:#77dcfd', router);

  return (
    <div>
      <h1>The BlogPosts.</h1>
    </div>
  );
}

export default BlogsPostsPage;
