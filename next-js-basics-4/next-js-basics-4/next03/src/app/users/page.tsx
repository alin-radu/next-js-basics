import Link from 'next/link';

import getAllUsers from '@/lib/getAllUsers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
};

function Users({ users }: { users: User[] }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </li>
        );
      })}
    </ul>
  );
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  //console.log('Hello') // Did you find where this appears?

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <Users users={users} />
    </section>
  );

  return content;
}
