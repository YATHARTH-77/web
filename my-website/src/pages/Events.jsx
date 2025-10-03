import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Search, ExternalLink, ChevronRight } from 'lucide-react';

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay connected with our academic events, workshops, conferences, and departmental activities
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events by title, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'upcoming'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'past'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

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
                <div className="grid lg:grid-cols-2 gap-8">
                  {filterEvents(upcomingEvents).map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.type === 'International' ? 'bg-red-100 text-red-800' :
                            event.type === 'Technical' ? 'bg-blue-100 text-blue-800' :
                            event.type === 'Educational' ? 'bg-green-100 text-green-800' :
                            event.type === 'Student' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        {isEventSoon(event.date) && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">
                              Coming Soon
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 flex-1">{event.title}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded ml-2">
                            {event.category}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{formatDate(event.date, event.endDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{event.organizer}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {event.description}
                        </p>

                        {event.speakers && (
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Speakers</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.speakers.map((speaker, idx) => (
                                <span key={idx} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded">
                                  {speaker}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex items-center justify-between text-sm">
                            <div>
                              <span className="font-medium text-gray-900">Registration:</span>
                              <span className="ml-1 text-gray-600">{event.registrationFee}</span>
                            </div>
                            {event.deadline !== 'Walk-in' && event.deadline !== 'Open to all' && (
                              <div className="text-red-600">
                                Deadline: {new Date(event.deadline).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                          <div className="mt-3">
                            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                              <span>Register Now</span>
                              <ChevronRight className="h-4 w-4 ml-1" />
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterEvents(pastEvents).map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900 flex-1">{event.title}</h3>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded ml-2">
                            {event.category}
                          </span>
                        </div>

                        <div className="space-y-1 mb-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{formatDate(event.date, event.endDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{event.venue}</span>
                          </div>
                          {event.attendees && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{event.attendees} Attendees</span>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {event.description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <button className="w-full text-blue-800 hover:text-blue-900 font-medium text-sm flex items-center justify-center transition-colors">
                            <span>View Details</span>
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive notifications about upcoming events, 
              workshops, and important announcements from the Civil Engineering Department.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;