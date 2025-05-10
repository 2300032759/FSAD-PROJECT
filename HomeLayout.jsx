import React from 'react';
import Navbar from './NavBar';  // Import the Navbar component
import SearchLocation from './SearchLocation';  // Import the SearchLocation component
import BookServiceModal from './BookServiceModal';  // Import the BookServiceModal component
import Model from './Model';  // Import the Model component
import Services from './Services';  // Assuming you have a Services component

const HomeLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Model Section */}
      <Model />  {/* Replace Hero with Model */}

      {/* Search Location Section */}
      <SearchLocation />

      {/* Book Service Modal */}
      <BookServiceModal />

      {/* Services */}
      <Services />
    </div>
  );
};

export default HomeLayout;
