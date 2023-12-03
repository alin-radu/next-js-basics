import Hero from '@/components/Hero/Hero';

import homeImg from 'public/assets/images/home.jpg';

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="Car Factory" title="Professional Cloud Hosting" />
  );
}
