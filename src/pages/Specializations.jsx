import React, { useState } from 'react';
import { Search, Users, Award, BookOpen, Target, Microscope, Building, FlaskConical, Computer, MapPin, Calendar, ExternalLink, ChevronRight, HardHat, Settings } from 'lucide-react';

const Specializations = () => {
  const [activeMainTab, setActiveMainTab] = useState('specializations');
  const [activeSpecialization, setActiveSpecialization] = useState('structural');

  // UPDATED DATA STRUCTURE: Labs are now objects with 'name' and 'equipments'
  const specializations = {
    structural: {
      title: 'Structural Engineering',
      description: 'Advanced research in structural analysis, design, and earthquake engineering with state-of-the-art testing facilities.',
      color: 'blue',
      icon: Building,
      image: '/assets/Specialization banners/Structural_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Materials Engineering Laboratory',
            equipments: [
              { name: 'Universal Testing Machine (UTM)', image: '/api/placeholder/400/300' },
              { name: 'Compression Testing Machine', image: '/api/placeholder/400/300' },
              { name: 'Concrete Mixer', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Solid Mechanics Laboratory',
            equipments: [
              { name: 'Torsion Testing Machine', image: '/api/placeholder/400/300' },
              { name: 'Impact Tester (Charpy/Izod)', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Structure Engineering Laboratory',
            equipments: [
              { name: 'Loading Frame', image: '/api/placeholder/400/300' },
              { name: 'Shake Table', image: '/api/placeholder/400/300' },
              { name: 'Actuators', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Impact Loading Laboratory',
            equipments: [
              { name: 'Split Hopkinson Pressure Bar', image: '/api/placeholder/400/300' },
              { name: 'Gas Gun', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Brick Manufacturing Laboratory',
            equipments: [
              { name: 'Extruder', image: '/api/placeholder/400/300' },
              { name: 'Kiln', image: '/api/placeholder/400/300' }
            ]
          }
        ]
      },
      faculty: [
        <a href="https://sustainableconstructionlab.com/" target="_blank" rel="noreferrer">Dr. Sandeep Chaudhary</a>,
        <a href="https://people.iiti.ac.in/~abhishekrajput/" target="_blank" rel="noreferrer">Dr. Abhishek Rajput</a>,
        <a href="https://sites.google.com/view/kaustavbakshi/home" target="_blank" rel="noreferrer">Dr. Kaustav Bakshi</a>,
        <a href="https://sites.google.com/view/guruprakash/home?authuser=0" target="_blank" rel="noreferrer">Dr. Guru Prakash</a>,
        <a href="https://ravinderbhattoo.github.io/" target="_blank" rel="noreferrer">Dr. Ravinder</a>,
      ]
    },
    geotechnical: {
      title: 'Geotechnical Engineering',
      description: 'Comprehensive soil mechanics, foundation engineering, and ground improvement research with modern testing equipment.',
      color: 'amber',
      icon: Microscope,
      image: '/assets/Specialization banners/Geotechnical_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Geotechnical Engineering Laboratory- I',
            equipments: [
              { name: 'Direct Shear Test Apparatus', image: '/api/placeholder/400/300' },
              { name: 'Consolidation Apparatus', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Geotechnical Engineering Laboratory- II',
            equipments: [
              { name: 'Triaxial Shear Test System', image: '/api/placeholder/400/300' },
              { name: 'Permeability Apparatus', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Computational Laboratory',
            equipments: [
              { name: 'High Performance Workstations', image: '/api/placeholder/400/300' },
              { name: 'Plaxis 3D Software', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Engineering Geology Laboratory',
            equipments: [
              { name: 'Petrological Microscope', image: '/api/placeholder/400/300' },
              { name: 'Rock Cutting Machine', image: '/api/placeholder/400/300' }
            ]
          }
        ]
      },
      faculty: [
        <a href="https://people.iiti.ac.in/~neelima.satyam/" target="_blank" rel="noreferrer">Dr. Neelima Satyam D</a>,
        <a href="https://sites.google.com/site/lalitborana/" target="_blank" rel="noreferrer">Dr. Lalit Borana</a>,
        <a href="https://sites.google.com/view/apsingh/bio?authuser=0" target="_blank" rel="noreferrer">Dr. Akshay Pratap Singh</a>,
        <a href="https://sites.google.com/view/ramubaadiga/" target="_blank" rel="noreferrer">Dr. Baadiga Ramu</a>,
      ]
    },
    transportation: {
      title: 'Transportation Engineering',
      description: 'Highway engineering, traffic management, and intelligent transportation systems with advanced simulation capabilities.',
      color: 'green',
      icon: Target,
      image: '/assets/Specialization banners/Transport_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Geodesy and Surveying Laboratory',
            equipments: [
              { name: 'Total Station', image: '/api/placeholder/400/300' },
              { name: 'DGPS', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Transportation Engineering Laboratory',
            equipments: [
              { name: 'Bitumen Extractor', image: '/api/placeholder/400/300' },
              { name: 'Marshall Stability Apparatus', image: '/api/placeholder/400/300' },
              { name: 'Los Angeles Abrasion Machine', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'NDS Laboratory',
            equipments: [
              { name: 'Driving Simulator', image: '/api/placeholder/400/300' },
              { name: 'Traffic Speed Radar', image: '/api/placeholder/400/300' }
            ]
          }
        ]
      },
      faculty: [
        <a href="https://gourabsil.profiles.iiti.ac.in/" target="_blank" rel="noreferrer">Dr. Gourab Sil</a>,
        <a href="https://priyanshsingh.com/" target="_blank" rel="noreferrer">Dr. Priyansh Singh</a>,
        <a href="https://choudharypushpa.github.io/HumanFRSTLab/pages/team/faculty/pushpa.html" target="_blank" rel="noreferrer">Dr. Pushpa Choudhary</a>,
      ]
    },
    water: {
      title: 'Water Resources Engineering',
      description: 'Hydrology, hydraulics, and water quality management with comprehensive testing and modeling facilities.',
      color: 'cyan',
      icon: FlaskConical,
      image: '/assets/Specialization banners/Water_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Glacier Laboratory',
            equipments: [
              { name: 'Ice Core Drill', image: '/api/placeholder/400/300' },
              { name: 'Automatic Weather Station', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Fluid Mechanics Laboratory',
            equipments: [
              { name: 'Hydraulic Bench', image: '/api/placeholder/400/300' },
              { name: 'Reynolds Apparatus', image: '/api/placeholder/400/300' }
            ]
          },
          {
            name: 'Hydraulics and Hydrology Laboratory',
            equipments: [
              { name: 'Tilting Flume', image: '/api/placeholder/400/300' },
              { name: 'Rainfall Simulator', image: '/api/placeholder/400/300' }
            ]
          }
        ]
      },
      faculty: [
        <a href="https://sites.google.com/view/mkg1/home" target="_blank" rel="noreferrer">Dr. Manish Kumar Goyal</a>,
        <a href="https://sites.google.com/view/priyank2306" target="_blank" rel="noreferrer">Dr. Priyank J. Sharma</a>,
        <a href="https://sites.google.com/view/mohdfarooqazam/home" target="_blank" rel="noreferrer">Dr. Mohd. Farooq Azam</a>,
      ]
    },
    environmental: {
      title: 'Environmental Engineering',
      description: 'Environmental monitoring, waste management, and sustainable construction with advanced analytical equipment.',
      color: 'emerald',
      icon: Award,
      image: '/assets/Specialization banners/Environmental_specialization_banner.jpg',
      facilities: {
        labs: [
          {
            name: 'Environmental Engineering Laboratory',
            equipments: [
              { name: 'Dissolved Oxygen', image: '/assets/Instruments/Environment/DO.jpg'},
              { name: 'Turbidity & Free/ Total Chlorine', image: '/assets/Instruments/Environment/Turbidity.png' },
              { name: 'Autoclave', image: '/assets/Instruments/Environment/Autoclave.png' },
              { name: 'Hot Plate', image: '/assets/Instruments/Environment/HotPlate.png' },
              { name: 'Flame Photometer', image: '/assets/Instruments/Environment/FlamePhotometer.png' },
              { name: 'Weighing Balance', image: '/assets/Instruments/Environment/WeighingBalance.png' },
              { name: 'Hot Air Oven', image: '/assets/Instruments/Environment/HotAirOven.png' },
              { name: 'TKN (Total Tkjeldahl Nitrogen)', image: '/assets/Instruments/Environment/TKN.png' },
              { name: 'Muffle Furnace', image: '/assets/Instruments/Environment/MuffleFurnance.png' },
              { name: 'Microprocessor Controlled Incubator', image: '/assets/Instruments/Environment/MCL.png' },
              { name: 'Distillation Apparatus', image: '/assets/Instruments/Environment/DistillationApparatus.png' },
              { name: 'COD Digestion Unit', image: '/assets/Instruments/Environment/COD.jpg' },
              { name: 'Weighing Machine', image: '/assets/Instruments/Environment/WeighingMachine.jpg' },
            ]
          }
        ]
      },
      faculty: [
        <a href="https://ashootoshmandpe.profiles.iiti.ac.in/" target="_blank" rel="noreferrer">Dr. Ashootosh Mandpe</a>,
        <a href="https://sites.google.com/view/mayur-shirish-jain" target="_blank" rel="noreferrer">Dr. Mayur Shirish Jain</a>,
      ]
    }
  };

  // Static Lab Data (for the Table View)
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
    { name: 'NDS Laboratory', location: 'LG-01 Carbon building' },
    { name: 'Glacier Laboratory', location: '1C-401' },
  ];

  const laboratoryData = [...rawLaboratoryData].sort((a, b) => {
    const isA1C = a.location.trim().startsWith('1C');
    const isB1C = b.location.trim().startsWith('1C');
    if (isA1C && !isB1C) return -1;
    if (!isA1C && isB1C) return 1;
    return a.location.localeCompare(b.location);
  });

  const specializationKeys = Object.keys(specializations);
  const currentSpec = specializations[activeSpecialization];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-50' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-600', hover: 'hover:bg-amber-700', light: 'bg-amber-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-700', light: 'bg-green-50' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-600', hover: 'hover:bg-cyan-700', light: 'bg-cyan-50' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', light: 'bg-emerald-50' }
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

      {/* Main Tab Navigation */}
      <section className="py-6 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveMainTab('specializations')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${activeMainTab === 'specializations'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
            >
              <Award className="h-5 w-5" />
              Specializations
            </button>
            <button
              onClick={() => setActiveMainTab('laboratories')}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 flex items-center gap-2 ${activeMainTab === 'laboratories'
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

      {/* Conditional Content Display */}
      {activeMainTab === 'specializations' ? (
        <>
          {/* Specialization Navigation */}
          <section className="py-8 bg-gray-50 sticky top-0 z-30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-2">
                {specializationKeys.map((key) => {
                  const spec = specializations[key];
                  const isActive = activeSpecialization === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSpecialization(key)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${isActive
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

              {/* Content Grid (Labs List & Faculty) */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Laboratory Facilities List */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Laboratory Facilities</h3>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {/* UPDATED MAP: Accessing lab.name */}
                      {currentSpec.facilities.labs.map((lab, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className={`mt-2 mr-2 h-2 w-2 rounded-full ${getColorClasses(currentSpec.color, 'bg')}`} />
                          <span className="text-lg font-medium">{lab.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Faculty Members */}
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

              {/* NEW SECTION: Laboratory Equipments */}
              <div className="border-t border-gray-200 pt-16">
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center space-x-2 ${getColorClasses(currentSpec.color, 'text')} mb-2`}>
                    <Settings className="h-6 w-6" />
                    <h3 className="text-3xl font-bold text-gray-900">Research Infrastructure & Equipment</h3>
                  </div>
                  <p className="text-gray-600">Advanced instrumentation available in our laboratories</p>
                </div>

                <div className="space-y-12">
                  {currentSpec.facilities.labs.map((lab, labIdx) => (
                    <div key={labIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      {/* Lab Header */}
                      <div className={`${getColorClasses(currentSpec.color, 'light')} px-6 py-4 border-b border-gray-100`}>
                        <h4 className={`text-xl font-bold ${getColorClasses(currentSpec.color, 'text')}`}>
                          {lab.name}
                        </h4>
                      </div>

                      {/* Equipment Grid */}
                      <div className="p-6">
                        {lab.equipments && lab.equipments.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lab.equipments.map((eq, eqIdx) => (
                              <div key={eqIdx} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg shadow-md aspect-video mb-3">
                                  <img 
                                    src={eq.image} 
                                    alt={eq.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                                </div>
                                <h5 className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                                  {eq.name}
                                </h5>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">Equipment details coming soon.</p>
                        )}
                      </div>
                    </div>
                  ))}
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
          {/* Laboratories Content Table - Unchanged except for ensuring component validity */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Department Laboratories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
                  Our department is equipped with a wide range of specialized laboratories for teaching and research.
                </p>
              </div>

              <div className="shadow-lg overflow-hidden border-b border-gray-200 rounded-lg">
                <div className="overflow-x-auto">
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
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Specializations;