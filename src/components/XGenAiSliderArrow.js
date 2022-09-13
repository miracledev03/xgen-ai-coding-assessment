import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrow_right.svg";

import classes from "./XGenAiSliderArrow.module.css";

const XGenAiSliderArrow = (props) => {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next"
          ? classes.xgen_ai_slider_btn + " " + classes.xgen_ai_slider_btn_next
          : classes.xgen_ai_slider_btn + " " + classes.xgen_ai_slider_btn_prev
      }
    >
      <img src={props.direction === "next" ? rightArrow : leftArrow} alt={`Arrow ${props.direction}`} />
    </button>
  );
};

export default XGenAiSliderArrow;
