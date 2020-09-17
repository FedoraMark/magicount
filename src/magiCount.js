import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Animated from "react-css-animated";
import { /* useSwipeable, */ Swipeable } from "react-swipeable";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import "animate.css";
import style from "./magiCount.module.scss";

const defaultScores = [10, 20, 30, 40, 50];

const LEFT = "left";
const RIGHT = "right";

const PLUS = "plus";
const MINUS = "minus";

const DURATION = 400;

// WINDOW HEIGHT FIX
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

class magiCount extends Component {
  static propTypes = {
    default: PropTypes.number.isRequired,
    warnAt: PropTypes.number,
    dangerAt: PropTypes.number,
  };

  static defaultProps = {
    warnAt: 5,
    dangerAt: 0,
  };

  state = {
    default: this.props.default,
    score: this.props.default,
    atDefault: true,
    defaultIndex: defaultScores.indexOf(this.props.default),
    swipeDirection: "",
    isResetting: true,
    willTransition: false,
    orientation: 0,

    plusActive: false,
    minusActive: false,
  };

  componentDidMount() {
    this.setState({ isResetting: false, orientation: window.innerHeight >= window.innerWidth ? 0 : 90 });
    this.handleOrientationChange();
  }

  // HANDLERS
  handleOrientationChange = () => {
    var self = this;
    if ("onorientationchange" in window) {
      window.addEventListener("orientationchange", (e) => {
        this.setState({ orientation: e.currentTarget.orientation });
      });
    }
  };

  // FUNCITONS
  changeBy = (amt) => {
    // use NEGATIVES to decrement
    this.setState({
      atDefault: false,
      score: this.state.score + amt,
    });
  };

  scoreSwipe = (dir) => {
    if (this.state.isResetting || this.state.willTransition) {
      return;
    }

    if (!this.state.atDefault) {
      this.setState(
        {
          isResetting: true,
          willTransition: true,
          atDefault: true,
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                willTransition: false,
                score: this.state.default,
              },
              () => {
                setTimeout(() => {
                  this.setState({ isResetting: false });
                }, DURATION / 2);
              }
            );
          }, DURATION / 2);
        }
      );
    } else {
      
      let newIndex = 0;
      if (dir === LEFT) {
        newIndex = this.state.defaultIndex + 1;
      } else if (dir === RIGHT) {
        newIndex = this.state.defaultIndex - 1;
      }

      if (newIndex < 0) {
        newIndex = defaultScores.length - 1;
      } else if (newIndex >= defaultScores.length) {
        newIndex = 0;
      }

      this.setState(
        {
          swipeDirection: dir,
          willTransition: true,
        },
        () => {
          setTimeout(() => {
            this.setState({
              willTransition: false,
              defaultIndex: newIndex,
              score: defaultScores[newIndex],
              default: defaultScores[newIndex],
            });
          }, DURATION / 2);
        }
      );
    }
  };

  // RENDERERS
  render() {
    let exitAnim =
      this.state.swipeDirection === LEFT ? "fadeOutLeftBig" : "fadeOutRightBig";
    let enterAnim =
      this.state.swipeDirection === LEFT ? "bounceInRight" : "bounceInLeft";

    if (this.state.isResetting) {
      exitAnim = "flipOutY";
      enterAnim = "flipInY";
    }

    var orientStyle = style.deg0;
    switch (this.state.orientation) {
      case 90:
      case -90:
        orientStyle = style.landscape;
        break;
      case 0:
      default:
        orientStyle = style.portrait;
        break;
    }

    // set body background
    if (this.state.atDefault) {
      document.getElementById("body").className = "default";
    } else {
      if (this.state.score <= this.props.dangerAt) {
        document.getElementById("body").className = "danger";
      } else if (this.state.score <= this.props.warnAt) {
        document.getElementById("body").className = "warning";
      } else {
        document.getElementById("body").className = "normal";
      }
    }

    return (
      <div
        className={classnames(
          style.mc_wrapper,
          orientStyle,
          this.state.atDefault ? style.default : style.normal,
          this.state.score <= this.props.warnAt ? style.warning : "",
          this.state.score <= this.props.dangerAt ? style.danger : ""
        )}
      >
        {/* PLUS BUTTON */}
        <div
          className={classnames(style.button, this.state.plusActive ? style.buttonActive : "")}
          onClick={this.changeBy.bind(this, 1)}
          onTouchStart={() => {this.setState({plusTouch: true});}}
          onTouchEnd={() => {this.setState({plusTouch: false});}}
        >
          <div className={style.icon}>
            <AiFillPlusCircle />
          </div>
        </div>

        {/* SCORE AREA */}
        <Swipeable
          className={classnames(style.area, style.scoreArea)}
          onSwipedLeft={this.scoreSwipe.bind(this, LEFT)}
          onSwipedRight={this.scoreSwipe.bind(this, RIGHT)}
          trackMouse
          trackTouch
          preventDefaultTouchmoveEvent
        >
          <Animated
            className={classnames(style.score)}
            animationIn={enterAnim}
            animationOut={exitAnim}
            isVisible={!this.state.willTransition}
            duration={this.state.isResetting ? DURATION / 2 : DURATION}
            easing={this.state.willTransition ? "ease-in" : "ease"}
          >
            <Animated
              className={style.digit}
              animateOnMount
              animationIn="fadeIn"
            >
              {this.state.score}
            </Animated>
          </Animated>
        </Swipeable>

        {/* MINUS BUTTON */}
        <div
          className={classnames(style.button, this.state.minusActive ? style.buttonActive : "")}
          onClick={this.changeBy.bind(this, -1)}
          onTouchStart={() => {this.setState({minusTouch: true});}}
          onTouchEnd={() => {this.setState({minusTouch: false});}}
        >
          <div className={style.icon}>
            <AiFillMinusCircle />
          </div>
        </div>
      </div>
    );
  }
}

export default magiCount;
