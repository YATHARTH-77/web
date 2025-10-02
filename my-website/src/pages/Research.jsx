import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Users, Calendar, Award, BookOpen, Target, Microscope, Zap, TrendingUp, Cpu } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');

  const researchAreas = [
    {
      title: 'Earthquake Engineering',
      description: 'Advanced research in seismic analysis, structural dynamics, and earthquake-resistant design',
      projects: 8,
      faculty: 4,
      icon: Zap, // Changed icon for a more dynamic look
      color: 'text-red-500' // Added color for visual flair
    },
    {
      title: 'Sustainable Construction',
      description: 'Green building technologies, sustainable materials, and environmentally conscious construction practices',
      projects: 6,
      faculty: 3,
      icon: TrendingUp, // Changed icon
      color: 'text-green-500'
    },
    {
      title: 'Geotechnical Innovation',
      description: 'Soil mechanics, foundation engineering, and ground improvement techniques',
      projects: 7,
      faculty: 3,
      icon: Microscope,
      color: 'text-yellow-500'
    },
    {
      title: 'Smart Infrastructure',
      description: 'IoT integration, structural health monitoring, and intelligent transportation systems',
      projects: 5,
      faculty: 4,
      icon: Cpu, // Changed icon
      color: 'text-indigo-500'
    }
  ];

  // ... (Keep the existing data for projects, publications, and labs)
  const projects = [
    {
      title: 'Seismic Retrofitting of Heritage Structures',
      pi: 'Dr. Rajesh Kumar Sharma',
      status: 'Ongoing',
      funding: '₹85 Lakhs',
      agency: 'DST',
      duration: '2023-2026',
      description: 'Development of innovative retrofitting techniques for historical buildings to enhance seismic resistance while preserving architectural integrity.',
      category: 'Structural Engineering',
      collaborators: ['IIT Delhi', 'CBRI Roorkee']
    },
    {
      title: 'Smart Waste Management Systems for Smart Cities',
      pi: 'Dr. Vikram Agarwal',
      status: 'Ongoing',
      funding: '₹1.2 Crores',
      agency: 'MHRD',
      duration: '2022-2025',
      description: 'IoT-based waste collection and processing system with real-time monitoring and optimization algorithms.',
      category: 'Environmental Engineering',
      collaborators: ['CSIR-NEERI', 'Municipal Corporation']
    },
    {
      title: 'Advanced Ground Improvement Techniques',
      pi: 'Dr. Priya Menon',
      status: 'Completed',
      funding: '₹65 Lakhs',
      agency: 'CSIR',
      duration: '2020-2023',
      description: 'Investigation of bio-mediated ground improvement methods for sustainable foundation solutions.',
      category: 'Geotechnical Engineering',
      collaborators: ['IISc Bangalore', 'NIT Calicut']
    },
    {
      title: 'Highway Pavement Performance Modeling',
      pi: 'Dr. Amit Singh',
      status: 'Ongoing',
      funding: '₹75 Lakhs',
      agency: 'MoRTH',
      duration: '2023-2025',
      description: 'Development of predictive models for pavement deterioration under Indian traffic and climatic conditions.',
      category: 'Transportation Engineering',
      collaborators: ['CRRI New Delhi', 'IIT Kharagpur']
    },
    {
      title: 'Water Quality Assessment in Urban Rivers',
      pi: 'Dr. Sneha Patel',
      status: 'Ongoing',
      funding: '₹45 Lakhs',
      agency: 'UGC',
      duration: '2022-2024',
      description: 'Comprehensive study of pollution sources and water quality parameters in urban river systems.',
      category: 'Water Resources Engineering',
      collaborators: ['NEERI Nagpur', 'State Pollution Control Board']
    },
    {
      title: 'BIM Implementation in Infrastructure Projects',
      pi: 'Dr. Meera Joshi',
      status: 'Ongoing',
      funding: '₹55 Lakhs',
      agency: 'AICTE',
      duration: '2023-2025',
      description: 'Framework development for Building Information Modeling implementation in large-scale infrastructure projects.',
      category: 'Construction Management',
      collaborators: ['Larsen & Toubro', 'Tata Projects']
    }
  ];

  const publications = [
    {
      title: 'Seismic Performance Assessment of RC Buildings with Masonry Infill Walls',
      authors: ['Dr. Rajesh Kumar Sharma', 'Dr. Rahul Verma', 'A. Student'],
      journal: 'Engineering Structures',
      year: 2024,
      impact: '4.2',
      citations: 15
    },
    {
      title: 'Sustainable Concrete Production Using Industrial Waste',
      authors: ['Dr. Meera Joshi', 'Dr. Vikram Agarwal'],
      journal: 'Construction and Building Materials',
      year: 2024,
      impact: '6.4',
      citations: 28
    },
    {
      title: 'Machine Learning Applications in Geotechnical Site Characterization',
      authors: ['Dr. Priya Menon', 'Dr. Kavita Rao'],
      journal: 'Computers and Geotechnics',
      year: 2023,
      impact: '4.9',
      citations: 42
    },
    {
      title: 'Traffic Flow Optimization Using AI-Based Signal Control',
      authors: ['Dr. Amit Singh', 'Research Scholar'],
      journal: 'Transportation Research Part C',
      year: 2023,
      impact: '7.8',
      citations: 33
    }
  ];

  const labs = [
    {
      name: 'Advanced Structural Engineering Laboratory',
      head: 'Dr. Rajesh Kumar Sharma',
      area: '500 sq.m',
      equipment: ['Universal Testing Machine (2000 kN)', 'Shake Table', 'Data Acquisition Systems', 'Non-destructive Testing Equipment'],
      research: ['Seismic Testing', 'Material Characterization', 'Structural Health Monitoring'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Geotechnical Engineering Laboratory',
      head: 'Dr. Priya Menon',
      area: '400 sq.m',
      equipment: ['Triaxial Testing System', 'Direct Shear Apparatus', 'Consolidation Testing Equipment', 'Dynamic Compaction Equipment'],
      research: ['Soil Mechanics', 'Foundation Engineering', 'Ground Improvement'],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Transportation Engineering Laboratory',
      head: 'Dr. Amit Singh',
      area: '350 sq.m',
      equipment: ['Marshall Stability Apparatus', 'Traffic Simulation Software', 'Pavement Testing Equipment', 'GPS Survey Equipment'],
      research: ['Pavement Engineering', 'Traffic Analysis', 'Transportation Planning'],
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Environmental Engineering Laboratory',
      head: 'Dr. Vikram Agarwal',
      area: '300 sq.m',
      equipment: ['Spectrophotometer', 'BOD Incubator', 'Water Quality Analyzers', 'Air Quality Monitoring System'],
      research: ['Water Treatment', 'Air Pollution Control', 'Waste Management'],
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];
  // ... (End of existing data)

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.pi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper component for advanced card style (Glassmorphism)
  const GlassCard = ({ children, className = '' }) => (
    <div
      className={`backdrop-blur-sm bg-white/50 border border-white/30 rounded-xl shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(30, 64, 175, 0.95), rgba(59, 130, 246, 0.8)), url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' // Diagonal bottom cut
          }}
        >
          {/* Animated background element */}
          <div className="absolute inset-0 opacity-10 animate-pulse bg-white/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div className="text-white pt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
              Research & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl leading-relaxed animate-fadeInUp delay-200">
              Advancing the frontiers of civil engineering through **innovative research** and **cutting-edge technology** across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas - Advanced Card Layout */}
      <section className="py-20 -mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] group transform hover:rotate-1" // 3D/Interactive Effect
              >
                <div className="text-center">
                  <div className={`bg-white shadow-xl ${area.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-100 group-hover:border-amber-500 transition-colors duration-300`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">{area.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{area.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500 border-t pt-3 mt-4">
                    <div className="flex items-center font-medium text-blue-700">
                      <Target className="h-4 w-4 mr-1" />
                      <span>{area.projects} Projects</span>
                    </div>
                    <div className="flex items-center font-medium text-gray-700">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{area.faculty} Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sticky Tab Navigation and Search Bar */}
      <div className="sticky top-0 z-20 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
                {/* Tab Navigation */}
                <nav className="flex space-x-8 overflow-x-auto">
                {['projects', 'publications', 'laboratories'].map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-semibold text-lg capitalize transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab
                        ? 'border-blue-800 text-blue-800 scale-105'
                        : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
                    }`}
                    >
                    {tab}
                    </button>
                ))}
                </nav>
                
                {/* Search Bar (Only visible for Projects tab) */}
                {activeTab === 'projects' && (
                    <div className="flex-none w-full md:w-96 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300"
                        />
                    </div>
                )}
            </div>
        </div>
      </div>


      {/* Tab Content - Utilizing GlassCard for a modern look */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid gap-8">
              {filteredProjects.map((project, index) => (
                <GlassCard key={index} className="p-8 hover:shadow-2xl hover:bg-white/70">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-extrabold text-gray-900 flex-1 hover:text-blue-700 transition-colors">{project.title}</h3>
                          <span className={`px-4 py-1 rounded-full text-sm font-bold ml-4 whitespace-nowrap shadow-md ${
                            project.status === 'Ongoing' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-blue-800 text-white'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-3 font-medium">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-blue-800" />
                            <span>PI: {project.pi}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-800" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center text-amber-600 font-bold">
                            <Award className="h-4 w-4 mr-2" />
                            <span>{project.funding}</span>
                            <span className="ml-1 text-gray-500 font-normal">({project.agency})</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4 border-l-4 border-blue-500 pl-3">{project.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold shadow-md">
                            {project.category}
                          </span>
                          {project.collaborators && (
                            <div className="flex items-center text-sm text-gray-600 font-medium">
                              <span className="mr-2 text-gray-900">Partners:</span>
                              <span className="text-blue-700">{project.collaborators.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                </GlassCard>
              ))}
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <div>
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Recent Publications</h3>
                <p className="text-lg text-gray-600">High-impact research showcased in top international journals</p>
              </div>

              <div className="grid gap-6">
                {publications.map((pub, index) => (
                  <GlassCard key={index} className="p-6 hover:shadow-xl hover:bg-white/70">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      <span className="font-semibold text-gray-900">Authors:</span> {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 border-t border-gray-200 pt-3">
                      <div className="font-bold text-blue-800 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {pub.journal} ({pub.year})
                      </div>
                      <div className="flex items-center text-amber-600 font-semibold">
                        <Award className="h-4 w-4 mr-1" />
                        <span>Impact Factor: {pub.impact}</span>
                      </div>
                      <div className="flex items-center text-green-600 font-semibold">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span>Citations: {pub.citations}</span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* Laboratories Tab */}
          {activeTab === 'laboratories' && (
            <div>
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Research Laboratories</h3>
                <p className="text-lg text-gray-600">State-of-the-art facilities supporting cutting-edge research</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {labs.map((lab, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <img
                      src={lab.image}
                      alt={lab.name}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-6 bg-white">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 border-b-2 border-amber-500 inline-block pb-1">{lab.name}</h4>
                      <div className="flex items-center text-gray-700 mb-3 text-sm">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        <span className='font-medium'>Head:</span> {lab.head}
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-bold text-gray-900 mb-2 text-sm">Key Equipment</h5>
                        <div className="flex flex-wrap gap-2">
                          {lab.equipment.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                            >
                              {item}
                            </span>
                          ))}
                          {lab.equipment.length > 3 && (
                            <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full font-medium">
                              +{lab.equipment.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2 text-sm">Research Areas</h5>
                        <div className="flex flex-wrap gap-2">
                          {lab.research.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Research Stats - Use better colors/contrast */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Research Impact</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our research achievements and contributions to the scientific community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2 animate-bounceIn">50+</div>
              <div className="text-blue-100 font-semibold text-lg">Active Projects</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">₹15 Cr</div>
              <div className="text-blue-100 font-semibold text-lg">Research Funding</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">200+</div>
              <div className="text-blue-100 font-semibold text-lg">Publications</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">25+</div>
              <div className="text-blue-100 font-semibold text-lg">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;