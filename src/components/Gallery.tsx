import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Award images data
  const awards = [
    {
      id: 1,
      image: "/awards/award1.jpg",
      alt: "Award 1",
    },
    {
      id: 2,
      image: "/awards/award2.jpg",
      alt: "Award 2",
    },
    {
      id: 3,
      image: "/awards/award3.jpg",
      alt: "Award 3",
    },
    {
      id: 4,
      image: "/awards/award4.jpg",
      alt: "Award 4",
    },
    {
      id: 5,
      image: "/awards/award5.jpg",
      alt: "Award 5",
    },
    {
      id: 6,
      image: "/awards/award6.jpg",
      alt: "Award 6",
    },
    {
      id: 7,
      image: "/awards/award7.jpg",
      alt: "Award 7",
    },
    {
      id: 8,
      image: "/awards/award8.jpg",
      alt: "Award 8",
    },
    {
      id: 9,
      image: "/awards/award9.jpg",
      alt: "Award 9",
    },
    {
      id: 10,
      image: "/awards/award10.jpg",
      alt: "Award 10",
    },
    {
      id: 11,
      image: "/awards/award11.jpg",
      alt: "Award 11",
    },
    {
      id: 12,
      image: "/awards/award12.jpg",
      alt: "Award 12",
    },
    {
      id: 13,
      image: "/awards/award13.jpg",
      alt: "Award 13",
    },
    {
      id: 14,
      image: "/awards/award14.jpg",
      alt: "Award 14",
    },
    {
      id: 15,
      image: "/awards/award15.jpg",
      alt: "Award 15",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our achievements and recognition for community service
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Featured Awards
          </h3>
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={awards[currentIndex].image}
                  alt={awards[currentIndex].alt}
                  className="w-full h-auto max-h-[600px] object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={awards[currentIndex].image}
                  alt={awards[currentIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200"
                >
                  <FaTimes size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
