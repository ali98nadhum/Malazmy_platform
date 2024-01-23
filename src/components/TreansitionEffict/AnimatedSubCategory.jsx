import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TreansitionComp from '../TreansitionComp/TreansitionComp';
import SubCategory from '../SubCategory/SubCategory';
import { category } from "../../data";

const AnimatedSubCategory = () => {
    const [showTransition, setShowTransition] = useState(true);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const location = useLocation();
    const { id } = useParams(); 
    const [data, setData] = useState(category);

    useEffect(() => {
        const isSubCategoryPage = location.pathname.startsWith('/subcategory/');
        
        if (isSubCategoryPage) {
            setShowTransition(true);
            setShowSubCategory(false);
        
            setTimeout(() => {
                setShowTransition(false);
        
                setTimeout(() => {
                    setShowSubCategory(true);
                }, 1000);
            }, 2000); 
        } else {
            setShowTransition(false);
            setShowSubCategory(false);
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
            {showSubCategory && (
                <CSSTransition
                    key="subcategory"
                    timeout={1000}
                    classNames="fade-subcategory"
                >
                    <SubCategory dataProps={data} categoryId={id} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default AnimatedSubCategory;


