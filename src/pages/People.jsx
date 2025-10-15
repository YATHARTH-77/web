import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, Search, GraduationCap, Building, User } from 'lucide-react';

const People = () => {
  const [activeTab, setActiveTab] = useState('faculty');
  const [searchTerm, setSearchTerm] = useState('');

  const faculty = [
    {
      name: 'Abhishek Rajput',
      designation: 'Professor & Head of Department',
      specialization: 'Structural Engineering',
      education: 'Ph.D. (IIT Delhi), M.Tech (IIT Bombay), B.Tech (NIT Kurukshetra)',
      experience: '25 years',
      email: 'rajesh.sharma@iiti.ac.in',
      phone: '+91-731-2438-701',
      image: '../src/assets/faculty_pics/abhishekrajput.jpg',
      research: ['Earthquake Engineering', 'Structural Dynamics', 'Reinforced Concrete Structures'],
      publications: 85,
      projects: 12
    },
    {
      name: 'Ashutosh',
      designation: 'Professor',
      specialization: 'Geotechnical Engineering',
      education: 'Ph.D. (IISc Bangalore), M.Tech (IIT Madras), B.Tech (NIT Calicut)',
      experience: '22 years',
      email: 'priya.menon@iiti.ac.in',
      phone: '+91-731-2438-702',
      image: '../src/assets/faculty_pics/Ashootosh Passport_Dark Background.JPG',
      research: ['Soil Dynamics', 'Foundation Engineering', 'Ground Improvement'],
      publications: 72,
      projects: 8
    },
    {
      name: 'Biswajeet',
      designation: 'Associate Professor',
      specialization: 'Transportation Engineering',
      education: 'Ph.D. (IIT Kharagpur), M.Tech (IIT Delhi), B.Tech (MNIT Jaipur)',
      experience: '18 years',
      email: 'amit.singh@iiti.ac.in',
      phone: '+91-731-2438-703',
      image: '../src/assets/faculty_pics/Biswajeet.jpg',
      research: ['Traffic Engineering', 'Pavement Design', 'Intelligent Transportation Systems'],
      publications: 64,
      projects: 10
    },
    {
      name: 'chaubfwt',
      designation: 'Associate Professor',
      specialization: 'Water Resources Engineering',
      education: 'Ph.D. (IIT Roorkee), M.Tech (IIT Bombay), B.Tech (SVNIT Surat)',
      experience: '16 years',
      email: 'sneha.patel@iiti.ac.in',
      phone: '+91-731-2438-704',
      image: '../src/assets/faculty_pics/chaubfwt.jpg',
      research: ['Hydrology', 'Water Quality Management', 'Groundwater Modeling'],
      publications: 56,
      projects: 7
    },
    {
      name: 'Dr Baadiga Ramu',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Dr Baadiga Ramu.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Dr Rao Y Surampalli',
      designation: 'Assistant Professor',
      specialization: 'Construction Management',
      education: 'Ph.D. (IIT Bombay), M.Tech (VNIT Nagpur), B.Tech (COEP Pune)',
      experience: '12 years',
      email: 'meera.joshi@iiti.ac.in',
      phone: '+91-731-2438-706',
      image: '../src/assets/faculty_pics/dr_Rao_Y_Surampalli.jpg',
      research: ['Project Management', 'Sustainable Construction', 'Building Information Modeling'],
      publications: 42,
      projects: 5
    },
    {
      name: 'Dr. Akshay',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Dr. Akshay Photo.JPG',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Dr. Priyank J Sharma',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Dr. Priyank J Sharma.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Gourab',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Gourab.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Guru',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/GuruFinal.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Kaustav',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Kaustav.png',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Krishna R. Reddy',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Krishna R. Reddy.png',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Lalit Borana',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Lalit_Borana.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'M S JAIN',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/M S JAIN.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'MK Goyal',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/mkgoyal.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Munir Ahmad Nayak',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Munir Ahmad Nayak.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Neelima',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/neelime.jpeg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Novak',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/novak.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Farooq',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Photo-Farooq.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Priyansh',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Priyansh.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Professor Sandeep',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Professor Sandeep.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    {
      name: 'Puneet Kumar Patra',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Puneet Kumar Patra.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    
    {
      name: 'Pushpa',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Pushpa.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    
    {
      name: 'Ravinder',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/ravinder.png',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
    
    {
      name: 'Saikat',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/saikat.jpg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    },
   
    
    {
      name: 'Sridhar',
      designation: 'Associate Professor',
      specialization: 'Environmental Engineering',
      education: 'Ph.D. (IIT Kanpur), M.Tech (IIT Delhi), B.Tech (DTU Delhi)',
      experience: '14 years',
      email: 'vikram.agarwal@iiti.ac.in',
      phone: '+91-731-2438-705',
      image: '../src/assets/faculty_pics/Sridhar.jpeg',
      research: ['Wastewater Treatment', 'Air Pollution Control', 'Solid Waste Management'],
      publications: 48,
      projects: 6
    }
    
  ];

  const staff = [
    {
      name: 'Ajay',
      designation: 'Administrative Officer',
      department: 'Administration',
      experience: '15 years',
      email: 'sunita.sharma@iiti.ac.in',
      phone: '+91-731-2438-710',
      image: '../src/assets/staff pics/Ajay.jpg',
      responsibilities: ['Student Affairs', 'Academic Administration', 'Event Coordination']
    },
    {
      name: 'Amit',
      designation: 'Technical Officer',
      department: 'Laboratory Management',
      experience: '20 years',
      email: 'ramesh.kumar@iiti.ac.in',
      phone: '+91-731-2438-711',
      image: '../src/assets/staff pics/Amit.jpg',
      responsibilities: ['Equipment Maintenance', 'Lab Safety', 'Technical Support']
    },
    {
      name: 'Awadhesh Verma',
      designation: 'Lab Assistant',
      department: 'Structural Engineering Lab',
      experience: '8 years',
      email: 'kavita.rao@iiti.ac.in',
      phone: '+91-731-2438-712',
      image: '../src/assets/staff pics/Awadhesh Verma.jpg',
      responsibilities: ['Lab Assistance', 'Student Support', 'Equipment Operation']
    },
    {
      name: 'Ghanshyam',
      designation: 'Lab Technician',
      department: 'Geotechnical Engineering Lab',
      experience: '12 years',
      email: 'suresh.patel@iiti.ac.in',
      phone: '+91-731-2438-713',
      image: '../src/assets/staff pics/Ghanshyam.jpg',
      responsibilities: ['Soil Testing', 'Equipment Calibration', 'Data Collection']
    },
    {
      name: 'Pankaj Sankhla',
      designation: 'Lab Technician',
      department: 'Geotechnical Engineering Lab',
      experience: '12 years',
      email: 'suresh.patel@iiti.ac.in',
      phone: '+91-731-2438-713',
      image: '../src/assets/staff pics/Pankaj Sankhla.jpg',
      responsibilities: ['Soil Testing', 'Equipment Calibration', 'Data Collection']
    },
    {
      name: 'Rinki',
      designation: 'Lab Technician',
      department: 'Geotechnical Engineering Lab',
      experience: '12 years',
      email: 'suresh.patel@iiti.ac.in',
      phone: '+91-731-2438-713',
      image: '../src/assets/staff pics/Rinki.jpg',
      responsibilities: ['Soil Testing', 'Equipment Calibration', 'Data Collection']
    },
  ];

  const phdStudents = [
    {
      name: 'Aadarsh Singh',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Aadarsh Singh.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Achala Singh',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Achala Singh (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Akash Paradkar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Akash Paradkar(PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Akshay',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Akshay.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Alok Sharma',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Alok Sharma (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Anshul',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Anshul.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Arpita',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Arpita.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'ASTHA SHARMA',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/ASTHA SHARMA (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'astha',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/astha.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Bodhanam',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Bodhanam.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Deepak Mishra',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Deepak Mishra (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Gaurav Sharma',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Gaurav Sharma(PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Ghulam Hussain',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Ghulam Hussain (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Gourav Agrawal',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Gourav Agrawal (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Gyanesh',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Gyanesh.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Harshvardhan Solanki',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Harshvardhan Solanki (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Himanshu',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Himanshu.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Hussain',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Hussain.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Jatin Garhekar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Jatin Garhekar (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Jitendra Mathankar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Jitendra Mathankar (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Kajol Kankane',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Kajol Kankane (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Karnati',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Karnati.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Kuldeep',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Kuldeep.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Kunal',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Kunal.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Kushal Patil',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Kushal Patil.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Mahaveer Singh Dangi ',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Mahaveer Singh Dangi (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Manish Yadav ',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Manish Yadav (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Mayank Upadhyay',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Mayank Upadhyay.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Meghna',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Meghna.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Minu',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Minu.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Mohd',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Mohd.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Moirangthem',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Moirangthem.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'KMonika',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Monika.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'MUKUL',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/MUKUL.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Naveen Kumar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Naveen Kumar (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Nikhil Pandey',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Nikhil Pandey (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Nikhil',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Nikhil.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Nitin',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Nitin.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Parul',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Parul.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Revanth',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Revanth.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Rohit Vyas',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Rohit Vyas(PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Rosa',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Rosa.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sachin',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sachin.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Saket',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/SAKET.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sanchit',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sanchit.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sarvjeet Singh',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sarvjeet Singh (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sayak Chakravorty',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sayak Chakravorty (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Shivam',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Shivam.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Shivukumar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Shivukumar.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Shubham More',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Shubham More (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Shuddhashil',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Shuddhashil.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Smriti',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Smriti.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Srinidhi',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Srinidhi.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sugato Panda',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sugato Panda (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Sumedh Kishor Limaye',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Sumedh Kishor Limaye (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Utkarsh Baranwal',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Utkarsh Baranwal (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Veena N Bhajantri',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Veena N Bhajantri (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Venkatesh',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Venkatesh.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Vijay',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Vijay.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Vikas Rawat',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Vikas Rawat(PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Vikas Sudam Gore',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Vikas Sudam Gore (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Vikas',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Vikas.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'VINAY SHARMA',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/VINAY SHARMA (PhD).jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Vivek',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Vivek.jpg',
      publications: 8,
      conferences: 12
    },
    {
      name: 'Waqar',
      year: '4th Year',
      supervisor: 'Dr. Rajesh Kumar Sharma',
      specialization: 'Earthquake Engineering',
      thesis: 'Seismic Performance of High-Rise Buildings with Base Isolation Systems',
      email: 'arjun.mehta@iiti.ac.in',
      image: '../src/assets/stu_images/phd/Waqar.jpg',
      publications: 8,
      conferences: 12
    },
    
  ];

  const mtechStudents = [
    {
      name: 'Karnati.jpg',
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
        <div className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 group-hover:border-amber-200 transition-colors duration-300"
          />
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
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
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
          />
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        </div>
      </div>
    </div>
  );

  const renderStudentCard = (student, index, type) => {
    if (type === 'phd') {
      return (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="p-6">
            <div className="text-center">
              <img
                src={student.image}
                alt={student.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-100"
              />
              <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
            </div>
          </div>
        </div>
      );
    }

    // For M.Tech and B.Tech students, keep the full card
    return (
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
  };

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
              activeTab === 'phd' ? 'md:grid-cols-2 lg:grid-cols-3' :
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