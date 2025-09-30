import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, Search } from 'lucide-react';

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet our distinguished faculty members who are leaders in their respective fields
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search faculty by name, specialization, or research area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="md:w-64">
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
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
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="p-6">
                    {/* Photo and Basic Info */}
                    <div className="text-center mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 group-hover:border-amber-200 transition-colors duration-300"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-800 font-medium mb-2">{member.designation}</p>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                        {member.specialization}
                      </span>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                        Education
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{member.education}</p>
                    </div>

                    {/* Research Areas */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Research Areas</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.research.map((area, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-center mb-4 py-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-lg font-bold text-blue-800">{member.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-amber-600">{member.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{member.experience}</div>
                        <div className="text-xs text-gray-600">Experience</div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="hover:text-blue-800 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Department Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Faculty Excellence</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our faculty's collective achievements and contributions to the field
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">25+</div>
              <div className="text-blue-100 font-medium">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-blue-100 font-medium">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-blue-100 font-medium">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
              <div className="text-blue-100 font-medium">Years Average Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;