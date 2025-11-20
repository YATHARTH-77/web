import React, { useState } from 'react';
import { Search, Users, Award, BookOpen, Target, Microscope, Building, FlaskConical, Computer, MapPin, Calendar, ExternalLink, ChevronRight, HardHat } from 'lucide-react';

const Specializations = () => {
  // New state to toggle between Specializations and Laboratories
  const [activeMainTab, setActiveMainTab] = useState('specializations');
  const [activeSpecialization, setActiveSpecialization] = useState('structural');
  
  const specializations = {
    structural: {
      title: 'Structural Engineering',
      description: 'Advanced research in structural analysis, design, and earthquake engineering with state-of-the-art testing facilities.',
      color: 'blue',
      icon: Building,
      image: '/assets/Specialization banners/Structural_specialization_banner.jpg',
      facilities: {
        // CHANGED: Converted to array of labs
        labs: [
          'Materials Engineering Laboratory',
          'Solid Mechanics Laboratory',
          'Structure Engineering Laboratory',
          'Impact Loading Laboratory',
          'Brick Manufacturing Laboratory'
        ]
      },
      faculty: [
        <a href="https://sustainableconstructionlab.com/" target="_blank">Dr. Sandeep Chaudhary</a>, 
        <a href="https://people.iiti.ac.in/~abhishekrajput/" target="_blank">Dr. Abhishek Rajput</a>,  
        <a href="https://sites.google.com/view/kaustavbakshi/home" target="_blank">Dr. Kaustav Bakshi</a>,  
        <a href="https://sites.google.com/view/guruprakash/home?authuser=0" target="_blank">Dr. Guru Prakash</a>,  
        <a href="https://ravinderbhattoo.github.io/" target="_blank">Dr. Ravinder</a>, 
      ]
    },
    geotechnical: {
      title: 'Geotechnical Engineering',
      description: 'Comprehensive soil mechanics, foundation engineering, and ground improvement research with modern testing equipment.',
      color: 'amber',
      icon: Microscope,
      image: '/assets/Specialization banners/Geotechnical_specialization_banner.jpg',
      facilities: {
        // CHANGED: Updated labs list
        labs: [
          'Geotechnical Engineering Laboratory- I',
          'Geotechnical Engineering Laboratory- II',
          'Computational Laboratory',
          'Engineering Geology Laboratory'
        ]
      },
      faculty: [
        <a href="https://people.iiti.ac.in/~neelima.satyam/" target="_blank">Dr. Neelima Satyam D</a>, 
        <a href="https://sites.google.com/site/lalitborana/" target="_blank">Dr. Lalit Borana</a>, 
        <a href="https://sites.google.com/view/apsingh/bio?authuser=0" target="_blank">Dr. Akshay Pratap Singh</a>, 
        <a href="https://sites.google.com/view/ramubaadiga/" target="_blank">Dr. Baadiga Ramu</a>, 
      ]
    },
    transportation: {
      title: 'Transportation Engineering',
      description: 'Highway engineering, traffic management, and intelligent transportation systems with advanced simulation capabilities.',
      color: 'green',
      icon: Target,
      image: '/assets/Specialization banners/Transport_specialization_banner.jpg',
      facilities: {
        // CHANGED: Updated labs list
        labs: [
          'Geodesy and Surveying Laboratory',
          'Transportation Engineering Laboratory',
          'NDS Laboratory'
        ]
      },
      faculty: [
        <a href="https://gourabsil.profiles.iiti.ac.in/" target="_blank">Dr. Gourab Sil</a>, 
        <a href="https://priyanshsingh.com/" target="_blank">Dr. Priyansh Singh</a>, 
        <a href="https://choudharypushpa.github.io/HumanFRSTLab/pages/team/faculty/pushpa.html" target="_blank">Dr. Pushpa Choudhary</a>, 
      ]
    },
    water: {
      title: 'Water Resources Engineering',
      description: 'Hydrology, hydraulics, and water quality management with comprehensive testing and modeling facilities.',
      color: 'cyan',
      icon: FlaskConical,
      image: '/assets/Specialization banners/Water_specialization_banner.jpg',
      facilities: {
        // CHANGED: Updated labs list
        labs: [
          'Glacier Laboratory',
          'Fluid Mechanics Laboratory',
          'Hydraulics and Hydrology Laboratory'
        ]
      },
      faculty: [
        <a href="https://sites.google.com/view/mkg1/home" target="_blank">Dr. Manish Kumar Goyal</a>,
        <a href="https://sites.google.com/view/priyank2306" target="_blank">Dr. Priyank J. Sharma</a>,
        <a href="https://sites.google.com/view/mohdfarooqazam/home" target="_blank">Dr. Mohd. Farooq Azam</a>,
      ]
    },
    environmental: {
      title: 'Environmental Engineering',
      description: 'Environmental monitoring, waste management, and sustainable construction with advanced analytical equipment.',
      color: 'emerald',
      icon: Award,
      image: '/assets/Specialization banners/Environmental_specialization_banner.jpg',
      facilities: {
        // CHANGED: Updated labs list
        labs: [
          'Environmental Engineering Laboratory'
        ]
      },
      faculty: [
        <a href="https://ashootoshmandpe.profiles.iiti.ac.in/" target="_blank">Dr. Ashootosh Mandpe</a>,
        <a href="https://sites.google.com/view/mayur-shirish-jain" target="_blank">Dr. Mayur Shirish Jain</a>,
      ]
    }
  };

  // Data transcribed from the provided image
  const rawLaboratoryData = [
    { name: 'Computational Laboratory', location: '1C-404' },
    { name: 'Engineering Geology Laboratory', location: '1C-404' },
    { name: 'Environmental Engineering Laboratory', location: '1C-402' },
    { name: 'Fluid Mechanics Laboratory', location: '1C-403' },
    { name: 'Geotechnical Engineering Laboratory- I', location: '1C-102(A)' },
    { name: 'Geotechnical Engineering Laboratory- II', location: '1C-102(B)' },
    { name: 'Geodesy & Surveying Laboratory', location: '1E- 101' },
    { name: 'Hydraulics ad Hydrology Laboratory', location: '1C-403' }, 
    { name: 'Materials Engineering Laboratory', location: '1C-101(A)' },
    { name: 'Solid Mechanics Laboratory', location: '1C-101(B)' },
    { name: 'Transportation Engineering Laboratory', location: '1A-103' },
    { name: 'Structure Engineering Laboratory', location: '1E- 101' },
    { name: 'Brick Manufacturing Laboratory', location: 'Near VSB Hostel' },
    { name: 'Impact Loading Laboratory', location: 'Near Balda' },
    // CHANGED: Updated location for NDS Laboratory
    { name: 'NDS Laboratory', location: 'LG-01 Carbon building' },
    { name: 'Glacier Laboratory', location: '1C-401' },
  ];

  // Sorting Logic (1C locations first)
  const laboratoryData = [...rawLaboratoryData].sort((a, b) => {
    const isA1C = a.location.trim().startsWith('1C');
    const isB1C = b.location.trim().startsWith('1C');

    if (isA1C && !isB1C) return -1; // a comes first
    if (!isA1C && isB1C) return 1;  // b comes first
    
    // If both are 1C or both are NOT 1C, sort alphabetically by location
    return a.location.localeCompare(b.location);
  });

  const specializationKeys = Object.keys(specializations);
  const currentSpec = specializations[activeSpecialization];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-600', hover: 'hover:bg-amber-700' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-700' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-600', hover: 'hover:bg-cyan-700' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700' }
    };
    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Research & Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our core specializations and state-of-the-art laboratories
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Tab Navigation --- */}
      <section className="py-6 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveMainTab('specializations')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${
                activeMainTab === 'specializations'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Award className="h-5 w-5" />
              Specializations
            </button>
            <button
              onClick={() => setActiveMainTab('laboratories')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${
                activeMainTab === 'laboratories'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <HardHat className="h-5 w-5" />
              Laboratories
            </button>
          </div>
        </div>
      </section>

      {/* --- Conditional Content Display --- */}
      {activeMainTab === 'specializations' ? (
        <>
          {/* Specialization Navigation */}
          <section className="py-8 bg-gray-50 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-2">
                {specializationKeys.map((key) => {
                  const spec = specializations[key];
                  const isActive = activeSpecialization === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSpecialization(key)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                        isActive
                          ? `${getColorClasses(spec.color, 'bg')} text-white shadow-lg`
                          : `bg-white ${getColorClasses(spec.color, 'text')} ${getColorClasses(spec.color, 'border')} border hover:shadow-md`
                      }`}
                    >
                      <spec.icon className="h-4 w-4" />
                      <span>{spec.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Specialization Content */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center space-x-3 ${getColorClasses(currentSpec.color, 'text')} mb-4`}>
                  <currentSpec.icon className="h-8 w-8" />
                  <h2 className="text-4xl font-bold text-gray-900">{currentSpec.title}</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {currentSpec.description}
                </p>
              </div>

              {/* Overview Image */}
              <div className="mb-16">
                <img
                  src={currentSpec.image}
                  alt={currentSpec.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Laboratory Facilities - Simplified List */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Laboratory Facilities</h3>
                  </div>

                  <div className="mb-6">
                    {/* CHANGED: Rendering list of labs */}
                    <ul className="space-y-3">
                      {currentSpec.facilities.labs.map((lab, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                           <span className={`mt-2 mr-2 h-2 w-2 rounded-full ${getColorClasses(currentSpec.color, 'bg')}`} />
                           <span className="text-lg font-medium">{lab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Faculty Members - Expanded List */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Faculty Members</h3>
                  </div>

                  <div className="space-y-3">
                    {currentSpec.faculty.map((faculty, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                         <ChevronRight className={`h-4 w-4 mr-2 ${getColorClasses(currentSpec.color, 'text')}`} />
                        <span className="text-gray-800 font-medium">{faculty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className={`py-20 bg-gradient-to-r ${getColorClasses(currentSpec.color, 'bg')} to-blue-600`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Interested in {currentSpec.title}?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Learn more about our programs, research opportunities, and how you can be part of our specialized team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </button>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Faculty
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* --- Laboratories Content --- */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Department Laboratories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
                  Our department is equipped with a wide range of specialized laboratories for teaching and research.
                </p>
              </div>
              
              <div className="shadow-lg overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Sr. No.
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Laboratory Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {laboratoryData.map((lab, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {lab.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {lab.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Specializations;