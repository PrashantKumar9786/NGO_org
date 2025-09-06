import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaTree,
  FaRoad,
  FaGamepad,
  FaEye,
  FaHandsHelping,
  FaVoteYea,
  FaGavel,
  FaHeartBroken,
  FaLightbulb,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

interface Program {
  id: number;
  title: string;
  icon: any;
  category: string;
  description: string;
  details: string;
  impact: string[];
  image: string;
}

export const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: "International Women's Day",
      icon: FaUsers,
      category: "Empowerment",
      description:
        "Honoring and celebrating women who have made significant contributions in various fields.",
      details:
        "In celebration of International Women's Day, we honored 25 women in Kanpur and Lucknow who struggled to make their place in society and inspired others to become self-reliant. These include women working in social, medical, education, banking, and legal fields including SMT JAYA AWASTHI (SBI CMHR KANPUR), SMT PRATIBHA VERMA (SBI MANAGER), SMT PONAM KAPOOR (Member, Rajya Mahila Ayog, U.P.), and SMT SHUBHI GUPTA (District Judge, Kanpur).",
      impact: [
        "25 women honored",
        "Multiple fields represented",
        "Inspiration for self-reliance",
        "Recognition across sectors",
      ],
      image: "/images/programs/iwd.png",
    },
    {
      id: 2,
      title: "Mahakumbh Mela Service",
      icon: FaHeart,
      category: "Social",
      description:
        "Serving pilgrims during the largest religious event in India with blankets and refreshments.",
      details:
        "During Maha Kumbh Mela in Prayagraj (18 Jan 2025 to 26 Feb 2025), we provided 1100 blankets to protect pilgrims from harsh cold. We distributed tea and biscuits from 5:00 AM to 9:00 AM daily. The administration provided a mela vehicle pass to help pilgrims who were unable to walk reach their destinations safely.",
      impact: [
        "1100 blankets distributed",
        "Daily tea & biscuits service",
        "Vehicle assistance provided",
        "Pilgrims served during festival",
      ],
      image: "/images/programs/mahakumbh.png",
    },
    {
      id: 3,
      title: "Clean India Campaign",
      icon: FaTree,
      category: "Environment",
      description:
        "Making Kanpur city clean under Swachh Bharat Abhiyan with idol collection and ghat cleaning.",
      details:
        "Under Swachh Bharat Abhiyan, we collect old idols of Ganesh and Lakshmi from various places in Kanpur city. We put up awareness banners and respectfully pack these idols in cardboard for proper immersion. We collected idols from 86 places and immersed them at the land immersion place. We also clean Atal Ghat, Patthar Ghat, and Brahamavart Ghat after various festivals.",
      impact: [
        "86 places covered",
        "Idols collected & immersed",
        "Ghats cleaned regularly",
        "Awareness banners displayed",
      ],
      image: "/images/programs/clean-india.png",
    },
    {
      id: 4,
      title: "Health Awareness & Ayushman Card",
      icon: FaHeart,
      category: "Health",
      description:
        "Organizing health camps and creating Ayushman cards for the weaker sections of society.",
      details:
        "We organize health awareness programs and health checkup camps in rural and slum areas. Services include eye tests, sugar, blood pressure, CBC, ECG tests. We create awareness about Ayushman Card Scheme and make cards for eligible persons. We organized an eye testing camp in Kanpur Nagar district jail where 86 prisoners were provided free medicines and spectacles. Total 16 health camps organized in FY 2024-25.",
      impact: [
        "16 health camps in FY 2024-25",
        "126 total health camps organized",
        "86 prisoners provided spectacles",
        "Ayushman cards created",
      ],
      image: "/images/programs/health-awareness.png",
    },
    {
      id: 5,
      title: "National Handicraft Development",
      icon: FaGraduationCap,
      category: "Education",
      description:
        "Training artisans in leather handicrafts under government scheme for self-employment.",
      details:
        "We organized Design and Technology Development Workshop from 01 Feb 2025 to 05 March 2025 in Ratanpur, Gangaganj, Panki Kanpur under National Handicraft Development Program. 30 scheduled caste artisans were trained in Leather Handcrafts. Each artisan received Rs 7500 for 25 days at Rs 300 per day. They learned to make keyrings, shoes, slippers, handbags, teacoasters, and hanging items for self-employment.",
      impact: [
        "30 artisans trained",
        "Rs 7500 per artisan",
        "25 days training program",
        "Self-employment setup",
      ],
      image: "/images/programs/handicraft-development.png",
    },
    {
      id: 6,
      title: "Poverty Alleviation Programs",
      icon: FaHandsHelping,
      category: "Social",
      description:
        "Improving living standards of underprivileged sections through various support programs.",
      details:
        "We distribute warm clothes and blankets to poor people on streets and provide toys and sweets to poor children. We distribute stationary, school bags, pencil boxes, and lunchboxes to educate needy children and submit school fees for needy intelligent children. Our objective is to empower weaker sections of society and reduce economic inequality.",
      impact: [
        "Warm clothes distributed",
        "Educational materials provided",
        "School fees paid",
        "Children supported",
      ],
      image: "/images/programs/poverty-alleviation.png",
    },
    {
      id: 7,
      title: "Khelo India Program",
      icon: FaGamepad,
      category: "Sports",
      description:
        "Organizing physical games and sports activities to enhance public health and build sports culture.",
      details:
        "We organize a wide variety of physical games for adults under Khelo India Program. This encourages participation in various sports and physical activities to enhance public health and build a strong sports culture from grassroots level. Every year after Diwali, we organize cricket games in Barhat Banger and distribute prizes and trophies for winners.",
      impact: [
        "Cricket games organized",
        "Prizes and trophies distributed",
        "Sports culture promoted",
        "Public health enhanced",
      ],
      image: "/images/programs/khelo-india.png",
    },
    {
      id: 8,
      title: "Road Safety Awareness",
      icon: FaRoad,
      category: "Safety",
      description:
        "Creating awareness about road safety and responsible driving practices.",
      details:
        "We organized Road Safety Awareness Program as part of Public Awareness Campaign in D.A.V. P.G. College, Kanpur and Gurukul International School. The aim was to create a safe road environment for all. We encouraged people to drive responsibly and follow traffic rules by distributing 100 helmets to promote safety.",
      impact: [
        "100 helmets distributed",
        "Educational institutions covered",
        "Traffic rules awareness",
        "Safe driving promoted",
      ],
      image: "/images/programs/road-safety.png",
    },
    {
      id: 9,
      title: "Environment Awareness",
      icon: FaTree,
      category: "Environment",
      description:
        "Tree plantation and environmental protection through Miyawaki method and medicinal gardens.",
      details:
        "We organized Environment Awareness Program to save and protect the environment. We planted 5000 trees using Akira Miyawaki Method in various institutions including HBTU Kanpur and IIT Kanpur. We also created medical garden and navgrah garden. People were motivated to plant neem, aloe vera, damabel, ashwagandha, brahmi, white moosli and other medicinal plants.",
      impact: [
        "5000 trees planted",
        "Miyawaki method used",
        "Medical garden created",
        "Medicinal plants promoted",
      ],
      image: "/images/programs/environment-awareness.png",
    },
    {
      id: 10,
      title: "Changing Rooms at Ganga Ghats",
      icon: FaUsers,
      category: "Social",
      description:
        "Building changing rooms for women at Ganga Ghats for convenience and dignity.",
      details:
        "We built 04 changing rooms at Bithoor Patthar Ganga Ghat and Gudara Ganga Ghat to provide convenience to women bathing there. This ensures privacy and dignity for women during their religious activities. We have plans to provide changing room facilities at other Ganga Ghats of Kanpur as well.",
      impact: [
        "04 changing rooms built",
        "Women convenience ensured",
        "Privacy and dignity provided",
        "More ghats planned",
      ],
      image: "/images/programs/changing-rooms.png",
    },
    {
      id: 11,
      title: "Dev Deepawali Programs",
      icon: FaLightbulb,
      category: "Cultural",
      description:
        "Celebrating Dev Deepawali with rangoli making and lighting 21000 lamps at Atal Ghat.",
      details:
        "On the occasion of Dev Deepawali, students made rangoli at Atal Ghat and we lit 21000 lamps at Atal Ghat in Kanpur. We also distributed Diwali items to underprivileged children, making the festival inclusive and meaningful for everyone in the community.",
      impact: [
        "21000 lamps lit",
        "Rangoli by students",
        "Diwali items distributed",
        "Community celebration",
      ],
      image: "/images/programs/dev-deepawali.png",
    },
    {
      id: 12,
      title: "Educational Tour",
      icon: FaEye,
      category: "Education",
      description:
        "Taking children on educational tours to Lucknow for historical and scientific learning.",
      details:
        "We took children to Lucknow for educational tours where they visited Science City, Raj Bhawan, and Imambada. Historical information was provided by teachers. Bus service was provided to students. 70 children and 10 teachers were taken on tour twice a year in April and October. This helps in children's mental, social, and behavioral development while gaining new information and technology exposure.",
      impact: [
        "70 children per tour",
        "10 teachers involved",
        "Twice yearly tours",
        "Historical sites visited",
      ],
      image: "/images/programs/educational-tour.png",
    },
    {
      id: 13,
      title: "Voter Awareness Campaign",
      icon: FaVoteYea,
      category: "Awareness",
      description:
        "Making people aware about voting importance for strong democracy through rallies and programs.",
      details:
        "We organized voting awareness campaigns because for a strong democracy, the voting percentage should be high. To ensure maximum voting, we organized awareness programs in collaboration with various institutes and schools and organized rallies to make people aware about voting. This promotes democratic participation and civic responsibility.",
      impact: [
        "Awareness programs organized",
        "Rallies conducted",
        "Institutes collaborated",
        "Democratic participation promoted",
      ],
      image: "/images/programs/voter-awareness.png",
    },
    {
      id: 14,
      title: "Legal Awareness Campaign",
      icon: FaGavel,
      category: "Legal",
      description:
        "Making public aware of law and legal rights to promote legal literacy and rule of law.",
      details:
        "Legal awareness means making the public aware of the law and their legal rights so they can become empowered and use their rights properly. It promotes legal literacy and helps establish rule of law and legal culture in society. We organized legal awareness programs in various institutions so people could become aware of their rights and find their place in a just and equal society.",
      impact: [
        "Legal rights awareness",
        "Institutions covered",
        "Legal literacy promoted",
        "Rule of law established",
      ],
      image: "/images/programs/legal-awareness.png",
    },
    {
      id: 15,
      title: "Samuhik Vivah",
      icon: FaHeartBroken,
      category: "Social",
      description:
        "Organizing mass marriages to help economically weak families and eliminate social evils like dowry.",
      details:
        "Samuhik Vivah is a marital arrangement where three or more adults marry together at the same time. This practice helps economically weak families, eliminates social evils like dowry, and promotes social harmony. We organized Samuhik Vivah where 51 couples were married. We provided necessary items and gifts to these 51 couples, making their special day memorable and dignified.",
      impact: [
        "51 couples married",
        "Necessary items provided",
        "Dowry system opposed",
        "Social harmony promoted",
      ],
      image: "/images/programs/samuhik-vivah.png",
    },
    {
      id: 16,
      title: "Other Programs",
      icon: FaHandsHelping,
      category: "Social",
      description:
        "Various other programs including Gandhi Jayanti, Valmiki Jayanti, Ambedkar Jayanti celebrations.",
      details:
        "Apart from main programs, we organize many other programs including Gandhi Jayanti, Valmiki Jayanti, Ambedkar Jayanti celebrations. We work to fulfill needs of elderly people in old age homes and provide training to women in sewing and embroidery. We help physically challenged children and organize feasts in temples, ensuring comprehensive community support.",
      impact: [
        "Festival celebrations",
        "Elderly care support",
        "Women training programs",
        "Temple feasts organized",
      ],
      image: "/images/programs/other-programs.png",
    },
  ];

  const categories = [
    "All",
    "Empowerment",
    "Health",
    "Education",
    "Skill Development",
    "Environment",
    "Sports",
    "Safety",
    "Awareness",
    "Legal",
    "Social",
    "Cultural",
  ];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : selectedCategory === "Skill Development"
      ? programs.filter(
          (program) => program.title === "National Handicraft Development"
        )
      : selectedCategory === "Awareness"
      ? programs.filter(
          (program) =>
            program.title.includes("Awareness") ||
            program.title === "Voter Awareness Campaign" ||
            program.title === "Legal Awareness Campaign" ||
            program.title === "Road Safety Awareness" ||
            program.title === "Environment Awareness" ||
            program.title === "Health Awareness & Ayushman Card"
        )
      : selectedCategory === "Education"
      ? programs.filter(
          (program) =>
            program.title.includes("Education") ||
            program.title === "Educational Tour" ||
            program.title === "Poverty Alleviation Programs"
        )
      : programs.filter((program) => program.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl mb-4">Annual Report 2024-25</p>
            <p className="text-lg text-primary-100">
              Comprehensive programs addressing key social challenges and
              creating sustainable impact in communities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Program Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card group cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedProgram(program)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-50 flex items-center justify-center min-h-[192px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-auto max-h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 rounded-full mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                      <program.icon className="text-primary-600 text-xl" />
                    </div>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Program Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gray-50 flex items-center justify-center min-h-[256px]">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-auto max-h-64 object-contain"
                />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">
                    <selectedProgram.icon className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedProgram.title}
                    </h2>
                    <span className="text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                      {selectedProgram.category}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Program Details
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedProgram.details}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Impact & Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProgram.impact.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
