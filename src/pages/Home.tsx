import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaHeart,
  FaTree,
  FaGraduationCap,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";
import { Counter } from "../components/Counter";
import { Gallery } from "../components/Gallery";

export const Home = () => {
  const impactStats = [
    { icon: FaUsers, number: 126, label: "Health Camps", suffix: "+" },
    { icon: FaHeart, number: 1100, label: "Blankets Distributed", suffix: "" },
    { icon: FaTree, number: 5000, label: "Trees Planted", suffix: "" },
    {
      icon: FaGraduationCap,
      number: 51,
      label: "Couples Married",
      suffix: "",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-transparent to-secondary-500/30 bg-[length:400%_400%]"
          />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Kalam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-4 text-primary-100"
            >
              A Voluntary Organization
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            >
              Dedicated to education, employment-oriented training, health,
              environment, and awareness programs across Uttar Pradesh since
              2007.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/programs"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Our Programs
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                <FaPlay className="mr-2" />
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming lives and communities through dedicated service and
              sustainable initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <stat.icon className="text-primary-600 text-2xl" />
                  </div>
                </div>
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  className="text-3xl font-bold text-gray-900 mb-2"
                />
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To achieve the goal of Viksit Bharat @ 2047, we empower women in
                rural areas as educated women are the pivot for building a
                developed society. We also empower youth with necessary skills,
                opportunities, and digital technology knowledge to move ahead in
                the changing economy.
              </p>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                Keeping in mind the mission of Vision India @ 2047, we work in
                the fields of women empowerment, children development,
                educational, cultural, environmental, health sectors etc. so
                that the society can develop in all aspects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Call to Action */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the change. Support our programs and help us create a
              better tomorrow for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Get Involved
              </Link>
              <Link
                to="/programs"
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-3"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
