import Link from 'next/link';

function HomePage() {
  return (
    <ul>
      <li>
        Go to: <Link href="/products">products</Link>
      </li>
      <li>
        Go to: <Link href="/user">user</Link>
      </li>
    </ul>
  );
}

export default HomePage;
