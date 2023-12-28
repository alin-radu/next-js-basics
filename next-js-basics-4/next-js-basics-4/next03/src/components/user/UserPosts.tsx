interface UserPostsProps {
  userPostsData: Promise<Post[]>;
}

function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <article>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <br />
            </article>
            <br />
          </li>
        );
      })}
    </ul>
  );
}

export default async function UserPosts({ userPostsData }: UserPostsProps) {
  const posts = await userPostsData;

  return <Posts posts={posts} />;
}
