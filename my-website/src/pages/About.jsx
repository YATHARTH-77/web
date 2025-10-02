import React from 'react';
import { Target, Eye, Award, Users, Calendar, BookOpen, ChevronRight, Zap } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2009', event: 'Department established with the founding of IIT Indore' },
    { year: '2011', event: 'First batch of B.Tech students admitted' },
    { year: '2013', event: 'M.Tech programs launched' },
    { year: '2015', event: 'Ph.D. program initiated' },
    { year: '2017', event: 'New research laboratories established' },
    { year: '2020', event: 'Reached milestone of 500+ alumni' },
    { year: '2023', event: 'Department ranked among top 20 in India' },
    { year: '2025', event: 'Celebrating 15+ years of excellence' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in education, research, and innovation in civil engineering.',
      color: 'text-amber-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering teamwork, partnerships, and knowledge sharing within our academic community.',
      color: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering cutting-edge research and sustainable solutions for modern infrastructure challenges.',
      color: 'text-red-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge',
      description: 'Committed to advancing the frontiers of civil engineering through continuous learning and discovery.',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Diagonal Cut */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)', // Diagonal bottom cut
                opacity: 0.1
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">About Our Department</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Excellence in civil engineering education, research, and innovation since our founding in 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - Modern Split Layout */}
      <section className="py-20 bg-white -mt-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Department Building"
                className="rounded-xl shadow-2xl transition-transform duration-500 transform group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                <Calendar className="h-4 w-4 inline-block mr-1"/> Established 2009
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 border-b-4 border-amber-500/50 inline-block pb-2">
                Our Story: Shaping the Future
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4">
                The Department of Civil Engineering at IIT Indore was established in **2009** with the vision 
                of creating world-class engineers and researchers who would contribute to the sustainable 
                development of India's infrastructure.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We have grown into a thriving academic community 
                with distinguished faculty, state-of-the-art facilities, and a strong network of alumni 
                working in leading organizations worldwide.
              </p>
              <button className="mt-4 text-blue-800 hover:text-amber-600 font-semibold inline-flex items-center space-x-1 transition-colors">
                <span>Meet Our Leadership Team</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision - Interactive Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-blue-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-800 text-white p-4 rounded-full mr-4 shadow-xl">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide world-class education in civil engineering, conduct cutting-edge research 
                that addresses societal needs, and develop leaders who will shape the future of 
                **sustainable infrastructure development** in India and beyond.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-amber-500">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white p-4 rounded-full mr-4 shadow-xl">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be recognized as a premier department of civil engineering that contributes 
                significantly to technological advancement, **sustainable development**, and the creation 
                of innovative solutions for complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Dynamic Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The principles that guide our approach to education, research, and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl transition-all duration-300 group bg-gray-50 hover:bg-white hover:shadow-xl"
              >
                <div className={`bg-white ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-200 group-hover:border-amber-500 transition-colors duration-300 transform group-hover:scale-110 shadow-lg`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Advanced Layout */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Journey: Key Milestones</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A historical look at the growth and achievements of our department.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-800 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 transition-all duration-500 transform group-hover:scale-[1.05] ${index % 2 === 0 ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12'}`}>
                      <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500/0 group-hover:border-blue-500">
                        <div className={`text-2xl font-extrabold text-blue-800 mb-2 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>{milestone.year}</div>
                        <p className="text-gray-700 leading-relaxed text-md">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10">
                    <Zap className="h-3 w-3 text-white"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - High Contrast */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Department at a Glance</h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Numbers that reflect our growth and impact over the years.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">25+</div>
              <div className="text-blue-100 font-semibold">Faculty Members</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">500+</div>
              <div className="text-blue-100 font-semibold">Alumni</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">200+</div>
              <div className="text-blue-100 font-semibold">Research Papers</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">50+</div>
              <div className="text-blue-100 font-semibold">Active Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;