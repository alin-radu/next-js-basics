import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Hello,the HomePage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portofolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
