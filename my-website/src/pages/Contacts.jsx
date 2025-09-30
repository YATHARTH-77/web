import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Users, Send, Building, Globe } from 'lucide-react';

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

  const handleSubmit = () => {
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
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
      title: 'Address',
      details: [
        'Department of Civil Engineering',
        'Indian Institute of Technology Indore',
        'Khandwa Road, Simrol',
        'Indore 453552, Madhya Pradesh, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Department Office: +91-731-2438-700',
        'HOD Office: +91-731-2438-701',
        'Fax: +91-731-2438-702'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: civil@iiti.ac.in',
        'HOD: hod.civil@iiti.ac.in',
        'Admissions: admissions.civil@iiti.ac.in'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for admissions, research opportunities, collaborations, or any other inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter message subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d75.81234567890123!3d22.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f1234567890%3A0x1234567890abcdef!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT Indore Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct contacts for specific departments and services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facultyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                  <p className="text-blue-800 font-medium">{contact.designation}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-3 text-blue-600" />
                    <a href={`mailto:${contact.email}`} className="hover:text-blue-800 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-3 text-blue-600" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <Building className="h-4 w-4 mr-3 text-blue-600 mt-0.5" />
                    <span>{contact.office}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find specific information quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, news, and events
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors">
                <Globe className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors">
                <Mail className="h-8 w-8" />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors">
                <Users className="h-8 w-8" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Contact</h3>
                <p className="text-blue-100">Campus Security: +91-731-2438-911</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Transportation</h3>
                <p className="text-blue-100">Bus Service Available from Indore City</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Visitor Information</h3>
                <p className="text-blue-100">Prior appointment recommended</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;