import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, Award, ChevronRight, Zap, Target } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: 'B.Tech in Civil Engineering',
      duration: '4 Years',
      intake: '60 Students',
      description: 'Comprehensive undergraduate program covering all major areas of civil engineering with strong emphasis on practical learning and industry exposure.',
      highlights: [
        'Strong foundation in mathematics, physics, and engineering sciences',
        'Hands-on laboratory experience in all core subjects',
        'Industry internships and live projects',
        'Professional development and communication skills'
      ],
      courses: ['Engineering Mechanics', 'Structural Analysis', 'Concrete Technology', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources Engineering'],
      tagColor: 'bg-blue-800'
    },
    {
      title: 'M.Tech in Structural Engineering',
      duration: '2 Years',
      intake: '25 Students',
      description: 'Advanced program focusing on design, analysis, and behavior of structures with emphasis on modern computational methods and sustainable construction.',
      highlights: [
        'Advanced structural analysis and design',
        'Research-oriented curriculum',
        'Access to state-of-the-art laboratories',
        'Thesis work with industry collaboration'
      ],
      courses: ['Advanced Structural Analysis', 'Earthquake Engineering', 'Bridge Engineering', 'High-rise Building Design', 'Finite Element Methods', 'Steel and Concrete Structures'],
      tagColor: 'bg-amber-500'
    },
    {
      title: 'M.Tech in Geotechnical Engineering',
      duration: '2 Years',
      intake: '20 Students',
      description: 'Specialized program in soil mechanics, foundation engineering, and geoenvironmental engineering with modern testing and analysis techniques.',
      highlights: [
        'Comprehensive soil and rock mechanics',
        'Foundation design for complex structures',
        'Geoenvironmental engineering applications',
        'Field investigation techniques'
      ],
      courses: ['Advanced Soil Mechanics', 'Foundation Engineering', 'Slope Stability', 'Ground Improvement', 'Rock Mechanics', 'Geosynthetics'],
      tagColor: 'bg-green-600'
    },
    {
      title: 'Ph.D. in Civil Engineering',
      duration: '3-6 Years',
      intake: '15 Students',
      description: 'Research-intensive doctoral program aimed at producing independent researchers and academics in various specializations of civil engineering.',
      highlights: [
        'Independent research under expert supervision',
        'Interdisciplinary research opportunities',
        'Teaching assistantship opportunities',
        'International collaboration programs'
      ],
      courses: ['Research Methodology', 'Advanced Mathematics', 'Specialized Courses', 'Dissertation Research', 'Seminar Presentations', 'Professional Development'],
      tagColor: 'bg-red-600'
    }
  ];

  const curriculum = {
    btech: {
      semester1: ['Engineering Mathematics-I', 'Engineering Physics', 'Engineering Chemistry', 'Basic Electrical Engineering', 'Engineering Graphics', 'Workshop Practice'],
      semester2: ['Engineering Mathematics-II', 'Engineering Mechanics', 'Thermodynamics', 'Material Science', 'Computer Programming', 'Environmental Science'],
      semester3: ['Engineering Mathematics-III', 'Strength of Materials', 'Fluid Mechanics', 'Surveying', 'Building Materials', 'Geology'],
      semester4: ['Engineering Mathematics-IV', 'Structural Analysis-I', 'Soil Mechanics', 'Hydrology', 'Construction Technology', 'Transportation Engineering-I'],
      semester5: ['Structural Analysis-II', 'Foundation Engineering', 'Hydraulics', 'Highway Engineering', 'Concrete Technology', 'Professional Elective-I'],
      semester6: ['Design of Concrete Structures', 'Water Resources Engineering', 'Traffic Engineering', 'Environmental Engineering', 'Professional Elective-II', 'Internship'],
      semester7: ['Design of Steel Structures', 'Advanced Concrete Technology', 'Project Management', 'Professional Elective-III', 'Open Elective', 'Major Project-I'],
      semester8: ['Earthquake Engineering', 'Professional Elective-IV', 'Open Elective-II', 'Major Project-II', 'Comprehensive Viva', 'Industrial Training']
    }
  };

  const facilities = [
    'Structural Engineering Laboratory',
    'Geotechnical Engineering Laboratory',
    'Transportation Engineering Laboratory',
    'Water Resources Engineering Laboratory',
    'Environmental Engineering Laboratory',
    'Materials Testing Laboratory',
    'Computer Laboratory',
    'Survey Laboratory'
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Elevated Banner */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Academic Programs</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive education programs designed to shape the next generation of civil engineers and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview - Interactive Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Our Offerings</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From undergraduate to doctoral levels, we offer programs that combine theoretical knowledge with practical application.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-3xl overflow-hidden border-t-8 border-blue-500/0 hover:border-blue-500"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Title and Info */}
                    <div className="flex-1">
                      <div className="flex items-center mb-4 border-b pb-4 border-gray-100">
                        <div className={`${program.tagColor} text-white p-4 rounded-full mr-4 shadow-xl`}>
                          <GraduationCap className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-extrabold text-gray-900">{program.title}</h3>
                          <div className="flex items-center space-x-6 mt-2 text-gray-700 text-sm font-medium">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{program.intake} Intake</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8 leading-relaxed border-l-4 border-amber-500 pl-4">
                        {program.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Highlights */}
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-600">
                          <h4 className="font-extrabold text-gray-900 mb-4 flex items-center text-lg">
                            <Award className="h-5 w-5 mr-3 text-blue-600" />
                            Program Highlights
                          </h4>
                          <ul className="space-y-3">
                            {program.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <ChevronRight className="h-4 w-4 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Courses */}
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-amber-500">
                          <h4 className="font-extrabold text-gray-900 mb-4 flex items-center text-lg">
                            <BookOpen className="h-5 w-5 mr-3 text-amber-500" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.courses.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium shadow-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B.Tech Curriculum - Horizontal Scroll */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">B.Tech Curriculum Structure</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Detailed semester-wise breakdown of the undergraduate program's core subjects.
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto pb-6 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 space-x-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
            {Object.entries(curriculum.btech).map(([semester, courses] ) => (
              <div
                key={semester}
                className="min-w-[280px] w-[300px] bg-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] p-6 border-t-4 border-amber-500"
              >
                <h3 className="text-xl font-extrabold text-blue-800 mb-4 capitalize border-b pb-2">
                  <Target className="h-5 w-5 mr-2 inline-block text-amber-500"/>
                  {semester.replace('semester', 'Semester ')}
                </h3>
                <ul className="space-y-3">
                  {courses.map((course, idx) => (
                    <li key={idx} className="text-md text-gray-700 leading-relaxed flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0"/>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm italic">
            * Scroll horizontally to view all semesters.
          </p>
        </div>
      </section>

      {/* Laboratory Facilities - Simple Card Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Laboratory Facilities</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              State-of-the-art laboratories supporting hands-on learning and cutting-edge research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="bg-blue-800 text-white p-3 rounded-lg mr-4 shadow-lg">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{facility}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information - High Contrast CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Take the first step towards a rewarding career in civil engineering. 
              Learn about our admission process and requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Zap className="h-5 w-5 mr-2 inline-block"/> Admission Guidelines
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;