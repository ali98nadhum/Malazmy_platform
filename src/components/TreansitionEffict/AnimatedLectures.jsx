import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TreansitionComp from '../TreansitionComp/TreansitionComp';
import Lectures from '../LecturesComp/Lectures';

const AnimatedLectures = () => {
    const [showTransition, setShowTransition] = useState(true);
    const [showLectures, setShowLectures] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/lecture') {
        setShowTransition(true);
        setShowLectures(false);
  
        setTimeout(() => {
          setShowTransition(false);
  
          setTimeout(() => {
            setShowLectures(true);
          }, 1000); // Delay for the transition between TransitionComp and CategoryPage
        }, 2000); // Duration for showing TransitionComp
      } else {
        setShowTransition(false);
        setShowLectures(false);
      }
    }, [location.pathname]);
  
    return (
      <TransitionGroup>
        {showTransition && (
          <CSSTransition
            key="transition"
            timeout={500}
            classNames="fade-transition"
          >
            <TreansitionComp />
          </CSSTransition>
        )}
        {showLectures && (
          <CSSTransition
            key="subcategory"
            timeout={1000}
            classNames="fade-category"
          >
            <Lectures/>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  };

  export default AnimatedLectures
