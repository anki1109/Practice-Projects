import React, { useState } from 'react';
import './App.css';
import ForwardButton from './components/ForwardButton';
import BackButton from './components/BackButton';
import ImageGallery from './components/ImageGallery';
import { imageURLs } from './components/ImageGallery';
const App = () => {
  const[currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleForwardClick=(): void=>{
    setCurrentImageIndex((prevIndex) => 
    prevIndex === imageURLs.length-1? 0:prevIndex+1
    );
    console.log('Button clicked!');
    console.log('Forward button clicked! Current Image Index:', currentImageIndex);
    
  }

  const handleBackClick=(): void=>{
    setCurrentImageIndex((prevIndex) => 
    prevIndex ===0? imageURLs.length-1:prevIndex-1)
    console.log('Button clicked!');
    console.log('Back button clicked! Current Image Index:', currentImageIndex)
  }



  return (
    <div className="App">
      <div className='title'>
      First Project: Image Carousel
      </div>
    
      <div className='arrowItemsContainer'>
      <BackButton onClick={handleBackClick}/>
      <ImageGallery currentImageIndex={currentImageIndex}/>
      <ForwardButton  onClick={handleForwardClick}/>
      </div>
     </div>
    
  );
}

export default App;
