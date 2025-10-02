import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Users, Send, Building, Globe, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission (e.g., send data to an API)
    alert(`Thank you for your message, ${formData.name}! We will get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'General Inquiry',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Department Address',
      details: [
        'Department of Civil Engineering',
        'Indian Institute of Technology Indore',
        'Khandwa Road, Simrol',
        'Indore 453552, Madhya Pradesh, India'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Department Office: +91-731-2438-700',
        'HOD Office: +91-731-2438-701',
        'Fax: +91-731-2438-702'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Contacts',
      details: [
        'General: civil@iiti.ac.in',
        'HOD: hod.civil@iiti.ac.in',
        'Admissions: admissions.civil@iiti.ac.in'
      ],
      color: 'bg-amber-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      color: 'bg-indigo-500'
    }
  ];

  const facultyContacts = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      designation: 'Head of Department',
      email: 'hod.civil@iiti.ac.in',
      phone: '+91-731-2438-701',
      office: 'Room 201, Civil Engineering Building'
    },
    {
      name: 'Dr. Priya Menon',
      designation: 'Professor & Academic Coordinator',
      email: 'academic.civil@iiti.ac.in',
      phone: '+91-731-2438-703',
      office: 'Room 205, Civil Engineering Building'
    },
    {
      name: 'Ms. Sunita Sharma',
      designation: 'Administrative Officer',
      email: 'admin.civil@iiti.ac.in',
      phone: '+91-731-2438-704',
      office: 'Room 101, Civil Engineering Building'
    }
  ];

  const quickLinks = [
    { title: 'Admission Information', description: 'Details about admission procedures and requirements' },
    { title: 'Research Collaboration', description: 'Opportunities for research partnerships and projects' },
    { title: 'Industry Partnership', description: 'Corporate collaboration and consultancy services' },
    { title: 'Alumni Network', description: 'Connect with our alumni community' },
    { title: 'Student Services', description: 'Academic support and student facilities' },
    { title: 'Media Inquiries', description: 'Press releases and media-related queries' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Diagonal Cut */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)', // Diagonal bottom cut
                opacity: 0.1
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Contact Our Department</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for admissions, research, collaborations, or any other inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid - Elevated and Color-Coded */}
      <section className="py-20 -mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-2xl transition-all duration-300 transform hover:scale-[1.03] group border-t-4 border-blue-800"
              >
                <div className={`${info.color} text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-amber-500 transition-colors`}>
                  <info.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map - Modern Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-amber-500/50 inline-block pb-1">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-inner"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-inner"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-inner"
                      placeholder="Enter message subject"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-inner bg-white appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Admission Information</option>
                      <option>Research Collaboration</option>
                      <option>Industry Partnership</option>
                      <option>Alumni Relations</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 shadow-inner"
                    placeholder="Enter your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center transform hover:scale-[1.01] shadow-xl"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d75.81234567890123!3d22.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f1234567890%3A0x1234567890abcdef!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT Indore Location"
                  className="min-h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts - Clean Card Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Key Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Direct contacts for specific departments, administration, and faculty leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facultyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-b-4 border-amber-500 hover:border-blue-800 group"
              >
                <div className="text-center mb-4 border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800">{contact.name}</h3>
                  <p className="text-amber-600 font-semibold text-sm">{contact.designation}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 mr-3 text-blue-600" />
                    <a href={`mailto:${contact.email}`} className="hover:text-blue-800 font-medium transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 mr-3 text-blue-600" />
                    <span className='font-medium'>{contact.phone}</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <Building className="h-4 w-4 mr-3 text-blue-600 mt-0.5" />
                    <span className='font-medium'>{contact.office}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links - Interactive Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Quick Information Links</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Find specific departmental information quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-blue-800 group transform hover:scale-[1.01]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2 text-blue-800 group-hover:text-amber-600"/>
                    {link.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info - High Contrast Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">Stay Connected</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Follow us on our official channels for the latest updates, news, and events.
            </p>
            
            <div className="flex justify-center space-x-8 mb-12">
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors transform hover:scale-125 duration-300">
                <Globe className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors transform hover:scale-125 duration-300">
                <Mail className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors transform hover:scale-125 duration-300">
                <Users className="h-8 w-8" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center border-t border-blue-600 pt-8">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Emergency Contact</h3>
                <p className="text-blue-100 font-medium">Campus Security: +91-731-2438-911</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Transportation</h3>
                <p className="text-blue-100 font-medium">Bus Service Available from Indore City</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Visitor Information</h3>
                <p className="text-blue-100 font-medium">Prior appointment recommended</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;