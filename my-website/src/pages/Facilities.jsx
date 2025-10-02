import React from 'react';
import { MapPin, Users, Calendar, Award, Wrench, Computer, FlaskConical, Building, Zap, Cpu, Target } from 'lucide-react';

const Facilities = () => {
  const laboratories = [
    {
      name: 'Structural Engineering Laboratory',
      area: '500 sq.m',
      capacity: '30 students',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Universal Testing Machine (2000 kN capacity)',
        'Compression Testing Machine (3000 kN)',
        'Shake Table for Seismic Testing',
        'Non-destructive Testing Equipment',
        'Data Acquisition Systems',
        'Loading Frames and Actuators'
      ],
      description: 'State-of-the-art facility for testing concrete, steel, and composite materials under various loading conditions.',
      coordinator: 'Dr. Rajesh Kumar Sharma'
    },
    {
      name: 'Geotechnical Engineering Laboratory',
      area: '400 sq.m',
      capacity: '25 students',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Triaxial Testing System',
        'Direct Shear Testing Apparatus',
        'Consolidation Testing Equipment',
        'Standard Penetration Test Equipment',
        'Permeability Testing Setup',
        'Compaction Testing Equipment'
      ],
      description: 'Comprehensive facility for soil mechanics testing and geotechnical characterization.',
      coordinator: 'Dr. Priya Menon'
    },
    {
      name: 'Transportation Engineering Laboratory',
      area: '350 sq.m',
      capacity: '25 students',
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Marshall Stability Testing Apparatus',
        'Los Angeles Abrasion Testing Machine',
        'Aggregate Impact Testing Equipment',
        'Bitumen Testing Equipment',
        'Pavement Core Drilling Machine',
        'Traffic Simulation Software'
      ],
      description: 'Advanced facility for highway materials testing and pavement engineering research.',
      coordinator: 'Dr. Amit Singh'
    },
    {
      name: 'Environmental Engineering Laboratory',
      area: '300 sq.m',
      capacity: '20 students',
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'UV-Visible Spectrophotometer',
        'BOD Incubator',
        'pH Meters and Conductivity Meters',
        'Turbidity Meters',
        'Dissolved Oxygen Meters',
        'Air Quality Monitoring Equipment'
      ],
      description: 'Well-equipped laboratory for water quality analysis and environmental monitoring.',
      coordinator: 'Dr. Vikram Agarwal'
    },
    {
      name: 'Water Resources Engineering Laboratory',
      area: '400 sq.m',
      capacity: '30 students',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Hydraulic Bench',
        'Flume Systems',
        'Pipe Flow Apparatus',
        'Pumps and Flow Measurement Devices',
        'Water Level Recorders',
        'Rainfall Simulators'
      ],
      description: 'Modern facility for hydraulics, hydrology, and water resources engineering experiments.',
      coordinator: 'Dr. Sneha Patel'
    },
    {
      name: 'Materials Testing Laboratory',
      area: '450 sq.m',
      capacity: '35 students',
      image: 'https://images.pexels.com/photos/3865263/pexels-photo-3865263.jpeg?auto=compress&cs=tinysrgb&w=800',
      equipment: [
        'Concrete Mix Design Equipment',
        'Cement Testing Apparatus',
        'Aggregate Testing Equipment',
        'Steel Bar Testing Machines',
        'Durability Testing Setup',
        'Microscopy Equipment'
      ],
      description: 'Comprehensive facility for testing construction materials and quality control.',
      coordinator: 'Dr. Meera Joshi'
    }
  ];

  const computingFacilities = [
    {
      name: 'CAD Laboratory',
      software: ['AutoCAD', 'STAAD Pro', 'ETABS', 'SAP2000', 'Revit', 'ANSYS'],
      capacity: '40 workstations',
      description: 'High-performance workstations for structural analysis and design',
      icon: Computer
    },
    {
      name: 'GIS Laboratory',
      software: ['ArcGIS', 'QGIS', 'Google Earth Pro', 'Remote Sensing Software'],
      capacity: '30 workstations',
      description: 'Geographic Information Systems for transportation and water resources',
      icon: MapPin
    },
    {
      name: 'Numerical Modeling Lab',
      software: ['MATLAB', 'PLAXIS', 'FLAC', 'ABAQUS', 'COMSOL'],
      capacity: '25 workstations',
      description: 'Advanced numerical analysis and finite element modeling',
      icon: Cpu
    }
  ];

  const infrastructure = [
    {
      name: 'Department Building',
      features: ['Air-conditioned classrooms', 'Modern lecture halls', 'Faculty offices', 'Student common areas'],
      icon: Building
    },
    {
      name: 'Library & Information Center',
      features: ['Digital library access', 'Research databases', 'Study spaces', 'Reference materials'],
      icon: Award
    },
    {
      name: 'Conference Hall',
      features: ['200-seat capacity', 'Audio-visual equipment', 'Video conferencing', 'Smart podium'],
      icon: Users
    },
    {
      name: 'Workshop',
      features: ['Carpentry section', 'Welding equipment', 'Machine shop', 'Safety equipment'],
      icon: Wrench
    }
  ];

  const fieldStations = [
    {
      name: 'Structural Health Monitoring Station',
      location: 'Campus Building',
      purpose: 'Real-time monitoring of structural behavior and earthquake response',
      equipment: ['Accelerometers', 'Strain Gauges', 'Data Loggers', 'Wireless Sensors']
    },
    {
      name: 'Weather Monitoring Station',
      location: 'Department Rooftop',
      purpose: 'Meteorological data collection for research and academic purposes',
      equipment: ['Rain Gauge', 'Wind Speed Meters', 'Temperature Sensors', 'Data Logger']
    },
    {
      name: 'Traffic Data Collection Point',
      location: 'Campus Road',
      purpose: 'Traffic flow analysis and transportation research',
      equipment: ['Vehicle Counters', 'Speed Detection', 'Camera Systems', 'Data Processing Unit']
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Elevated Banner */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3865263/pexels-photo-3865263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Department Facilities</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art infrastructure supporting excellence in education and research.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratories - Advanced Card Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Research Laboratories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cutting-edge laboratories equipped with modern instruments and advanced testing facilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {laboratories.map((lab, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group transform hover:scale-[1.01]"
              >
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-[1.05]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 border-b-2 border-amber-500/50 inline-block pb-1">{lab.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">{lab.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-medium">
                    <div className="flex items-center text-gray-700">
                      <Target className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Area: {lab.area}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Capacity: {lab.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-4 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                      <FlaskConical className="h-5 w-5 mr-2 text-amber-500" />
                      Major Equipment
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.equipment.slice(0, 4).map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium shadow-sm">
                          {item}
                        </span>
                      ))}
                      {lab.equipment.length > 4 && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">
                          +{lab.equipment.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-700 font-medium">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      <span>Coordinator: {lab.coordinator}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computing Facilities - High-Tech Look */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Advanced Computing Facilities</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              High-performance computing infrastructure for complex analysis, design, and research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {computingFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl transition-shadow duration-300 p-6 border-l-4 border-amber-500 hover:shadow-2xl transform hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-800 text-white p-3 rounded-lg mr-4 shadow-lg">
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                    <p className="text-sm text-gray-600 font-medium">{facility.capacity}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{facility.description}</p>
                
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.software.map((software, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {software}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure - Distinctive Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Core Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Modern facilities designed to support academic excellence and community well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructure.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 group transform hover:scale-[1.03]"
              >
                <div className="text-center">
                  <div className="bg-blue-800 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:bg-amber-500 transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.name}</h3>
                  <ul className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Stations - Data Focus */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Field Monitoring Stations</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real-time monitoring systems providing valuable data for research and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fieldStations.map((station, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl transition-shadow duration-300 p-6 border-r-4 border-amber-500 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-blue-600"/>
                    {station.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-3 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                  <span className='font-medium'>{station.location}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm italic">{station.purpose}</p>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Equipment</h4>
                  <div className="flex flex-wrap gap-2">
                    {station.equipment.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Statistics - High Contrast */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Facilities Overview</h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Comprehensive infrastructure supporting education and research excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">6</div>
              <div className="text-blue-100 font-semibold">Research Labs</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">95</div>
              <div className="text-blue-100 font-semibold">Workstations</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">2400</div>
              <div className="text-blue-100 font-semibold">sq.m Lab Space</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">15+</div>
              <div className="text-blue-100 font-semibold">Software Licenses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information - CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Experience Our Labs Firsthand</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Interested in seeing our facilities? Schedule a visit to explore our state-of-the-art laboratories 
              and infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Schedule a Tour
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;