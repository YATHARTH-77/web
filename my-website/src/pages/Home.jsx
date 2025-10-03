import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Award, ArrowRight, 
  Zap, Lightbulb, Building, Droplet, Truck, Leaf, Target, FlaskConical, Wrench,
  Mail, Phone, Microscope, Cpu, Layers, HardHat
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [activeDomain, setActiveDomain] = useState('Structural Engineering'); // Set default active domain
  
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
  ];
  
  const domainData = [
    {
      name: 'Structural Engineering',
      icon: Building,
      color: 'text-red-600',
      description: 'Focuses on the design, analysis, and behavior of safe, resilient, and durable structures.',
      labs: [
        { name: 'Structural Engineering Laboratory', icon: Wrench, details: 'Testing of concrete, steel, and composites (2000kN UTM, Shake Table).' },
        { name: 'Materials Testing Laboratory', icon: Layers, details: 'Quality control, durability, and advanced material research.' }
      ]
    },
    {
      name: 'Geotechnical Engineering',
      icon: Target,
      color: 'text-yellow-600',
      description: 'Expertise in soil mechanics, foundation design, and ground improvement techniques for critical projects.',
      labs: [
        { name: 'Geotechnical Engineering Laboratory', icon: Microscope, details: 'Soil testing (Triaxial, Direct Shear, Consolidation), foundation modeling.' },
        { name: 'Rock Mechanics Unit', icon: Cpu, details: 'Testing and analysis of rock strength and slope stability.' }
      ]
    },
    {
      name: 'Transportation Engineering',
      icon: Truck,
      color: 'text-green-600',
      description: 'Dedicated to the planning, design, and management of sustainable and intelligent transport systems.',
      labs: [
        { name: 'Transportation Engineering Laboratory', icon: Truck, details: 'Pavement testing (Marshall Stability, LA Abrasion) and traffic simulation.' },
        { name: 'Intelligent Systems Lab', icon: Zap, details: 'Research on smart mobility, ITS, and autonomous vehicle infrastructure.' }
      ]
    },
    {
      name: 'Environmental Engineering',
      icon: Leaf,
      color: 'text-purple-600',
      description: 'Focus on water quality, wastewater treatment, solid waste management, and air pollution control technologies.',
      labs: [
        { name: 'Environmental Engineering Laboratory', icon: FlaskConical, details: 'Water and air quality analysis (Spectrophotometer, BOD Incubator, AQS).' },
        { name: 'Waste Management Unit', icon: Layers, details: 'Research into sustainable solid waste processing and recycling.' }
      ]
    },
    {
      name: 'Water Resources Engineering',
      icon: Droplet,
      color: 'text-blue-600',
      description: 'Specializing in hydrology, hydraulics, river engineering, and sustainable water management practices.',
      labs: [
        { name: 'Water Resources Engineering Laboratory', icon: Droplet, details: 'Hydraulics experiments (Flume Systems, Pipe Flow Apparatus, Pumps).' },
        { name: 'Hydrology Field Station', icon: Calendar, details: 'Real-time rainfall and water level data collection and modeling.' }
      ]
    },
  ];

  // Helper function to get labs for the active domain
  const getActiveLabs = () => {
    const domain = domainData.find(d => d.name === activeDomain);
    return domain ? domain.labs : [];
  };

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
      {/* Hero and Stats Sections (UI maintained) */}
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
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1.0)'
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

        {/* Navigation Arrows & Indicators */}
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

      {/* Welcome Section (UI maintained) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                Our Foundation
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight border-b-4 border-amber-500/50 inline-block pb-2">
                Welcome to the Department of Civil Engineering
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Department of Civil Engineering at IIT Indore is committed to **excellence in education, research, and service**. We offer comprehensive programs that prepare students for leadership roles in the rapidly evolving field of civil engineering.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our focus is on **sustainable infrastructure development**, advanced construction 
                technologies, and innovative solutions for modern engineering challenges.
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
      
      {/* NEW SECTION: Interactive Domains & Facilities Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Core Domains & Research Facilities</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Click a domain to see the dedicated laboratories and key facilities supporting that area.
            </p>
          </div>
          
          {/* Domain Tabs/Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {domainData.map((domain) => (
              <button 
                key={domain.name}
                onClick={() => setActiveDomain(domain.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md transform hover:scale-[1.05] 
                  ${domain.name === activeDomain
                    ? 'bg-blue-800 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
              >
                <domain.icon className={`h-5 w-5 ${domain.name === activeDomain ? 'text-amber-300' : domain.color}`} />
                <span>{domain.name}</span>
              </button>
            ))}
          </div>

          {/* Facilities Detail Area */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-blue-800">
            
            <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{activeDomain}</h3>
                <p className="text-lg text-gray-700">
                    {domainData.find(d => d.name === activeDomain)?.description}
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                {getActiveLabs().map((lab, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-50 p-6 rounded-lg shadow-inner border-l-4 border-amber-500 transition-shadow duration-300"
                    >
                        <div className="flex items-center mb-3">
                            <div className={`p-2 rounded-full mr-3 text-white bg-blue-700 shadow-md`}>
                                <lab.icon className="h-5 w-5" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">{lab.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm italic">{lab.details}</p>
                    </div>
                ))}
            </div>
            
            {/* Contextual Link to All Facilities (since direct button was removed) */}
            <p className="text-center mt-10 text-gray-700 font-medium">
                For a complete list of all equipment and facility coordinators, please visit the 
                <Link to="/facilities" className="text-blue-800 hover:text-amber-600 ml-1 underline transition-colors duration-300">
                    Facilities page
                </Link>.
            </p>
          </div>

        </div>
      </section>

      {/* News and Updates (UI maintained) */}
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
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Zap className="h-5 w-5 mr-1"/>
              <span>View All Events</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action (UI maintained) */}
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