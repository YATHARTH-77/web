import React, { useState } from 'react';
import { Mail, Phone, Award, BookOpen, Users, Search, GraduationCap, Building, User, Link as LinkIcon, Download, MapPin, ExternalLink } from 'lucide-react'; // Added ExternalLink

const People = () => {
  const [activeTab, setActiveTab] = useState('regularFaculty');
  const [searchTerm, setSearchTerm] = useState('');
  // --- NEW: State for faculty specialization filter ---
  const [specializationFilter, setSpecializationFilter] = useState('All');

  // --- Faculty Data (with Room Numbers Added) ---
  const regularFaculty = [
    {
      name: 'Dr. Gourab Sil',
      designation: 'Assistant Professor & Head of Department',
      specialization: 'Transportation Engineering',
      education: '', // Data not available on site
      experience: '', // Data not available on site
      email: 'hodce@iiti.ac.in',
      phone: '0731-660 3360',
      room: '405, POD 1D, Chromium', // Added
      image: '../src/assets/faculty_pics/Gourab.jpg', // Placeholder image path
      research: [
        'Performance Based Geometric Design of Highways',
        'Safety of Roadway Infrastructure',
        'Effects of Highway Infrastructure on Driver Behavior',
        'Applications of Statistical Analysis in Transportation Engineering',
        'Traffic Engineering',
      ],
      publications: 0, // Data not available on site
      projects: 0, // Data not available on site
    },
    {
      name: 'Dr. Sandeep Chaudhary',
      designation: 'Professor (HAG)',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'schaudhary@iiti.ac.in',
      phone: '0731-660 3256/3469',
      room: '403, Chromium Building', // Added
      image: '../src/assets/faculty_pics/Sandeep Choudhary.png', // Placeholder image path
      research: [
        'Structural Engineering',
        'Sustainable Construction Practices',
        'Composite Bridges',
        'Novel Bricks and Blocks',
        'Microstructure and Durability of Concrete',
        'Advanced Characterisation Techniques',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Neelima Satyam D',
      designation: 'Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'neelima.satyam@iiti.ac.in',
      phone: '0731-660 3290',
      room: '418, Chromium Building', // Added
      image: '../src/assets/faculty_pics/neelima_satyam_orig.jpg', // Placeholder image path
      research: [
        'Geotechnical Earthquake Engineering',
        'Dynamic Soil Structure Interaction Analysis',
        'Liquefaction Hazard and Mitigation',
        'Environmental Geotechnics',
        'Landslide Research',
        'Rock Mechanics and Underground Structures',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Manish Kumar Goyal',
      designation: 'Professor (Chair Professor- BIS Standardization)',
      specialization: 'Water Resources Engineering',
      education: '',
      experience: '',
      email: 'mkgoyal@iiti.ac.in',
      phone: '0731-660 3288',
      room: '209, Pod 1A', // Added
      image: '../src/assets/faculty_pics/mkgoyal.jpg', // Placeholder image path
      research: [
        'Resilience of River Basins and Hydrological Modeling',
        'Hydro-climatology and Statistical Downscaling',
        'Irrigation Management and Crop Modeling Applications',
        'Multivariate Statistical Analysis, Machine Learning Models and Data Mining',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Lalit Borana',
      designation: 'Associate Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'lalitborana@iiti.ac.in',
      phone: '0731-660 3332',
      room: '407, Pod 1D', // Added
      image: '../src/assets/faculty_pics/Lalit_Borana.jpg', // Placeholder image path
      research: [
        'Unsaturated Soil Mechanics',
        'Geotechnical health monitoring',
        'Soil-Structure Interaction',
        'Soft Soil and Creep',
        'Ground Improvement Technics',
        'Environmental Geotechnics',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Abhishek Rajput',
      designation: 'Associate Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'abhishekrajput@iiti.ac.in',
      phone: '0731-660 3310',
      room: '616, POD 1D', // Added
      image: '../src/assets/faculty_pics/abhishekrajput.jpg', // Placeholder image path
      research: [
        'Behavior of concrete and metals under projectile impact and blast loading',
        'Finite element modelling and simulations',
        'Large deformations of concrete at low, medium and high strain rates',
        'Structural crash-worthiness',
        'Influence of corrosion on the mechanical properties of structural steel',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Kaustav Bakshi',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'kaustav.bakshi@iiti.ac.in',
      phone: '0731-660 3233',
      room: '102, Pod 1C', // Added
      image: '../src/assets/faculty_pics/Kaustav.png', // Placeholder image path
      research: [
        'Static and dynamic studies on laminated composite shell roofs',
        'First and progressive ply failure studies',
        'Finite element method; Geometric nonlinearity',
        'Hygrothermal analysis of laminated composites',
        'Shear deformations in laminated composites',
        'Nonlinear buckling analysis',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Guru Prakash',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'guruprakash@iiti.ac.in',
      phone: '0731-660 3215',
      room: '', // Added (Not specified on site)
      image: '../src/assets/faculty_pics/GuruFinal.jpg', // Placeholder image path
      research: [
        'Stochastic degradation modeling using condition monitoring data',
        'Bayesian reliability assessment',
        'Damage detection and prognosis',
        'Fatigue reliability',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Priyansh Singh',
      designation: 'Assistant Professor',
      specialization: 'Transportation Engineering',
      education: '',
      experience: '',
      email: 'priyansh@iiti.ac.in',
      phone: '0731-660 3362',
      room: '311, POD 1D, Chromium', // Added
      image: '../src/assets/faculty_pics/Priyansh.jpg', // Placeholder image path
      research: [
        'Pavement Materials Characterization and Modeling',
        'Pavement Design, Construction and Evaluation',
        'Pavement Recycling',
        'Innovative Materials and Technologies in Pavement Engineering',
        'Rheology',
        'Maintenance and Rehabilitation of Pavements',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Ashootosh Mandpe',
      designation: 'Assistant Professor',
      specialization: 'Environmental Engineering',
      education: '',
      experience: '',
      email: 'as_mandpe@iiti.ac.in',
      phone: '0731-660 3257',
      room: '316, POD 1D, Chromium', // Added
      image: '../src/assets/faculty_pics/Ashootosh Passport_Dark Background.JPG', // Placeholder image path
      research: [
        'Bio-valorization of solid wastes',
        'Municipal landfill remediation through biomining approaches',
        'Advanced wastewater treatment technologies',
        'Circular economy practices',
        'Lifecycle and Social lifecycle assessment of environmental systems',
        'Geospatial technologies for integrated waste management',
        'Remediation of persistent organic pollutants',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Priyank J. Sharma',
      designation: 'Assistant Professor',
      specialization: 'Water Resources Engineering',
      education: '',
      experience: '',
      email: 'priyanksharma@iiti.ac.in',
      phone: '0731-660 3382',
      room: '422, Pod-1D, Chromium', // Added
      image: '../src/assets/faculty_pics/Dr. Priyank J Sharma.jpg', // Placeholder image path
      research: [
        'Hydroclimatology and Climate Extremes',
        'Climate Change Impact on Water Resources',
        'Hydroinformatics',
        'Improving Hydrologic Predictions using AI/ML',
        'Hydrological and Flood Modelling',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Mayur Shirish Jain',
      designation: 'Assistant Professor',
      specialization: 'Environmental Engineering',
      education: '',
      experience: '',
      email: 'mayur.jain@iiti.ac.in',
      phone: '0731-660 3384',
      room: '605, POD 1A, Silicon', // Added
      image: '../src/assets/faculty_pics/M S JAIN.jpg', // Placeholder image path
      research: [
        'Rapid Composting Techniques',
        'Kinetic modelling of Bio-waste degradation',
        'Circular economy in environmental engineering',
        'Soil Revitalization via waste utilization',
        'C&D Waste quantification and environmental risks',
        'Techno-economic and sustainability assessment',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Akshay Pratap Singh',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'apsingh@iiti.ac.in',
      phone: '+91-9454208610',
      room: '402, POD-1C', // Added
      image: '../src/assets/faculty_pics/Dr. Akshay Photo.JPG', // Placeholder image path
      research: [
        'Numerical Modeling in Geomechanics',
        'Analysis of Slopes, Retaining walls, Sheet Piles, Shallow Foundations, Pile Foundations',
        'Lower and Upper Bound Methods in Limit Analysis',
        'Geotechnical Earthquake Engineering',
        'Liquefaction',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Baadiga Ramu',
      designation: 'Assistant Professor',
      specialization: 'Geotechnical Engineering',
      education: '',
      experience: '',
      email: 'baadigaramu@iiti.ac.in',
      phone: '+91-7675015763',
      room: '', // Added (Not specified on site)
      image: '../src/assets/faculty_pics/Dr Baadiga Ramu.jpg', // Placeholder image path
      research: [
        'Geosynthetic Engineering',
        'Pavement Geotechnics',
        'Ground Improvement',
        'Geotechnical Engineering',
        'AI-ML for Geotechnical Engineering',
        'Nature Inspired Geotechnics',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Ravinder',
      designation: 'Assistant Professor',
      specialization: 'Structural Engineering',
      education: '',
      experience: '',
      email: 'ravinder@iiti.ac.in',
      phone: '', // Data not available on site
      room: '403, POD-1C', // Added
      image: '../src/assets/faculty_pics/ravinder.png', // Placeholder image path
      research: [
        'Structural Health Monitoring',
        'Ballistic Impact and Fracture Simulations',
        'Finite Element Modelling and Simulations',
        'Generative Structural Design Using ML',
        'System Identification',
        'ML/AI for Structural Engineering',
      ],
      publications: 0,
      projects: 0,
    },
    {
      name: 'Dr. Pushpa Choudhary',
      designation: 'Assistant Professor',
      specialization: 'Transportation Engineering',
      education: '',
      experience: '',
      email: 'pushpa@iiti.ac.in',
      phone: '', // Data not available on site
      room: 'POD-1C', // Added
      image: '../src/assets/faculty_pics/Pushpa.jpg', // Placeholder image path
      research: [
        'Human factors in road safety',
        'Vulnerable road users\' behaviour and safety',
        'Intelligent transportation systems',
        'Naturalistic and VR studies',
        'Risk assessment and statistical modelling',
      ],
      publications: 0,
      projects: 0,
    },
  ];

  // --- NEW: Get unique specializations for filter buttons ---
  const specializations = ['All', ...new Set(regularFaculty.map(f => f.specialization))];

  // --- Staff Data ---
  const staff = [
    {
      name: 'Ms. Rinki Seth',
      designation: 'Senior Assistant',
      department: 'Administration',
      experience: '', // Data not available on site
      email: 'rinki@iiti.ac.in',
      phone: '+91-731-660 (Ext. No. 3477)',
      image: '../src/assets/staff pics/Rinki.jpg', // Placeholder image path
      responsibilities: [], // Data not available on site
    },
    {
      name: 'Mr. Amit Jadhav',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'jadhavamit@iiti.ac.in',
      phone: '+91-731-660 (Ext. No. 3411)',
      image: '../src/assets/staff pics/Amit.jpg', // Placeholder image path
      responsibilities: [],
    },
    {
      name: 'Mr. Ajay Malviya',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'amalviya@iiti.ac.in',
      phone: '+91-731-660 (Ext. No. 3412)',
      image: '../src/assets/staff pics/Ajay.jpg', // Placeholder image path
      responsibilities: [],
    },
    {
      name: 'Mr. Pankaj Sankhla',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'sankhlapankaj@iiti.ac.in',
      phone: '', // Data not available on site
      image: '../src/assets/staff pics/Pankaj.jpg', // Placeholder image path
      responsibilities: [],
    },
    {
      name: 'Mr. Ghanshyam Kachneriya',
      designation: 'Junior Assistant (Lab)',
      department: 'Laboratory Management',
      experience: '',
      email: 'gkachneriya@iiti.ac.in',
      phone: '+91-731-660 (Ext. No. 5591)',
      image: '../src/assets/staff pics/Ghanshyam.jpg', // Placeholder image path
      responsibilities: [],
    },
    {
      name: 'Mr. Awadhesh Verma',
      designation: 'Office Attendant',
      department: 'Administration',
      experience: '',
      email: 'avadeshv@iiti.ac.in',
      phone: '', // Data not available on site
      image: '../src/assets/staff pics/Awadhesh.jpg', // Placeholder image path
      responsibilities: [],
    },
  ];

  // --- Student Data ---
  const phdStudents = [
    { name: 'Aadarsh Singh', image: '../src/assets/stu_images/phd/Aadarsh Singh.jpg' },
    { name: 'Achala Singh', image: '../src/assets/stu_images/phd/Achala Singh (PhD).jpg' },
    { name: 'Akash Paradkar', image: '../src/assets/stu_images/phd/Akash Paradkar(PhD).jpg' },
    { name: 'Akshay', image: '../src/assets/stu_images/phd/Akshay.jpg' },
    { name: 'Alok Sharma', image: '../src/assets/stu_images/phd/Alok Sharma (PhD).jpg' },
    { name: 'Anshul', image: '../src/assets/stu_images/phd/Anshul.jpg' },
    { name: 'Arpita', image: '../src/assets/stu_images/phd/Arpita.jpg' },
    { name: 'ASTHA SHARMA', image: '../src/assets/stu_images/phd/ASTHA SHARMA (PhD).jpg' },
    { name: 'astha', image: '../src/assets/stu_images/phd/astha.jpg' },
    { name: 'Bodhanam', image: '../src/assets/stu_images/phd/Bodhanam.jpg' },
    { name: 'Deepak Mishra', image: '../src/assets/stu_images/phd/Deepak Mishra (PhD).jpg' },
    { name: 'Gaurav Sharma', image: '../src/assets/stu_images/phd/Gaurav Sharma(PhD).jpg' },
    { name: 'Ghulam Hussain', image: '../src/assets/stu_images/phd/Ghulam Hussain (PhD).jpg' },
    { name: 'Gourav Agrawal', image: '../src/assets/stu_images/phd/Gourav Agrawal (PhD).jpg' },
    { name: 'Gyanesh', image: '../src/assets/stu_images/phd/Gyanesh.jpg' },
    { name: 'Harshvardhan Solanki', image: '../src/assets/stu_images/phd/Harshvardhan Solanki (PhD).jpg' },
    { name: 'Himanshu', image: '../src/assets/stu_images/phd/Himanshu.jpg' },
    { name: 'Hussain', image: '../src/assets/stu_images/phd/Hussain.jpg' },
    { name: 'Jatin Garhekar', image: '../src/assets/stu_images/phd/Jatin Garhekar (PhD).jpg' },
    { name: 'Jitendra Mathankar', image: '../src/assets/stu_images/phd/Jitendra Mathankar (PhD).jpg' },
    { name: 'Kajol Kankane', image: '../src/assets/stu_images/phd/Kajol Kankane (PhD).jpg' },
    { name: 'Karnati', image: '../src/assets/stu_images/phd/Karnati.jpg' },
    { name: 'Kuldeep', image: '../src/assets/stu_images/phd/Kuldeep.jpg' },
    { name: 'Kunal', image: '../src/assets/stu_images/phd/Kunal.jpg' },
    { name: 'Kushal Patil', image: '../src/assets/stu_images/phd/Kushal Patil.jpg' },
    { name: 'Mahaveer Singh Dangi ', image: '../src/assets/stu_images/phd/Mahaveer Singh Dangi (PhD).jpg' },
    { name: 'Manish Yadav ', image: '../src/assets/stu_images/phd/Manish Yadav (PhD).jpg' },
    { name: 'Mayank Upadhyay', image: '../src/assets/stu_images/phd/Mayank Upadhyay.jpg' },
    { name: 'Meghna', image: '../src/assets/stu_images/phd/Meghna.jpg' },
    { name: 'Minu', image: '../src/assets/stu_images/phd/Minu.jpg' },
    { name: 'Mohd', image: '../src/assets/stu_images/phd/Mohd.jpg' },
    { name: 'Moirangthem', image: '../src/assets/stu_images/phd/Moirangthem.jpg' },
    { name: 'KMonika', image: '../src/assets/stu_images/phd/Monika.jpg' },
    { name: 'MUKUL', image: '../src/assets/stu_images/phd/MUKUL.jpg' },
    { name: 'Naveen Kumar', image: '../src/assets/stu_images/phd/Naveen Kumar (PhD).jpg' },
    { name: 'Nikhil Pandey', image: '../src/assets/stu_images/phd/Nikhil Pandey (PhD).jpg' },
    { name: 'Nikhil', image: '../src/assets/stu_images/phd/Nikhil.jpg' },
    { name: 'Nitin', image: '../src/assets/stu_images/phd/Nitin.jpg' },
    { name: 'Parul', image: '../src/assets/stu_images/phd/Parul.jpg' },
    { name: 'Revanth', image: '../src/assets/stu_images/phd/Revanth.jpg' },
    { name: 'Rohit Vyas', image: '../src/assets/stu_images/phd/Rohit Vyas(PhD).jpg' },
    { name: 'Rosa', image: '../src/assets/stu_images/phd/Rosa.jpg' },
    { name: 'Sachin', image: '../src/assets/stu_images/phd/Sachin.jpg' },
    { name: 'Saket', image: '../src/assets/stu_images/phd/SAKET.jpg' },
    { name: 'Sanchit', image: '../src/assets/stu_images/phd/Sanchit.jpg' },
    { name: 'Sarvjeet Singh', image: '../src/assets/stu_images/phd/Sarvjeet Singh (PhD).jpg' },
    { name: 'Sayak Chakravorty', image: '../src/assets/stu_images/phd/Sayak Chakravorty (PhD).jpg' },
    { name: 'Shivam', image: '../src/assets/stu_images/phd/Shivam.jpg' },
    { name: 'Shivukumar', image: '../src/assets/stu_images/phd/Shivukumar.jpg' },
    { name: 'Shubham More', image: '../src/assets/stu_images/phd/Shubham More (PhD).jpg' },
    { name: 'Shuddhashil', image: '../src/assets/stu_images/phd/Shuddhashil.jpg' },
    { name: 'Smriti', image: '../src/assets/stu_images/phd/Smriti.jpg' },
    { name: 'Srinidhi', image: '../src/assets/stu_images/phd/Srinidhi.jpg' },
    { name: 'Sugato Panda', image: '../src/assets/stu_images/phd/Sugato Panda (PhD).jpg' },
    { name: 'Sumedh Kishor Limaye', image: '../src/assets/stu_images/phd/Sumedh Kishor Limaye (PhD).jpg' },
    { name: 'Utkarsh Baranwal', image: '../src/assets/stu_images/phd/Utkarsh Baranwal (PhD).jpg' },
    { name: 'Veena N Bhajantri', image: '../src/assets/stu_images/phd/Veena N Bhajantri (PhD).jpg' },
    { name: 'Venkatesh', image: '../src/assets/stu_images/phd/Venkatesh.jpg' },
    { name: 'Vijay', image: '../src/assets/stu_images/phd/Vijay.jpg' },
    { name: 'Vikas Rawat', image: '../src/assets/stu_images/phd/Vikas Rawat(PhD).jpg' },
    { name: 'Vikas Sudam Gore', image: '../src/assets/stu_images/phd/Vikas Sudam Gore (PhD).jpg' },
    { name: 'Vikas', image: '../src/assets/stu_images/phd/Vikas.jpg' },
    { name: 'VINAY SHARMA', image: '../src/assets/stu_images/phd/VINAY SHARMA (PhD).jpg' },
    { name: 'Vivek', image: '../src/assets/stu_images/phd/Vivek.jpg' },
    { name: 'Waqar', image: '../src/assets/stu_images/phd/Waqar.jpg' },
  ];
  
  const mtechStudents = [
    { year: '2025 Batch', link: '../src/assets/student_lists/M.tech Student List 2025.pdf' },
    { year: '2024 Batch', link: '../src/assets/student_lists/M.tech Student List 2024.pdf' },
  ];
  
  const btechStudents = [
    { year: '2025 Batch', link: '../src/assets/student_lists/B.tech Student List 2025.pdf' },
    { year: '2024 Batch', link: '../src/assets/student_lists/B.tech Student List 2024.pdf' },
    { year: '2023 Batch', link: '../src/assets/student_lists/B.tech Student List 2023.pdf' },
    { year: '2022 Batch', link: '../src/assets/student_lists/B.tech Student List 2022.pdf' },
    { year: '2021 Batch', link: '../src/assets/student_lists/B.tech Student List 2021.pdf' },
  ];

  const tabs = [
    { id: 'regularFaculty', label: 'Faculty', icon: Award, count: regularFaculty.length },
    { id: 'staff', label: 'Staff', icon: Building, count: staff.length },
    { id: 'phd', label: 'Ph.D. Students', icon: GraduationCap, count: phdStudents.length },
    { id: 'mtech', label: 'M.Tech Students', icon: BookOpen, count: mtechStudents.length },
    { id: 'btech', label: 'B.Tech Students', icon: User, count: btechStudents.length }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'regularFaculty': return regularFaculty;
      case 'staff': return staff;
      case 'phd': return phdStudents;
      case 'mtech': return mtechStudents;
      case 'btech': return btechStudents;
      default: return regularFaculty;
    }
  };

  // --- UPDATED: filterData function ---
  const filterData = (data) => {
    // M.Tech and B.Tech tabs just show links, no filtering needed
    if (activeTab === 'mtech' || activeTab === 'btech') {
      return data;
    }

    // Ph.D. tab filters by name
    if (activeTab === 'phd') {
      return data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Staff tab filters by name or designation
    if (activeTab === 'staff') {
      return data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (person.designation && person.designation.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Faculty tab filters by specialization AND search term
    if (activeTab === 'regularFaculty') {
      const specializationFiltered = data.filter(person =>
        specializationFilter === 'All' || person.specialization === specializationFilter
      );
      
      return specializationFiltered.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (person.specialization && person.specialization.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (person.designation && person.designation.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return data; // Fallback
  };

  // --- Render Functions ---

  const renderFacultyCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className="p-6">
        <div className="flex items-start space-x-5">
          <img
            src={member.image} // Note: This path is a placeholder
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-amber-200 transition-colors duration-300"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-blue-800 font-semibold text-sm mb-3">{member.designation}</p>
            <p className="text-gray-600 text-xs font-medium mb-1">
              <span className="font-bold">Specialization:</span> {member.specialization}
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-blue-600" />
            <a href={`mailto:${member.email}`} className="hover:text-blue-800 transition-colors">{member.email}</a>
          </div>
          {member.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-blue-600" />
              <span>{member.phone}</span>
            </div>
          )}
          {member.room && (
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />
              <span>{member.room}</span>
            </div>
          )}
          <div className="pt-2">
            <h4 className="text-xs font-semibold text-gray-800 mb-1">Research Interests:</h4>
            <ul className="list-disc list-inside space-y-1">
              {member.research.slice(0, 3).map((item, i) => ( // Show top 3 interests
                <li key={i} className="text-xs text-gray-600 truncate">{item}</li>
              ))}
            </ul>
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
        <div className="text-center">
          <img
            src={member.image} // Note: This path is a placeholder
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
          />
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <p className="text-green-800 font-semibold text-sm mb-3">{member.designation}</p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-green-600" />
            <a href={`mailto:${member.email}`} className="hover:text-green-800 transition-colors">{member.email}</a>
          </div>
          {member.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-green-600" />
              <span>{member.phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderPhdStudentCard = (student, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-4">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="text-md font-bold text-gray-900 text-center truncate">{student.name}</h3>
      </div>
    </div>
  );

  // --- UPDATED: renderStudentYearCard function ---
  const renderStudentYearCard = (studentYear, index) => {
    let IconComponent;
    let colorClass;

    switch (activeTab) {
      case 'mtech':
        IconComponent = BookOpen;
        colorClass = 'indigo';
        break;
      case 'btech':
        IconComponent = User;
        colorClass = 'teal';
        break;
      default:
        IconComponent = LinkIcon;
        colorClass = 'gray';
    }

    return (
      <div key={index} className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100`}>
        <div className="p-6">
          <div className="text-center">
            <div className={`p-4 bg-${colorClass}-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4`}>
              <IconComponent className={`h-10 w-10 text-${colorClass}-700`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{studentYear.year}</h3>
            <p className="text-gray-600 text-sm mb-4">List of Students</p>
            <a
              href={studentYear.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 bg-${colorClass}-600 text-white text-sm font-medium rounded-lg hover:bg-${colorClass}-700 transition-colors`}
            >
              {/* --- UPDATED: Text Changed --- */}
              View
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    );
  };


  const currentData = getCurrentData();
  const filteredData = filterData(currentData);

  const renderGrid = () => {
    if (filteredData.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No people found matching your criteria.</p>
        </div>
      );
    }

    // Ph.D. Student grid
    if (activeTab === 'phd') {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredData.map((person, index) => renderPhdStudentCard(person, index))}
        </div>
      );
    }

    // M.Tech and B.Tech PDF links grid
    if (activeTab === 'mtech' || activeTab === 'btech') {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((person, index) => renderStudentYearCard(person, index))}
        </div>
      );
    }
    
    // Faculty/Staff grid
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((person, index) => {
          if (activeTab === 'regularFaculty') {
            return renderFacultyCard(person, index);
          } else if (activeTab === 'staff') {
            return renderStaffCard(person, index);
          }
          return null;
        })}
      </div>
    );
  };

  // --- NEW: Dynamic placeholder text ---
  const getPlaceholderText = () => {
    switch (activeTab) {
      case 'regularFaculty':
        return 'Search faculty by name...';
      case 'staff':
        return 'Search staff by name or designation...';
      case 'phd':
        return 'Search Ph.D. students by name...';
      default:
        return 'Search...';
    }
  };


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
                // --- UPDATED: Placeholder ---
                placeholder={getPlaceholderText()}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={activeTab === 'mtech' || activeTab === 'btech'} // Search disabled only for M.Tech/B.Tech
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
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm(''); // Clear search on tab change
                  setSpecializationFilter('All'); // --- NEW: Reset filter on tab change ---
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-800 border border-gray-20E'
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
          
          {/* --- NEW: Specialization Filter Buttons --- */}
          {activeTab === 'regularFaculty' && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {specializations.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSpecializationFilter(spec)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    specializationFilter === spec
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          )}
          {/* --- End of Filter Buttons --- */}

          {renderGrid()}
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
              <div className="text-4xl font-bold text-amber-500 mb-2">{regularFaculty.length}</div>
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
              <div className="text-blue-100 font-medium">M.Tech Lists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">{btechStudents.length}</div>
              <div className="text-blue-100 font-medium">B.Tech Lists</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;