import { useState } from "react";

import classes from "./XGenAiSlider.module.css";

import sliderContent from "./sliderContent";
import ProductListing from "./ProductListing";
import XGenAiSliderArrow from "./XGenAiSliderArrow";

const XGenAiSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesToShow = 4;

  const nextSlide = () => {
    if (slideIndex + slidesToShow - 1 !== sliderContent.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(sliderContent.length - slidesToShow + 1);
    }
  };

  return (
    <div className={classes.xgen_ai_slider_container}>
      <div className={classes.xgen_ai_slider_slides}>
        {sliderContent.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? classes.xgen_ai_slider_slide +
                    " " +
                    classes.xgen_ai_slider_slide_active
                  : classes.xgen_ai_slider_slide
              }
              style={{ transform: `translateX(calc(-${(slideIndex - 1) * 100}% - ${(slideIndex - 1) * 16}px))` }}
            >
              <ProductListing data={obj} />
            </div>
          );
        })}
      </div>

      <XGenAiSliderArrow moveSlide={nextSlide} direction="next" />
      <XGenAiSliderArrow moveSlide={prevSlide} direction="prev" />
    </div>
  );
};

export default XGenAiSlider;
