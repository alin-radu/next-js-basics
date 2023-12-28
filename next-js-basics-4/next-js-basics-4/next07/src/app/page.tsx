import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl grid place-content-center">HomePage</h1>
      <Link href="/feedback">Feedback</Link>
    </main>
  );
}
