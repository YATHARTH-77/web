import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, Search, Target, Briefcase } from 'lucide-react';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const faculty = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      designation: 'Professor & Head of Department',
      specialization: 'Structural Engineering',
      education: 'Ph.D. (IIT Delhi), M.Tech (IIT Bombay), B.Tech (NIT Kurukshetra)',
      experience: '25 years',
      email: 'rajesh.sharma@iiti.ac.in',
      phone: '+91-731-2438-701',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Earthquake Engineering', 'Structural Dynamics', 'Reinforced Concrete Structures'],
      publications: 85,
      projects: 12
    },
    {
      name: 'Dr. Priya Menon',
      designation: 'Professor',
      specialization: 'Geotechnical Engineering',
      education: 'Ph.D. (IISc Bangalore), M.Tech (IIT Madras), B.Tech (NIT Calicut)',
      experience: '22 years',
      email: 'priya.menon@iiti.ac.in',
      phone: '+91-731-2438-702',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Soil Dynamics', 'Foundation Engineering', 'Ground Improvement'],
      publications: 72,
      projects: 8
    },
    {
      name: 'Dr. Amit Singh',
      designation: 'Associate Professor',
      specialization: 'Transportation Engineering',
      education: 'Ph.D. (IIT Kharagpur), M.Tech (IIT Delhi), B.Tech (MNIT Jaipur)',
      experience: '18 years',
      email: 'amit.singh@iiti.ac.in',
      phone: '+91-731-2438-703',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Traffic Engineering', 'Pavement Design', 'Intelligent Transportation Systems'],
      publications: 64,
      projects: 10
    },
    {
      name: 'Dr. Sneha Patel',
      designation: 'Associate Professor',
      specialization: 'Water Resources Engineering',
      education: 'Ph.D. (IIT Roorkee), M.Tech (IIT Bombay), B.Tech (SVNIT Surat)',
      experience: '16 years',
      email: 'sneha.patel@iiti.ac.in',
      phone: '+91-731-2438-704',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Hydrology', 'Water Quality Management', 'Groundwater Modeling'],
      publications: 56,
      projects: 7
    },
    {
      name: 'Dr. Vikram Agarwal',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Dr. Meera Joshi',
      designation: 'Assistant Professor',
      specialization: 'Construction Management',
      education: 'Ph.D. (IIT Bombay), M.Tech (VNIT Nagpur), B.Tech (COEP Pune)',
      experience: '12 years',
      email: 'meera.joshi@iiti.ac.in',
      phone: '+91-731-2438-706',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Project Management', 'Sustainable Construction', 'Building Information Modeling'],
      publications: 42,
      projects: 5
    },
    {
      name: 'Dr. Rahul Verma',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: 'Ph.D. (IIT Madras), M.Tech (IIT Roorkee), B.Tech (MNNIT Allahabad)',
      experience: '10 years',
      email: 'rahul.verma@iiti.ac.in',
      phone: '+91-731-2438-707',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Steel Structures', 'Composite Materials', 'Structural Health Monitoring'],
      publications: 38,
      projects: 4
    },
    {
      name: 'Dr. Kavita Rao',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: 'Ph.D. (IIT Kharagpur), M.Tech (NIT Surathkal), B.Tech (NITK Surathkal)',
      experience: '8 years',
      email: 'kavita.rao@iiti.ac.in',
      phone: '+91-731-2438-708',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      research: ['Rock Mechanics', 'Slope Stability', 'Geosynthetics'],
      publications: 32,
      projects: 3
    }
  ];

  const specializations = ['All', 'Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources Engineering', 'Environmental Engineering', 'Construction Management'];

  const filteredFaculty = faculty.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.research.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialization = selectedSpecialization === 'All' || member.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Diagonal Cut */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)', // Diagonal bottom cut
                opacity: 0.1
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Our Distinguished Faculty</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Meet our experts who are leaders, researchers, and mentors shaping the field of Civil Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter - Elegant Sticky Bar */}
      <section className="sticky top-0 z-20 bg-white shadow-lg py-6 border-b border-gray-200 -mt-16 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search faculty by name, specialization, or research area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 border border-gray-300 rounded-full bg-gray-50 focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Filter */}
            <div className="md:w-64 relative">
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full py-3 px-6 border border-gray-300 rounded-full bg-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 appearance-none shadow-md"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid - Interactive Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden border-t-8 border-blue-800/0 hover:border-blue-800 transform hover:-translate-y-1 group"
                >
                  <div className="p-8">
                    {/* Photo and Basic Info */}
                    <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-amber-200 flex-shrink-0 mr-4 group-hover:border-amber-500 transition-colors duration-300 shadow-md"
                      />
                      <div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-800 font-semibold mb-2 text-sm">{member.designation}</p>
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-semibold shadow-sm">
                          {member.specialization}
                        </span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                        Education
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed italic">{member.education}</p>
                    </div>

                    {/* Research Areas */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Research Focus</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.research.map((area, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center mb-6 py-4 bg-gray-100 rounded-xl border border-gray-200">
                      <div>
                        <div className="text-xl font-extrabold text-blue-800">{member.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                      <div>
                        <div className="text-xl font-extrabold text-amber-600">{member.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-xl font-extrabold text-green-600">{member.experience}</div>
                        <div className="text-xs text-gray-600">Experience</div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3 text-sm pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-700">
                        <Mail className="h-4 w-4 mr-3 text-blue-600" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="hover:text-blue-800 font-medium transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="h-4 w-4 mr-3 text-blue-600" />
                        <span className="font-medium">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Department Stats - High Contrast */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Faculty Excellence</h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Our faculty's collective achievements and contributions to the field.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">25+</div>
              <div className="text-blue-100 font-semibold">Faculty Members</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">500+</div>
              <div className="text-blue-100 font-semibold">Research Papers</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">50+</div>
              <div className="text-blue-100 font-semibold">Active Projects</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="text-5xl font-extrabold text-amber-400 mb-2">15+</div>
              <div className="text-blue-100 font-semibold">Years Average Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;