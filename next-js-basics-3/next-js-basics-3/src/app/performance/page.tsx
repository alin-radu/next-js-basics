import Hero from '@/components/Hero/Hero';

import performanceImg from 'public/assets/images/performance.jpg';

export default function Performance() {
  return (
    <Hero imgData={performanceImg} imgAlt="Welding" title="We Serve Hight Performance Apps" />
  );
}