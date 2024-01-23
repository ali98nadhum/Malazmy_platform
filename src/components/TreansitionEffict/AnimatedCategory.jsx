import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TreansitionComp from '../TreansitionComp/TreansitionComp';
import CategoryPage from '../CategoryPage/CategoryPage';
import { category } from "../../data";

const AnimatedCategory = () => {
    const [showTransition, setShowTransition] = useState(true);
    const [showCategory, setShowCategory] = useState(false);
    const location = useLocation();
    const [data , setData] = useState(category)
  
    useEffect(() => {
      if (location.pathname === '/category') {
        setShowTransition(true);
        setShowCategory(false);
  
        setTimeout(() => {
          setShowTransition(false);
  
          setTimeout(() => {
            setShowCategory(true);
          }, 1000); // Delay for the transition between TransitionComp and CategoryPage
        }, 2000); // Duration for showing TransitionComp
      } else {
        setShowTransition(false);
        setShowCategory(false);
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
        {showCategory && (
          <CSSTransition
            key="subcategory"
            timeout={1000}
            classNames="fade-category"
          >
            <CategoryPage dataProps={data}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  };

  export default AnimatedCategory
