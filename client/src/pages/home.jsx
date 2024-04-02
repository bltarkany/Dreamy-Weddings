import { useEffect, useState } from 'react';
// import SlideCarousel from '../components/ui/banners/carousel';
// import Hero from '../components/ui/banners/hero';
import {
  SlideCarousel,
  Hero,
  HeroWithImg,
} from '../components/ui/banners/index';

// default images
const defaultImgs = [
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711477773/dreamy_wedding/home/home_couple_bfxqnd.jpg',
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711490428/dreamy_wedding/home/home_ring_wvwfle.jpg',
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711490278/dreamy_wedding/home/home_coupleback_szz0qa.jpg',
];
const heroImg = `https://res.cloudinary.com/dvsxq5pie/image/upload/v1711490283/dreamy_wedding/home/home_florals_o2zcjv.jpg`;

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(defaultImgs);
  }, []);

  return (
    <>
      <HeroWithImg
        image={heroImg}
        greeting={`Mr. and Ms. cordially invite you to their upcoming nuptials`}
        intro={`The happy couple is hope you can attend this beautiful event and Share in there exchanging of vows`}
      />
    </>
  );
}
