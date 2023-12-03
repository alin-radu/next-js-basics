import Hero from '@/components/Hero/Hero';

import scaleImg from 'public/assets/images/scale.jpg';

export default function Scale() {
  return (
    <Hero imgData={scaleImg} imgAlt="Steel Factory" title="Scale Your App to Infinity" />
  );
}
