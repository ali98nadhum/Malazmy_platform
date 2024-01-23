import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TreansitionComp from '../TreansitionComp/TreansitionComp';
import AboutPage from '../AboutPage/AboutPage';

const AnimatedAboutPage = () => {
    const [showTransition, setShowTransition] = useState(true);
    const [showAboutPage, setShowAboutPage] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/about') {
        setShowTransition(true);
        setShowAboutPage(false);
  
        setTimeout(() => {
          setShowTransition(false);
  
          setTimeout(() => {
            setShowAboutPage(true);
          }, 1000); // Delay for the transition between TransitionComp and CategoryPage
        }, 2000); // Duration for showing TransitionComp
      } else {
        setShowTransition(false);
        setShowAboutPage(false);
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
        {showAboutPage && (
          <CSSTransition
            key="subcategory"
            timeout={1000}
            classNames="fade-category"
          >
            <AboutPage/>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  };

  export default AnimatedAboutPage 
