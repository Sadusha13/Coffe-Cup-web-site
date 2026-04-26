import React, { useEffect, useState } from 'react';

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    testimonial: "This product has transformed our business. Highly recommended!",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial: "The customer support is outstanding. I've never had such a positive experience!",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    testimonial: "The features and ease of use are unparalleled. It has become an essential tool for our team.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    name: "Michael Brown",
    testimonial: "This solution has significantly improved our sales process. I'm impressed with the results!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 5,
    name: "Sarah Davis",
    testimonial: "The implementation was seamless and the results have been fantastic. Highly recommended!",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
  },
  {
    id: 6,
    name: "David Wilson",
    testimonial: "The technology behind this product is impressive. It has exceeded our expectations in every way.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    id: 7,
    name: "Laura Martinez",
    testimonial: "The efficiency and reliability of this product have been game-changers for our operations.",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
  },
];

const getSlidesToShow = (width) => {
  if (width >= 1024) {
    return 3;
  }

  if (width >= 640) {
    return 2;
  }

  return 1;
};

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, testimonialData.length - slidesToShow);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex >= maxIndex ? 0 : currentIndex + 1));
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [maxIndex]);

  const translatePercent = (activeIndex * 100) / slidesToShow;

  return (
    <div className="py-14 mb-18">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Testimonials</h1>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {testimonialData.map((data) => (
              <div
                key={data.id}
                className="shrink-0 px-3 pb-4 flex justify-center"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="h-full w-full max-w-sm rounded-2xl bg-[#f7f1ef] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <div className="mb-5 flex items-left gap-4">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md"
                    />
                  </div>
                  

                  <div className="text-center">
                    <h2 className="mb-3 text-xs text-shadow-xs font-sm text-gray-800">{data.testimonial}</h2>
                    <p className="font-bold text-xl font-cursive text-black/80 leading-relaxed">{data.name}</p>
                  </div>
                  <div className="text-align-right">
                    <p className="text-9xl text-black/20 font-serif">,,</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-gray-700' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
