import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import getAllUsers from '@/lib/getAllUsers';
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

  if (!user?.name) {
    return {
      title: 'User not Found',
    };
  }

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

  if (!user?.name) {
    notFound();
  }

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

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: String(user.id),
  }));
}
