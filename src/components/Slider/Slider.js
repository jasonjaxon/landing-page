import React, { useRef, useEffect, useState, useCallback } from "react";
import Arrow from "./../Arrow/Arrow";
import SliderContent from "../SliderContent/SliderContent";
import Slide from "../Slide/Slide";
import Spinner from "./../Spinner/Spinner";
import Dots from "./../Dots/Dots";

import classes from "./Slider.module.css";

const getWidth = () => (window.innerWidth < 1200 ? window.innerWidth : 1200);

function Slider({ imagesArr, autoplay }) {
  const [showSlider, setShowSlider] = useState(true);
  const [contentRef, setContentRef] = useState(null);
  const [width, setWidth] = useState(getWidth());
  const [slides, setSlides] = useState([]);
  const [state, setState] = useState({
    transition: 0.45,
    translate: width,
    activeSlide: 1,
  });
  const checkIndexRef = useRef();

  const { transition, translate, activeSlide } = state;

  const checkIndex = useCallback(() => {
    if (activeSlide >= slides.length - 1) {
      setState(prev => ({ ...prev, activeSlide: 1, transition: 0 }));
    } else if (activeSlide <= 0) {
      setState(prev => ({
        ...prev,
        activeSlide: slides.length - 2,
        transition: 0,
      }));
    }
  }, [activeSlide, slides.length]);

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(() => {
        setState(prev => ({ ...prev, activeSlide: prev.activeSlide + 1 }));
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [activeSlide, autoplay]);

  useEffect(() => {
    checkIndexRef.current = checkIndex;
    if (transition === 0) setState(prev => ({ ...prev, transition: 0.45 }));
  }, [checkIndex, transition]);

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      const w = getWidth();
      setWidth(w);
      setState(prev => ({ ...prev, translate: w, transition: 0 }));
    });

    setSlides([imagesArr[imagesArr.length - 1], ...imagesArr, imagesArr[0]]);
    const timer = setTimeout(() => setShowSlider(false), 1000);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(timer);
    };
  }, [imagesArr]);

  useEffect(() => {
    const checkIdx = () => {
      checkIndexRef.current();
    };

    if (contentRef && slides.length !== 0) {
      contentRef.addEventListener("transitionend", checkIdx);
    }
  }, [slides, contentRef]);

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      return;
    } else {
      setState(prev => ({ ...prev, activeSlide: prev.activeSlide + 1 }));
    }
  };
  const prevSlide = () => {
    if (activeSlide === 0) {
      return;
    } else {
      setState(prev => ({ ...prev, activeSlide: prev.activeSlide - 1 }));
    }
  };

  const dotClickHandler = i => {
    setState(prev => ({
      ...prev,
      activeSlide: i + 1,
    }));
  };

  const content =
    slides.length === 0 || showSlider ? (
      <Spinner />
    ) : (
      <>
        <SliderContent
          ref={setContentRef}
          translate={translate}
          transition={transition}
          width={width * slides.length}
          activeSlide={activeSlide}
        >
          {slides.map(slide => (
            <Slide width={width} key={Math.random() * 10000} url={slide} />
          ))}
        </SliderContent>
        <Arrow direction="prev" clicked={nextSlide} />
        <Arrow direction="next" clicked={prevSlide} />
        <Dots
          clicked={dotClickHandler}
          slides={slides}
          activeSlide={activeSlide}
        />
      </>
    );
  return <div className={classes.slider}>{content}</div>;
}

export default Slider;
