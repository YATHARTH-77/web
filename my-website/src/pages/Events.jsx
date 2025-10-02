import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Search, ExternalLink, ChevronRight, Zap } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const upcomingEvents = [
    {
      title: 'International Conference on Sustainable Infrastructure',
      date: '2025-03-15',
      endDate: '2025-03-17',
      time: '09:00 AM',
      venue: 'Main Auditorium, IIT Indore',
      category: 'Conference',
      type: 'International',
      description: 'A premier international conference focusing on sustainable infrastructure development, green construction technologies, and climate-resilient design practices.',
      speakers: ['Dr. John Smith (MIT)', 'Prof. Maria Garcia (Stanford)', 'Dr. Raj Patel (IIT Delhi)'],
      registrationFee: 'Free for students, ₹5000 for professionals',
      deadline: '2025-02-28',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      organizer: 'Civil Engineering Department'
    },
    {
      title: 'Workshop on Advanced Structural Analysis using AI',
      date: '2025-02-20',
      time: '10:00 AM',
      venue: 'Computer Laboratory',
      category: 'Workshop',
      type: 'Technical',
      description: 'Hands-on workshop on using artificial intelligence and machine learning techniques for structural analysis and design optimization.',
      speakers: ['Dr. Rajesh Kumar Sharma', 'Industry Expert from L&T'],
      registrationFee: '₹500 for students, ₹2000 for professionals',
      deadline: '2025-02-15',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      organizer: 'Civil Engineering Department'
    },
    {
      title: 'Guest Lecture: Future of Transportation Engineering',
      date: '2025-02-05',
      time: '03:00 PM',
      venue: 'Lecture Hall 201',
      category: 'Lecture',
      type: 'Educational',
      description: 'Distinguished lecture on emerging trends in transportation engineering, smart mobility, and autonomous vehicle infrastructure.',
      speakers: ['Prof. Sarah Johnson (UC Berkeley)'],
      registrationFee: 'Free',
      deadline: 'Walk-in',
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800',
      organizer: 'Transportation Engineering Group'
    },
    {
      title: 'Student Seminar on Innovative Construction Materials',
      date: '2025-01-30',
      time: '02:00 PM',
      venue: 'Seminar Hall',
      category: 'Seminar',
      type: 'Student',
      description: 'Student-led presentations on innovative construction materials, including self-healing concrete, bio-based materials, and smart materials.',
      speakers: ['Final Year Students', 'Faculty Coordinators'],
      registrationFee: 'Free',
      deadline: 'Open to all',
      image: 'https://images.pexels.com/photos/3865263/pexels-photo-3865263.jpeg?auto=compress&cs=tinysrgb&w=800',
      organizer: 'Student Chapter'
    },
    {
      title: 'Industry-Academia Meet: Smart Cities Development',
      date: '2025-02-12',
      time: '11:00 AM',
      venue: 'Conference Room',
      category: 'Industry Meet',
      type: 'Networking',
      description: 'Networking event bringing together industry professionals and academic researchers to discuss smart cities development and collaboration opportunities.',
      speakers: ['Industry Leaders', 'Faculty Members', 'Researchers'],
      registrationFee: 'Free with registration',
      deadline: '2025-02-08',
      image: 'https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=800',
      organizer: 'Industry Relations Cell'
    }
  ];

  const pastEvents = [
    {
      title: 'National Symposium on Earthquake Engineering',
      date: '2024-12-10',
      endDate: '2024-12-12',
      venue: 'Main Auditorium',
      category: 'Symposium',
      description: 'Three-day national symposium on latest developments in earthquake engineering and seismic design.',
      attendees: 250,
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Workshop on BIM in Infrastructure Projects',
      date: '2024-11-15',
      venue: 'CAD Laboratory',
      category: 'Workshop',
      description: 'Intensive workshop on Building Information Modeling (BIM) applications in large-scale infrastructure projects.',
      attendees: 45,
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Annual Technical Fest - CivilTech 2024',
      date: '2024-10-20',
      endDate: '2024-10-22',
      venue: 'Department Campus',
      category: 'Fest',
      description: 'Annual technical festival featuring competitions, exhibitions, and technical presentations by students.',
      attendees: 500,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Geotechnical Engineering Conference',
      date: '2024-09-25',
      venue: 'Lecture Hall Complex',
      category: 'Conference',
      description: 'Regional conference on advances in geotechnical engineering and foundation design.',
      attendees: 180,
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Conference', 'Workshop', 'Lecture', 'Seminar', 'Industry Meet', 'Fest'];

  const filterEvents = (events) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (event.category && event.category.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const formatDate = (dateString, endDateString = null) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const startDate = new Date(dateString).toLocaleDateString('en-US', options);
    if (endDateString) {
      const endDate = new Date(endDateString).toLocaleDateString('en-US', options);
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  };

  const isEventSoon = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };
  
  // Helper to determine badge color based on type
  const getTypeBadgeClasses = (type) => {
    switch(type) {
      case 'International': return 'bg-red-500 text-white shadow-md';
      case 'Technical': return 'bg-blue-800 text-white shadow-md';
      case 'Educational': return 'bg-green-600 text-white shadow-md';
      case 'Student': return 'bg-purple-600 text-white shadow-md';
      case 'Networking': return 'bg-amber-500 text-white shadow-md';
      default: return 'bg-gray-700 text-white shadow-md';
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Elevated Banner with Diagonal Cut */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)', // Diagonal bottom cut
                opacity: 0.1
            }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Events & Activities</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay connected with our high-impact academic events, workshops, and departmental activities.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Search/Filter and Tab Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-xl py-6 border-b border-gray-200 -mt-16 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events by title, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 border border-gray-300 rounded-full bg-gray-50 focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 shadow-inner"
              />
            </div>
            
            {/* Filter */}
            <div className="md:w-64 relative w-full">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-6 border border-gray-300 rounded-full bg-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 appearance-none shadow-md"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <Filter className="h-5 w-5"/>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex space-x-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-2 px-1 border-b-2 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'upcoming'
                  ? 'border-blue-800 text-blue-800 scale-105'
                  : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-2 px-1 border-b-2 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'past'
                  ? 'border-blue-800 text-blue-800 scale-105'
                  : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </div>

      {/* Events Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div>
              {filterEvents(upcomingEvents).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No upcoming events found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-10">
                  {filterEvents(upcomingEvents).map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-gray-100 group transform hover:-translate-y-1"
                    >
                      <div className="relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getTypeBadgeClasses(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        {isEventSoon(event.date) && (
                          <div className="absolute top-4 right-4">
                            <span className="px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold shadow-lg">
                              Coming Soon!
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-extrabold text-gray-900 flex-1 hover:text-blue-800 transition-colors">{event.title}</h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full ml-3 whitespace-nowrap">
                            {event.category}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-y-2 mb-5 text-sm text-gray-700 font-medium">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{formatDate(event.date, event.endDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center col-span-2">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center col-span-2">
                            <Users className="h-4 w-4 mr-2 text-blue-600" />
                            <span>Organizer: {event.organizer}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3 border-l-4 border-amber-500/50 pl-3">
                          {event.description}
                        </p>

                        {event.speakers && (
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Distinguished Speakers</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.speakers.map((speaker, idx) => (
                                <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium shadow-sm">
                                  {speaker}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="border-t border-gray-100 pt-5">
                          <div className="flex items-center justify-between text-sm font-semibold">
                            <div>
                              <span className="text-gray-900">Fee:</span>
                              <span className="ml-1 text-green-600">{event.registrationFee}</span>
                            </div>
                            {event.deadline !== 'Walk-in' && event.deadline !== 'Open to all' && (
                              <div className="text-red-600">
                                Deadline: {new Date(event.deadline).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                          <div className="mt-4">
                            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-full font-bold transition-colors duration-200 flex items-center justify-center transform hover:scale-[1.01] shadow-xl">
                              <span>Secure Your Spot</span>
                              <ChevronRight className="h-5 w-5 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div>
              {filterEvents(pastEvents).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No past events found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterEvents(pastEvents).map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 group transform hover:-translate-y-1"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-44 object-cover transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 flex-1 line-clamp-2">{event.title}</h3>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full ml-3 whitespace-nowrap">
                            {event.category}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4 text-sm text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                            <span className='font-medium'>{formatDate(event.date, event.endDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span className='font-medium'>{event.venue}</span>
                          </div>
                          {event.attendees && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-blue-600" />
                              <span className='font-medium'>{event.attendees} Attendees</span>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {event.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button className="w-full text-blue-800 hover:text-amber-600 font-semibold text-sm flex items-center justify-center transition-colors">
                            <span>View Post-Event Report</span>
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup - High Contrast CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">Never Miss An Event</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Subscribe to our newsletter for instant notifications about upcoming conferences, 
              workshops, and important announcements.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full border border-transparent focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 shadow-inner"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-colors duration-200 transform hover:scale-[1.05] shadow-xl flex items-center justify-center">
                <Zap className="h-5 w-5 mr-2"/>
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;