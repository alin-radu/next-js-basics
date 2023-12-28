import { Suspense } from 'react';

import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';

import UserPosts from '@/components/user/UserPosts';

import { Metadata } from 'next';

interface UserPageProps {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId },
}: UserPageProps): Promise<Metadata> {
  const user: User = await getUser(userId);

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: UserPageProps) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserPosts userPostsData={userPostsData} />
      </Suspense>
    </>
  );
}
