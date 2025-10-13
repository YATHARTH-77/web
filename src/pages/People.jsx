import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, Search, GraduationCap, Building, User } from 'lucide-react';

const People = () => {
  const [activeTab, setActiveTab] = useState('faculty');
  const [searchTerm, setSearchTerm] = useState('');

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
    }
  ];

  const staff = [
    {
      name: 'Ms. Sunita Sharma',
      designation: 'Administrative Officer',
      department: 'Administration',
      experience: '15 years',
      email: 'sunita.sharma@iiti.ac.in',
      phone: '+91-731-2438-710',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Student Affairs', 'Academic Administration', 'Event Coordination']
    },
    {
      name: 'Mr. Ramesh Kumar',
      designation: 'Technical Officer',
      department: 'Laboratory Management',
      experience: '20 years',
      email: 'ramesh.kumar@iiti.ac.in',
      phone: '+91-731-2438-711',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Equipment Maintenance', 'Lab Safety', 'Technical Support']
    },
    {
      name: 'Ms. Kavita Rao',
      designation: 'Lab Assistant',
      department: 'Structural Engineering Lab',
      experience: '8 years',
      email: 'kavita.rao@iiti.ac.in',
      phone: '+91-731-2438-712',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Lab Assistance', 'Student Support', 'Equipment Operation']
    },
    {
      name: 'Mr. Suresh Patel',
      designation: 'Lab Technician',
      department: 'Geotechnical Engineering Lab',
      experience: '12 years',
      email: 'suresh.patel@iiti.ac.in',
      phone: '+91-731-2438-713',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      responsibilities: ['Soil Testing', 'Equipment Calibration', 'Data Collection']
    }
  ];

  const phdStudents = [
    {
      name: 'Arjun Mehta',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Priyanka Singh',
      year: '3rd Year',
      supervisor: 'Dr. Priya Menon',
      specialization: 'Geotechnical Engineering',
      thesis: 'Ground Improvement Techniques for Soft Clay Deposits',
      email: 'priyanka.singh@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      publications: 5,
      conferences: 8
    },
    {
      name: 'Rohit Sharma',
      year: '2nd Year',
      supervisor: 'Dr. Amit Singh',
      specialization: 'Transportation Engineering',
      thesis: 'Smart Traffic Management Systems for Urban Areas',
      email: 'rohit.sharma@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      publications: 3,
      conferences: 5
    },
    {
      name: 'Anita Gupta',
      year: '3rd Year',
      supervisor: 'Dr. Sneha Patel',
      specialization: 'Water Resources Engineering',
      thesis: 'Climate Change Impact on Water Resources Management',
      email: 'anita.gupta@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      publications: 6,
      conferences: 9
    },
    {
      name: 'Vikash Kumar',
      year: '1st Year',
      supervisor: 'Dr. Vikram Agarwal',
      specialization: 'Environmental Engineering',
      thesis: 'Advanced Wastewater Treatment Technologies',
      email: 'vikash.kumar@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      publications: 2,
      conferences: 3
    }
  ];

  const mtechStudents = [
    {
      name: 'Rahul Verma',
      year: '2nd Year',
      specialization: 'Structural Engineering',
      project: 'Design of Steel-Concrete Composite Structures',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      email: 'rahul.verma@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.9'
    },
    {
      name: 'Neha Agarwal',
      year: '1st Year',
      specialization: 'Geotechnical Engineering',
      project: 'Slope Stability Analysis using Numerical Methods',
      supervisor: 'Dr. Priya Menon',
      email: 'neha.agarwal@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '9.2'
    },
    {
      name: 'Amit Patel',
      year: '2nd Year',
      specialization: 'Transportation Engineering',
      project: 'Traffic Flow Optimization using AI Techniques',
      supervisor: 'Dr. Amit Singh',
      email: 'amit.patel@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.7'
    },
    {
      name: 'Pooja Sharma',
      year: '1st Year',
      specialization: 'Water Resources Engineering',
      project: 'Flood Modeling and Risk Assessment',
      supervisor: 'Dr. Sneha Patel',
      email: 'pooja.sharma@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '9.0'
    }
  ];

  const btechStudents = [
    {
      name: 'Karan Singh',
      year: '4th Year',
      rollNo: 'CE19B001',
      specialization: 'Structural Engineering',
      project: 'Seismic Analysis of Multi-Story Buildings',
      email: 'karan.singh@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.5'
    },
    {
      name: 'Shreya Gupta',
      year: '3rd Year',
      rollNo: 'CE20B015',
      specialization: 'Environmental Engineering',
      project: 'Water Quality Assessment of Local Rivers',
      email: 'shreya.gupta@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '9.1'
    },
    {
      name: 'Rajesh Kumar',
      year: '4th Year',
      rollNo: 'CE19B025',
      specialization: 'Transportation Engineering',
      project: 'Highway Design and Traffic Management',
      email: 'rajesh.kumar@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.3'
    },
    {
      name: 'Priya Jain',
      year: '2nd Year',
      rollNo: 'CE21B008',
      specialization: 'Geotechnical Engineering',
      project: 'Soil Mechanics Laboratory Studies',
      email: 'priya.jain@iiti.ac.in',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.8'
    },
    {
      name: 'Aryan Sharma',
      year: '1st Year',
      rollNo: 'CE22B012',
      specialization: 'General',
      project: 'Basic Engineering Drawing and Design',
      email: 'aryan.sharma@iiti.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      cgpa: '8.9'
    }
  ];

  const tabs = [
    { id: 'faculty', label: 'Faculty', icon: Award, count: faculty.length },
    { id: 'staff', label: 'Staff', icon: Building, count: staff.length },
    { id: 'phd', label: 'Ph.D. Students', icon: GraduationCap, count: phdStudents.length },
    { id: 'mtech', label: 'M.Tech Students', icon: BookOpen, count: mtechStudents.length },
    { id: 'btech', label: 'B.Tech Students', icon: User, count: btechStudents.length }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'faculty': return faculty;
      case 'staff': return staff;
      case 'phd': return phdStudents;
      case 'mtech': return mtechStudents;
      case 'btech': return btechStudents;
      default: return faculty;
    }
  };

  const filterData = (data) => {
    return data.filter(person => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (person.specialization && person.specialization.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (person.designation && person.designation.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const renderFacultyCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className="p-6">
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

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
            Education
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">{member.education}</p>
        </div>

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
  );

  const renderStaffCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <div className="text-center mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
          />
          <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-green-700 font-medium mb-1">{member.designation}</p>
          <p className="text-gray-600 text-sm">{member.department}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
          <div className="space-y-1">
            {member.responsibilities.map((resp, idx) => (
              <div key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-green-600" />
            <a 
              href={`mailto:${member.email}`}
              className="hover:text-green-800 transition-colors"
            >
              {member.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-green-600" />
            <span>{member.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Award className="h-4 w-4 mr-2 text-green-600" />
            <span>{member.experience} Experience</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudentCard = (student, index, type) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <div className="text-center mb-4">
          <img
            src={student.image}
            alt={student.name}
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-4 border-purple-100"
          />
          <h3 className="text-lg font-bold text-gray-900 mb-1">{student.name}</h3>
          <p className="text-purple-700 font-medium text-sm">{student.year}</p>
          {student.rollNo && (
            <p className="text-gray-500 text-xs">{student.rollNo}</p>
          )}
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
            <span className="font-medium">Specialization:</span>
            <span className="ml-1">{student.specialization}</span>
          </div>
          
          {type === 'phd' && (
            <>
              <div className="flex items-start text-gray-600">
                <Award className="h-4 w-4 mr-2 text-purple-600 mt-0.5" />
                <div>
                  <span className="font-medium">Thesis:</span>
                  <p className="text-xs mt-1">{student.thesis}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2 text-purple-600" />
                <span className="font-medium">Supervisor:</span>
                <span className="ml-1 text-xs">{student.supervisor}</span>
              </div>
              <div className="flex justify-between text-center py-2 bg-purple-50 rounded">
                <div>
                  <div className="font-bold text-purple-800">{student.publications}</div>
                  <div className="text-xs text-gray-600">Publications</div>
                </div>
                <div>
                  <div className="font-bold text-purple-800">{student.conferences}</div>
                  <div className="text-xs text-gray-600">Conferences</div>
                </div>
              </div>
            </>
          )}

          {(type === 'mtech' || type === 'btech') && (
            <>
              <div className="flex items-start text-gray-600">
                <Award className="h-4 w-4 mr-2 text-purple-600 mt-0.5" />
                <div>
                  <span className="font-medium">Project:</span>
                  <p className="text-xs mt-1">{student.project}</p>
                </div>
              </div>
              {student.supervisor && (
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-purple-600" />
                  <span className="font-medium">Supervisor:</span>
                  <span className="ml-1 text-xs">{student.supervisor}</span>
                </div>
              )}
              <div className="text-center py-2 bg-purple-50 rounded">
                <div className="font-bold text-purple-800">{student.cgpa}</div>
                <div className="text-xs text-gray-600">CGPA</div>
              </div>
            </>
          )}

          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-purple-600" />
            <a 
              href={`mailto:${student.email}`}
              className="hover:text-purple-800 transition-colors text-xs"
            >
              {student.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const currentData = getCurrentData();
  const filteredData = filterData(currentData);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our People</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated faculty, staff, and students who make up our vibrant academic community
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search people by name, specialization, or designation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-800 border border-gray-200'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white text-blue-800' : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No people found matching your criteria.</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              activeTab === 'faculty' ? 'md:grid-cols-2 lg:grid-cols-3' :
              activeTab === 'staff' ? 'md:grid-cols-2 lg:grid-cols-3' :
              'md:grid-cols-2 lg:grid-cols-4'
            }`}>
              {filteredData.map((person, index) => {
                if (activeTab === 'faculty') {
                  return renderFacultyCard(person, index);
                } else if (activeTab === 'staff') {
                  return renderStaffCard(person, index);
                } else {
                  return renderStudentCard(person, index, activeTab);
                }
              })}
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Community</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A diverse and dynamic community of learners, researchers, and professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{faculty.length}</div>
              <div className="text-blue-100 font-medium">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{staff.length}</div>
              <div className="text-blue-100 font-medium">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{phdStudents.length}</div>
              <div className="text-blue-100 font-medium">Ph.D. Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{mtechStudents.length}</div>
              <div className="text-blue-100 font-medium">M.Tech Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">200+</div>
              <div className="text-blue-100 font-medium">B.Tech Students</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;