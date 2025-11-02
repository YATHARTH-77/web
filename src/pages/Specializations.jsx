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
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: {
        name: 'Advanced Structural Engineering Laboratory',
        area: '500 sq.m',
        capacity: '30 students',
        coordinator: 'Dr. Rajesh Kumar Sharma',
        equipment: [
          'Universal Testing Machine (2000 kN capacity)',
          'Compression Testing Machine (3000 kN)',
          'Shake Table for Seismic Testing',
          'Non-destructive Testing Equipment',
          'Data Acquisition Systems',
          'Loading Frames and Actuators'
        ]
      },
      research: {
        projects: [
          {
            title: 'Seismic Retrofitting of Heritage Structures',
            pi: 'Dr. Rajesh Kumar Sharma',
            funding: '₹85 Lakhs',
            agency: 'DST',
            duration: '2023-2026',
            status: 'Ongoing'
          },
          {
            title: 'Advanced Steel Structure Design',
            pi: 'Dr. Rahul Verma',
            funding: '₹65 Lakhs',
            agency: 'CSIR',
            duration: '2022-2025',
            status: 'Ongoing'
          }
        ],
        publications: [
          'Seismic Performance Assessment of RC Buildings with Masonry Infill Walls',
          'Advanced Composite Materials in Structural Applications',
          'Earthquake-Resistant Design of High-Rise Buildings'
        ]
      },
      faculty: ['Dr. Rajesh Kumar Sharma', 'Dr. Rahul Verma'],
      software: ['STAAD Pro', 'ETABS', 'SAP2000', 'ANSYS Structural']
    },
    geotechnical: {
      title: 'Geotechnical Engineering',
      description: 'Comprehensive soil mechanics, foundation engineering, and ground improvement research with modern testing equipment.',
      color: 'amber',
      icon: Microscope,
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: {
        name: 'Geotechnical Engineering Laboratory',
        area: '400 sq.m',
        capacity: '25 students',
        coordinator: 'Dr. Priya Menon',
        equipment: [
          'Triaxial Testing System',
          'Direct Shear Testing Apparatus',
          'Consolidation Testing Equipment',
          'Standard Penetration Test Equipment',
          'Permeability Testing Setup',
          'Compaction Testing Equipment'
        ]
      },
      research: {
        projects: [
          {
            title: 'Advanced Ground Improvement Techniques',
            pi: 'Dr. Priya Menon',
            funding: '₹65 Lakhs',
            agency: 'CSIR',
            duration: '2020-2023',
            status: 'Completed'
          },
          {
            title: 'Slope Stability Analysis Using AI',
            pi: 'Dr. Kavita Rao',
            funding: '₹45 Lakhs',
            agency: 'UGC',
            duration: '2023-2025',
            status: 'Ongoing'
          }
        ],
        publications: [
          'Machine Learning Applications in Geotechnical Site Characterization',
          'Bio-mediated Ground Improvement Methods',
          'Advanced Foundation Design for Complex Structures'
        ]
      },
      faculty: ['Dr. Priya Menon', 'Dr. Kavita Rao'],
      software: ['PLAXIS', 'GeoStudio', 'FLAC', 'SLOPE/W']
    },
    transportation: {
      title: 'Transportation Engineering',
      description: 'Highway engineering, traffic management, and intelligent transportation systems with advanced simulation capabilities.',
      color: 'green',
      icon: Target,
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: {
        name: 'Transportation Engineering Laboratory',
        area: '350 sq.m',
        capacity: '25 students',
        coordinator: 'Dr. Amit Singh',
        equipment: [
          'Marshall Stability Testing Apparatus',
          'Los Angeles Abrasion Testing Machine',
          'Aggregate Impact Testing Equipment',
          'Bitumen Testing Equipment',
          'Pavement Core Drilling Machine',
          'Traffic Simulation Software'
        ]
      },
      research: {
        projects: [
          {
            title: 'Highway Pavement Performance Modeling',
            pi: 'Dr. Amit Singh',
            funding: '₹75 Lakhs',
            agency: 'MoRTH',
            duration: '2023-2025',
            status: 'Ongoing'
          },
          {
            title: 'Smart Traffic Management Systems',
            pi: 'Dr. Amit Singh',
            funding: '₹55 Lakhs',
            agency: 'DST',
            duration: '2022-2024',
            status: 'Ongoing'
          }
        ],
        publications: [
          'Traffic Flow Optimization Using AI-Based Signal Control',
          'Sustainable Pavement Materials for Indian Highways',
          'Intelligent Transportation Systems Implementation'
        ]
      },
      faculty: ['Dr. Amit Singh'],
      software: ['VISSIM', 'SUMO', 'HCS', 'Synchro']
    },
    water: {
      title: 'Water Resources Engineering',
      description: 'Hydrology, hydraulics, and water quality management with comprehensive testing and modeling facilities.',
      color: 'cyan',
      icon: FlaskConical,
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: {
        name: 'Water Resources Engineering Laboratory',
        area: '400 sq.m',
        capacity: '30 students',
        coordinator: 'Dr. Sneha Patel',
        equipment: [
          'Hydraulic Bench',
          'Flume Systems',
          'Pipe Flow Apparatus',
          'Pumps and Flow Measurement Devices',
          'Water Level Recorders',
          'Rainfall Simulators'
        ]
      },
      research: {
        projects: [
          {
            title: 'Water Quality Assessment in Urban Rivers',
            pi: 'Dr. Sneha Patel',
            funding: '₹45 Lakhs',
            agency: 'UGC',
            duration: '2022-2024',
            status: 'Ongoing'
          },
          {
            title: 'Groundwater Modeling and Management',
            pi: 'Dr. Sneha Patel',
            funding: '₹60 Lakhs',
            agency: 'CGWB',
            duration: '2023-2025',
            status: 'Ongoing'
          }
        ],
        publications: [
          'Urban Water Quality Management Strategies',
          'Groundwater Contamination Assessment Techniques',
          'Sustainable Water Resource Development'
        ]
      },
      faculty: ['Dr. Sneha Patel'],
      software: ['HEC-RAS', 'MODFLOW', 'SWMM', 'EPANET']
    },
    environmental: {
      title: 'Environmental Engineering',
      description: 'Environmental monitoring, waste management, and sustainable construction with advanced analytical equipment.',
      color: 'emerald',
      icon: Award,
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: {
        name: 'Environmental Engineering Laboratory',
        area: '300 sq.m',
        capacity: '20 students',
        coordinator: 'Dr. Vikram Agarwal',
        equipment: [
          'UV-Visible Spectrophotometer',
          'BOD Incubator',
          'pH Meters and Conductivity Meters',
          'Turbidity Meters',
          'Dissolved Oxygen Meters',
          'Air Quality Monitoring Equipment'
        ]
      },
      research: {
        projects: [
          {
            title: 'Smart Waste Management Systems for Smart Cities',
            pi: 'Dr. Vikram Agarwal',
            funding: '₹1.2 Crores',
            agency: 'MHRD',
            duration: '2022-2025',
            status: 'Ongoing'
          },
          {
            title: 'Air Pollution Control in Urban Areas',
            pi: 'Dr. Vikram Agarwal',
            funding: '₹40 Lakhs',
            agency: 'CPCB',
            duration: '2023-2024',
            status: 'Ongoing'
          }
        ],
        publications: [
          'Sustainable Concrete Production Using Industrial Waste',
          'IoT-Based Environmental Monitoring Systems',
          'Green Building Technologies and Assessment'
        ]
      },
      faculty: ['Dr. Vikram Agarwal', 'Dr. Meera Joshi'],
      software: ['AERMOD', 'CALPUFF', 'WASP', 'QUAL2K']
    }
  };

  // Data transcribed from the provided image
  const laboratoryData = [
    { name: 'Computational Laboratory', location: '1C-404' },
    { name: 'Engineering Geology Laboratory', location: '1C-404' },
    { name: 'Environmental Engineering Laboratory', location: '1C-402' },
    { name: 'Fluid Mechanics Laboratory', location: '1C-403' },
    { name: 'Geotechnical Engineering Laboratory- 01', location: '1C-102(A)' },
    { name: 'Geotechnical Engineering Laboratory- 02', location: '1C-102(B)' },
    { name: 'Geodesy & Surveying Laboratory', location: '1E- 101' },
    { name: 'Hydraulics ad Hydrology Laboratory', location: '1C-403' }, // Kept "ad" as per image
    { name: 'Materials Engineering Laboratory', location: '1C-101(A)' },
    { name: 'Solid Mechanics Laboratory', location: '1C-101(B)' },
    { name: 'Transportation Engineering Laboratory', location: '1A-103' },
    { name: 'Structure Engineering Laboratory', location: '1E- 101' },
    { name: 'Brick Manufacturing Laboratory', location: 'Near VSB Hostel' },
    { name: 'Impact Loading Laboratory', location: 'Near Balda' },
    { name: 'NDS Laboratory', location: '1C-' },
    { name: 'Glacier Laboratory', location: '1C-401' },
  ];

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

      {/* --- Main Tab Navigation (New) --- */}
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
                {/* Laboratory Facilities */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Laboratory Facilities</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{currentSpec.facilities.name}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span>Area: {currentSpec.facilities.area}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        <span>Capacity: {currentSpec.facilities.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FlaskConical className="h-4 w-4 mr-2 text-amber-500" />
                      Major Equipment
                    </h5>
                    <div className="space-y-2">
                      {currentSpec.facilities.equipment.map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className={`w-2 h-2 ${getColorClasses(currentSpec.color, 'bg')} rounded-full mt-1.5 mr-3 flex-shrink-0`}></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Coordinator:</span>
                      <span className="ml-1">{currentSpec.facilities.coordinator}</span>
                    </div>
                  </div>
                </div>

                {/* Research Projects */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(currentSpec.color, 'bg')} text-white p-3 rounded-lg mr-4`}>
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Research Projects</h3>
                  </div>

                  <div className="space-y-6">
                    {currentSpec.research.projects.map((project, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 flex-1">{project.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${
                            project.status === 'Ongoing' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-2" />
                            <span className="font-medium">PI:</span> {project.pi}
                          </div>
                          <div className="flex items-center">
                            <Award className="h-3 w-3 mr-2" />
                            <span className="font-medium">{project.funding}</span> ({project.agency})
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-2" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {/* Faculty */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className={`h-5 w-5 mr-2 ${getColorClasses(currentSpec.color, 'text')}`} />
                    Faculty Members
                  </h4>
                  <div className="space-y-2">
                    {currentSpec.faculty.map((faculty, idx) => (
                      <div key={idx} className="text-sm text-gray-600">{faculty}</div>
                    ))}
                  </div>
                </div>

                {/* Software */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Computer className={`h-5 w-5 mr-2 ${getColorClasses(currentSpec.color, 'text')}`} />
                    Software & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSpec.software.map((software, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 bg-white ${getColorClasses(currentSpec.color, 'text')} text-xs rounded border`}
                      >
                        {software}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Publications */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className={`h-5 w-5 mr-2 ${getColorClasses(currentSpec.color, 'text')}`} />
                    Recent Publications
                  </h4>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{currentSpec.research.publications.length}</span> recent publications
                  </div>
                  <button className={`mt-2 text-sm ${getColorClasses(currentSpec.color, 'text')} hover:underline flex items-center`}>
                    <span>View All</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </button>
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
          {/* --- Laboratories Content (New) --- */}
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