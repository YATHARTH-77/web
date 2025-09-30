import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, Award, ChevronRight } from 'lucide-react';

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
      courses: ['Engineering Mechanics', 'Structural Analysis', 'Concrete Technology', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources Engineering']
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
      courses: ['Advanced Structural Analysis', 'Earthquake Engineering', 'Bridge Engineering', 'High-rise Building Design', 'Finite Element Methods', 'Steel and Concrete Structures']
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
      courses: ['Advanced Soil Mechanics', 'Foundation Engineering', 'Slope Stability', 'Ground Improvement', 'Rock Mechanics', 'Geosynthetics']
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
      courses: ['Research Methodology', 'Advanced Mathematics', 'Specialized Courses', 'Dissertation Research', 'Seminar Presentations', 'Professional Development']
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive education programs designed to shape the next generation of civil engineers
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From undergraduate to doctoral levels, we offer comprehensive programs that combine theoretical knowledge with practical application
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="text-sm">{program.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span className="text-sm">{program.intake}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-amber-500" />
                            Program Highlights
                          </h4>
                          <ul className="space-y-2">
                            {program.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2 text-amber-500" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.courses.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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

      {/* B.Tech Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">B.Tech Curriculum Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed semester-wise breakdown of the undergraduate program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(curriculum.btech).map(([semester, courses], index) => (
              <div
                key={semester}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-4 capitalize">
                  {semester.replace('semester', 'Semester ')}
                </h3>
                <ul className="space-y-2">
                  {courses.map((course, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Laboratory Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art laboratories supporting hands-on learning and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-200"
              >
                <div className="flex items-center">
                  <div className="bg-blue-800 text-white p-2 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{facility}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards a rewarding career in civil engineering. 
              Learn about our admission process and requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Admission Guidelines
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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