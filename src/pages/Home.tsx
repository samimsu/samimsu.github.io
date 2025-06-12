import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import RootLayout from "../layouts/RootLayout";
import samiImage from "../assets/sami.jpeg";
import image1 from "../assets/pics-with-filters/anime.jpg";
import image2 from "../assets/pics-with-filters/cubist.jpg";
import image3 from "../assets/pics-with-filters/cyberpunk.jpg";
import image4 from "../assets/pics-with-filters/expressionist.jpg";
import image5 from "../assets/pics-with-filters/renaissance.jpg";
import image6 from "../assets/pics-with-filters/retro.jpg";

const images = [samiImage, image1, image2, image3, image4, image5, image6];

const ImageCycle = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev: number) => (prev + 1) % images.length);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, isPaused]);

  const handleSegmentHover = (index: number): void => {
    setIsPaused(true);
    setCurrentImage(index);
  };

  const handleSegmentLeave = () => {
    setIsPaused(false);
  };

  const renderCircleSegments = () => {
    const segments = images.length;
    const gapAngle = 5; // 5-degree gap between segments
    const segmentAngle = (360 - segments * gapAngle) / segments;
    // const innerRadius = 108; // Start outside the image (192px diameter = 96px radius + border)
    const innerRadius = 112; // Start outside the image (192px diameter = 96px radius + border)
    // const outerRadius = 116; // Base outer radius for inactive segments
    const outerRadius = 120; // Base outer radius for inactive segments
    const activeOuterRadius = 124; // Thicker outer radius for active segment
    const center = 124; // Center of SVG, adjusted for larger viewBox

    return images.map((_, index) => {
      const startAngle = index * (segmentAngle + gapAngle) + gapAngle / 2;
      const endAngle = startAngle + segmentAngle;
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const x1 = center + innerRadius * Math.cos(startRad);
      const y1 = center + innerRadius * Math.sin(startRad);
      const x2 = center + innerRadius * Math.cos(endRad);
      const y2 = center + innerRadius * Math.sin(endRad);
      const x3 =
        center +
        (index === currentImage ? activeOuterRadius : outerRadius) *
          Math.cos(endRad);
      const y3 =
        center +
        (index === currentImage ? activeOuterRadius : outerRadius) *
          Math.sin(endRad);
      const x4 =
        center +
        (index === currentImage ? activeOuterRadius : outerRadius) *
          Math.cos(startRad);
      const y4 =
        center +
        (index === currentImage ? activeOuterRadius : outerRadius) *
          Math.sin(startRad);
      const largeArc = segmentAngle <= 180 ? 0 : 1;

      return (
        <g key={index}>
          <path
            d={`M${x1},${y1} A${innerRadius},${innerRadius} 0 ${largeArc},1 ${x2},${y2} L${x3},${y3} A${
              index === currentImage ? activeOuterRadius : outerRadius
            },${
              index === currentImage ? activeOuterRadius : outerRadius
            } 0 ${largeArc},0 ${x4},${y4} Z`}
            fill={
              index === currentImage
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.2)"
            }
            className={`cursor-pointer ${
              index === currentImage
                ? "fill-red-500 dark:fill-red-500"
                : "dark:fill-slate-500"
            }`}
            onMouseEnter={() => handleSegmentHover(index)}
            onMouseLeave={handleSegmentLeave}
          />
          <clipPath id={`clip-${index}`}>
            <path
              d={`M${x1},${y1} A${innerRadius},${innerRadius} 0 ${largeArc},1 ${x2},${y2} L${x3},${y3} A${
                index === currentImage ? activeOuterRadius : outerRadius
              },${
                index === currentImage ? activeOuterRadius : outerRadius
              } 0 ${largeArc},0 ${x4},${y4} Z`}
            />
          </clipPath>
        </g>
      );
    });
  };

  return (
    <div
      className="relative p-3"
      // className="relative max-w-48 aspect-square"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPaused(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }}
    >
      <img
        src={images[currentImage]}
        className="object-cover object-left w-full h-full rounded-full border-2 border-black dark:border-slate-100 min-w-48 min-h-48 max-w-48 aspect-square"
        alt="Profile"
      />
      {isHovering && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          // viewBox="0 0 248 248" // Adjusted for larger segments
          viewBox="0 0 248 248" // Adjusted for larger segments
        >
          <g className="pointer-events-auto">{renderCircleSegments()}</g>
        </svg>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <RootLayout>
      <div className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-32 flex flex-col space-y-6 items-center">
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 items-center animate-slidein opacity-0 [--slidein-delay:300ms]">
          <div>
            <h1 className="flex flex-col text-slate-900 font-medium text-4xl sm:text-5xl lg:text-6xl text-center dark:text-slate-200 z-20">
              <span className="text-lg">Hey👋 I'm </span>
              <span className="mb-2">Sami</span>
              <span className="bard-hello pb-4 text-2xl sm:text-3xl lg:text-4xl">
                Web Developer
              </span>
            </h1>
            <div className="flex space-x-2 justify-center">
              <Link to="/portfolio">
                <ButtonPrimary>Portfolio</ButtonPrimary>
              </Link>
              <Link to="/contact">
                <ButtonSecondary>Hire me</ButtonSecondary>
              </Link>
            </div>
          </div>
          <ImageCycle />
        </div>
      </div>
    </RootLayout>
  );
};

export default Home;
