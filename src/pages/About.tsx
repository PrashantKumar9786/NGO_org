import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaMapMarkerAlt,
  FaCertificate,
  FaUsers,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";

export const About = () => {
  const workAreas = [
    {
      icon: FaUsers,
      title: "Education",
      description:
        "Providing quality education and learning resources to children and adults across Uttar Pradesh.",
    },
    {
      icon: FaHandsHelping,
      title: "Employment-Oriented Training",
      description:
        "Training in motor mechanics, wooden toys, leather goods, and handicrafts for self-employment.",
    },
    {
      icon: FaHeart,
      title: "Health",
      description:
        "Conducting medical camps, vaccination drives, and health awareness programs in rural areas.",
    },
    {
      icon: FaLeaf,
      title: "Environment & Awareness",
      description:
        "Cleanliness campaigns, tree plantation drives, and environmental awareness programs.",
    },
  ];

  const operationalAreas = [
    "Kanpur Nagar, Uttar Pradesh",
    "Kanpur Dehat, Uttar Pradesh",
    "Lucknow, Uttar Pradesh",
    "Jalaun, Uttar Pradesh",
    "Orai, Uttar Pradesh",
    "Kalpi, Uttar Pradesh",
    "Etawah, Uttar Pradesh",
    "Kannauj, Uttar Pradesh",
    "Farrukhabad, Uttar Pradesh",
  ];

  const registrations = [
    {
      title: "Organization Registration",
      number: "480/2007-08",
      validity: "Valid",
    },
    {
      title: "12A Registration",
      number: "AABAKO212C24LK01",
      validity: "10-09-2027",
    },
    {
      title: "80G Registration",
      number: "AABAK0212C24LK02",
      validity: "31-03-2029",
    },
    { title: "CSR Registration", number: "CSR00059840", validity: "Valid" },
    {
      title: "NITI Aayog Registration",
      number: "UP/2021/0297021",
      validity: "Valid",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">About Kalam</h1>
            <p className="text-xl mb-4">A Voluntary Organization</p>
            <p className="text-lg text-primary-100">
              Dedicated to education, employment-oriented training, health,
              environment, and awareness programs across Uttar Pradesh since
              2007.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <FaBullseye className="text-primary-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To achieve the goal of Viksit Bharat @ 2047, it is very
                important that women in rural areas are also empowered because
                an educated woman is the pivot for building a developed society.
                It is also necessary to empower the youth and provide them with
                the necessary skills and opportunities and knowledge of digital
                technology to move ahead in the changing economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card bg-gradient-to-br from-secondary-500 to-primary-500 text-white"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-full mr-4">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Keeping in mind the mission of Vision India @ 2047, the
                organization is working in the fields of women empowerment,
                children development, educational, cultural, environmental,
                health sectors etc. so that the society can develop in all
                aspects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Motivation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by the belief that every individual deserves dignity,
              opportunity, and hope
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our motivation stems from the belief that every person in society
              deserves access to education, healthcare, employment, and a clean
              environment. We are committed to reaching the last person in
              society and providing every possible assistance to persons with
              disabilities. Our work in education, health, handicrafts, and
              employment sectors across Uttar Pradesh reflects our dedication to
              inclusive development and social welfare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs addressing key social challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <area.icon className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Operational Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving communities across multiple states in India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {operationalAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary-100 rounded-full group-hover:bg-secondary-200 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-secondary-600 text-xl" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Government Registrations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Government Registrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fully compliant and registered with relevant government
              authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {registrations.map((reg, index) => (
              <motion.div
                key={reg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <FaCertificate className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {reg.title}
                    </h3>
                    <p className="text-primary-600 font-medium">{reg.number}</p>
                    <p className="text-sm text-gray-500">
                      Valid until: {reg.validity}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="section-padding bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Organization Status</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl mb-6">
                Kalam: Ek Swakchik Sanstha is an active, compliant, and
                transparent organization committed to social welfare and
                community development.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-lg font-semibold">
                  ✓ Active and Operational
                  <br />
                  ✓ Fully Compliant
                  <br />
                  ✓ Transparent Operations
                  <br />✓ No Blacklisting History
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
