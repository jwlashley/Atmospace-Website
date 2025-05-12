// components/BackgroundGallery.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from '../BackgroundGallery.module.css';

interface BackgroundGalleryProps {
  images: string[];
  credits: string[];
  slideTime?: number;
  fadeTime?: number;
  onImageChange?: (index: number) => void;
}

const BackgroundGallery: React.FC<BackgroundGalleryProps> = ({
  images,
  credits,
  slideTime = 5000,
  fadeTime = 1000,
  onImageChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to move to the next image
  const nextImage = () => {
    setIsTransitioning(true);
    
    // After fadeTime, change the actual image
    transitionTimeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      
      // Notify parent component of the change (for credit update)
      if (onImageChange) {
        onImageChange(nextIndex);
      }
      
      // Reset transition state after the fade is complete
      setIsTransitioning(false);
    }, fadeTime);
  };

  // Set up the image rotation
  useEffect(() => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set up next image timeout
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, slideTime);
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentIndex, slideTime, images.length]);

  // Set the initial image credit when the component mounts
  useEffect(() => {
    if (onImageChange) {
      onImageChange(currentIndex);
    }
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <div 
        className={`${styles.backgroundImage} ${isTransitioning ? styles.fadeOut : ''}`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: `opacity ${fadeTime}ms ease-in-out`
        }}
      />
    </div>
  );
};

export default BackgroundGallery;
