import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Award, ArrowRight, Zap, Lightbulb } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  
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
      title: 'Cutting-Edge Research Facilities',
      subtitle: 'State-of-the-art laboratories and research opportunities',
      cta: 'View Research',
      link: '/research'
    },
    {
      image: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'World-Class Faculty',
      subtitle: 'Learn from industry experts and renowned academicians',
      cta: 'Meet Faculty',
      link: '/faculty'
    }
  ];

  const stats = [
    { icon: Users, label: 'Faculty Experts', value: '25+', color: 'text-amber-500' },
    { icon: BookOpen, label: 'Research Projects', value: '50+', color: 'text-green-500' },
    { icon: Award, label: 'High-Impact Publications', value: '200+', color: 'text-red-500' },
    { icon: Calendar, label: 'Years of Excellence', value: '15+', color: 'text-indigo-500' }
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

  useEffect(() => {
    // Auto-slide functionality
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    // Simple way to trigger stats animation once (can be improved with Intersection Observer)
    setStatsAnimated(true);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.75), rgba(59, 130, 246, 0.75)), url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1.0)' // Subtle zoom effect
              }}
            />
            <div className="relative h-full flex items-center justify-center z-20">
              <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fadeIn">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows and Indicators (Z-index 30 ensures they are on top) */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 z-30 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 z-30 shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
                index === currentSlide ? 'bg-amber-500 scale-150' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section - Elevated Cards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-6 bg-white rounded-xl shadow-xl border-t-4 border-blue-500 transition-all duration-500 transform ${statsAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-50 ${stat.color} group-hover:bg-amber-500 transition-colors duration-300`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className={`text-4xl font-extrabold text-gray-900 mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section - Split Layout with Hover Effect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                Our Foundation
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Welcome to the Department of Civil Engineering
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Department of Civil Engineering at IIT Indore is committed to **excellence in education, research, and service**. We offer comprehensive programs that prepare students for leadership roles in the rapidly evolving field of civil engineering.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our focus is on **sustainable infrastructure development**, advanced construction technologies, and innovative solutions for modern engineering challenges. With state-of-the-art facilities and renowned faculty, we provide an environment that fosters learning, research, and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] shadow-lg"
                >
                  <Lightbulb className="h-5 w-5 mr-2 inline-block"/> Learn Our Vision
                </Link>
                <Link
                  to="/academics"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] shadow-lg"
                >
                  <BookOpen className="h-5 w-5 mr-2 inline-block"/> View Programs
                </Link>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Civil Engineering"
                className="rounded-xl shadow-2xl transition-transform duration-500 transform group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              <div className="absolute top-4 left-4 text-white p-2 rounded-lg bg-black/50 backdrop-blur-sm text-sm font-medium">
                Research at IIT Indore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Updates - Dynamic Card Hover */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments, achievements, and announcements from our department.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm font-semibold mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                    <span className="text-amber-600">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button className="mt-4 text-blue-800 hover:text-amber-600 font-semibold inline-flex items-center space-x-1 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Zap className="h-5 w-5 mr-1"/>
              <span>View All Events</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Bold Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-4xl mx-auto leading-relaxed">
            Join us in shaping the infrastructure of tomorrow. Explore our programs, 
            research opportunities, and become part of the IIT Indore Civil Engineering legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/academics"
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-800 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;