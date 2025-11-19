import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Search, ExternalLink, ChevronRight } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('news'); // Default to news since that's what we have
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Data from Home.jsx news section
  const newsData = [
    {
      date: '2025-11-26',
      title: 'ANRF Financial Assistance for International Symposium',
      description: 'Mr. Vikas Rawat receives financial assistance from ANRF for participating in the International Symposium on Land Reclamation in Singapore.',
      category: 'Achievement',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2025-02-10',
      title: 'Prestigious Humboldt Fellowship Awarded',
      description: 'Ms. Minu Treesa Abraham, PhD Student under Prof. Neelima Satyam, selected for the prestigious Humboldt fellowship for Postdocs.',
      category: 'Award',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2024-03-15', 
      title: 'Himalayan Glaciology Research Featured in Mongabay',
      description: 'Research on western Himalayan glaciers reacting to climate change by Dr. Mohd Farooq Azam\'s team featured in Mongabay magazine.',
      category: 'Research',
      image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
     {
      date: '2024-02-20',
      title: 'Research Featured in Media: Soil and Rocks of MP',
      description: 'Research work of Dr. Lalit Borana and his group on "Soil and Rocks of Madhyapradesh" has been featured in Hindi and English Media.',
      category: 'Research',
      image: 'https://images.pexels.com/photos/3865263/pexels-photo-3865263.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2023-11-15',
      title: 'Prof. Biswajeet Pradhan Listed as Highly Cited Researcher',
      description: 'Adjunct Professor Prof. Biswajeet Pradhan listed as one of the highly Cited Researchers announced by Clarivate Analytics.',
      category: 'Award',
      image: 'https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2023-10-24',
      title: 'PhD Admission Advertisement',
      description: 'Last Date of Online Application: October 24, 2023.',
      category: 'Admission',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
     {
      date: '2023-09-01',
      title: 'Appointment to NEAT Expert Committee',
      description: 'Prof. Sandeep Chaudhary appointed as an Independent Expert Committee member for the National Educational Alliance for Technology (NEAT).',
      category: 'Appointment',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2020-12-15',
      title: 'Editor’s Choice Papers Award-2020',
      description: 'Mr. M. Johnson Singh received the prestigious Editor’s Choice Papers Award from the International Journal of Geosynthetics and Ground Engineering.',
      category: 'Award',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2020-07-10',
      title: 'Ph.D. Openings in Transportation Engineering',
      description: 'Immediate openings for Ph.D. in Transportation Engineering Specialization. Application Deadline: 10 July 2020.',
      category: 'Admission',
      image: 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2020-01-20',
      title: 'Executive Member of Indian Society of Engineering Geology',
      description: 'Dr. Neelima Satyam elected as Executive member of Indian Society of Engineering Geology (ISEG) for the term 2020-2021.',
      category: 'Appointment',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    },
    {
      date: '2019-12-15',
      title: 'Best Poster Award at International Conference',
      description: 'Mr. Vikas Poonia awarded the best poster award in International Conference of "Recent Advance in Life Science" held at Indore.',
      category: 'Award',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800' // Placeholder
    }
  ];

  // Sort news by date (Newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const upcomingEvents = []; // Empty as requested previously
  const pastEvents = []; // Empty as requested previously

  const categories = ['All', 'Achievement', 'Award', 'Research', 'Admission', 'Appointment'];

  const filterEvents = (events) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (event.category && event.category.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
                placeholder="Search news by title, description, or category..."
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
              onClick={() => setActiveTab('news')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'news'
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              News & Updates
            </button>
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
          
          {/* News & Updates Tab (Populated with Home.jsx data) */}
          {activeTab === 'news' && (
            <div>
              {filterEvents(sortedNews).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {filterEvents(sortedNews).map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      {/* Used placeholders from image list provided in old code for visual consistency */}
                      <div className="relative">
                         <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-3 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                          <span className="font-medium">{formatDate(item.date)}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                           <button className="text-blue-800 hover:text-amber-600 font-medium text-sm flex items-center transition-colors">
                            <span>Read Full Story</span>
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div>
              {filterEvents(upcomingEvents).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No events</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {filterEvents(upcomingEvents).map((event, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Event card content would go here */}
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
                  <p className="text-gray-500 text-lg">No events</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterEvents(pastEvents).map((event, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                       {/* Event card content would go here */}
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