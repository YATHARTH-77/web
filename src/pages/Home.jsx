import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
// NEW: Import framer-motion for animations
import { motion, useInView } from 'framer-motion';
// NEW: Import CountUp for animated statistics
import CountUp from 'react-countup';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Data (Unchanged) ---
  const slides = [
    {
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Excellence in Civil Engineering Education',
      subtitle: 'Shaping the future of infrastructure and sustainable development',
      cta: 'Explore Programs',
      link: '/academics'
    },
    {
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Specialized Engineering Areas',
      subtitle: 'Five core specializations with advanced facilities and research',
      cta: 'View Specializations',
      link: '/specializations'
    },
    {
      image: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Our Academic Community',
      subtitle: 'Meet our faculty, staff, and students who make up our vibrant community',
      cta: 'Meet Our People',
      link: '/people'
    }
  ];

  const stats = [
    { icon: Users, label: 'Faculty Members', value: 25, suffix: '+' },
    { icon: BookOpen, label: 'Research Projects', value: 50, suffix: '+' },
    { icon: Award, label: 'Publications', value: 200, suffix: '+' },
    { icon: Calendar, label: 'Years of Excellence', value: 15, suffix: '+' }
  ];

  const news = [
    {
      date: '2025-01-15',
      title: 'New Structural Engineering Lab Inaugurated',
      excerpt: 'State-of-the-art equipment for advanced structural analysis and testing.'
    },
    {
      date: '2025-01-10',
      title: 'Research Grant Awarded for Smart Cities Project',
      excerpt: 'Department receives ₹2 Crore funding for sustainable urban infrastructure research.'
    },
    {
      date: '2025-01-05',
      title: 'International Conference on Sustainable Construction',
      excerpt: 'Department to host premier conference on green building technologies.'
    }
  ];

  // --- NEW: Duplicated news array for the infinite scroll marquee ---
  const duplicatedNews = [...news, ...news];

  // --- Carousel Logic (Unchanged) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Increased time to 5s to allow for animations
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // --- NEW: Animation Variants ---

  // Variants for staggering text animations in the hero
  const heroTextContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroTextItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // --- NEW: Refs for scroll-triggered animations ---
  const statsRef = useRef(null);
  const welcomeRef = useRef(null);
  const newsHeaderRef = useRef(null); // Ref for the "Latest News" header
  const ctaRef = useRef(null);

  // `useInView` hook tracks when the element is in the viewport
  // `once: true` means the animation only runs once
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.3 });
  const newsHeaderInView = useInView(newsHeaderRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });


  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(59, 130, 246, 0.7)), url(${slide.image})`
              }}
            />
            <div className="relative h-full flex items-center justify-center">
              
              <motion.div
                key={currentSlide}
                className="text-center text-white max-w-4xl mx-auto px-4"
                variants={heroTextContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  variants={heroTextItemVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                  variants={heroTextItemVariants}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div variants={heroTextItemVariants}>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows (Unchanged) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators (Unchanged) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500 scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    duration={2.5} 
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white overflow-hidden" ref={welcomeRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={welcomeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Civil Engineering Department
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Department of Civil Engineering at IIT Indore is committed to excellence in education, 
                research, and service. We offer comprehensive programs that prepare students for leadership 
                roles in the rapidly evolving field of civil engineering.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our department focuses on sustainable infrastructure development, advanced construction 
                technologies, and innovative solutions for modern engineering challenges. With state-of-the-art 
                facilities and renowned faculty, we provide an environment that fosters learning, research, and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                  >
                    Learn More About Us
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/specializations"
                    className="block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                  >
                    View Specializations
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={welcomeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Civil Engineering"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section className="py-20 bg-gray-50 overflow-hidden"> {/* NEW: Added overflow-hidden */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            ref={newsHeaderRef}
            initial={{ opacity: 0, y: 20 }}
            animate={newsHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and announcements from our department
            </p>
          </motion.div>

          {/* --- NEW: Marquee/Slider Implementation --- */}
          <div className="w-full overflow-hidden relative">
            {/* Gradient Fades for seamless edges */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            
            <motion.div
              className="flex gap-8"
              // Animate x from 0% to -50%. Since the track is 200% wide (due to duplicated content),
              // this moves it by exactly one "set" of news items.
              animate={{ x: ["0%", "-30%"] }}
              transition={{
                ease: "linear",
                duration: 10, // Adjust duration for speed (higher = slower)
                repeat: Infinity,
              }}
              // Pause the animation on hover
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedNews.map((item, index) => (
                <div
                  key={index}
                  // NEW: Set a fixed width and no-shrink for each card
                  className="bg-white rounded-lg shadow-md overflow-hidden w-96 flex-shrink-0"
                >
                  <div className="p-6">
                    <div className="text-sm text-amber-600 font-medium mb-2">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <button className="mt-4 text-blue-800 hover:text-amber-600 font-medium inline-flex items-center space-x-1 transition-colors group/link">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* --- End of Marquee --- */}

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/events"
                className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
              >
                <span>View All Events</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600" ref={ctaRef}>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in shaping the infrastructure of tomorrow. Explore our programs, 
            research opportunities, and become part of the IIT Indore Civil Engineering legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/academics"
                className="block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Explore Programs
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/specializations"
                className="block bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                View Specializations
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="block bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;