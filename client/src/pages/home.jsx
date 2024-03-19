import { useEffect, useState } from 'react';
import SlideCarousel from '../components/ui/banners/carousel';

// default images
const defaultImgs = [
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711477773/dreamy_wedding/home/home_couple_bfxqnd.jpg',
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711490428/dreamy_wedding/home/home_ring_wvwfle.jpg',
  'https://res.cloudinary.com/dvsxq5pie/image/upload/v1711490278/dreamy_wedding/home/home_coupleback_szz0qa.jpg',
];

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(defaultImgs);
  }, []);

  return (
    <>
      <SlideCarousel images={images} />
      <h1>home page</h1>
    </>
  );
}
