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

const DURATION = 400;

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
    transitionScore: false,
  };

  componentDidMount() {
    this.setState({ isResetting: false });
  }

  // FUNCITONS
  changeBy = (amt) => {
    // use NEGATIVES to decrement
    this.setState({
      atDefault: false,
      score: this.state.score + amt,
    });
  };

  scoreSwipe = (dir) => {
    if (!this.state.atDefault) {
      this.setState(
        {
          isResetting: true,
          transitionScore: true,
          atDefault: true,
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                transitionScore: false,
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
          transitionScore: true,
        },
        () => {
          setTimeout(() => {
            this.setState({
              transitionScore: false,
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

    return (
      <div
        className={classnames(
          style.mc_wrapper,
          this.state.atDefault ? style.default : style.normal,
          this.state.score <= this.props.warnAt ? style.warning : "",
          this.state.score <= this.props.dangerAt ? style.danger : ""
        )}
      >
        {/* PLUS BUTTON */}
        <div
          className={classnames(style.button, style.plusButton)}
          onClick={this.changeBy.bind(this, 1)}
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
            animationIn={this.state.isResetting ? "shake" : enterAnim}
            animationOut={this.state.isResetting ? "shake" : exitAnim}
            isVisible={!this.state.transitionScore}
            duration={DURATION}
            easing={this.state.transitionScore ? "ease-in" : "ease"}
          >
            {this.state.score
              .toString()
              .split("")
              .map((digit, index) => {
                return (
                  <span key={index} className={style.digit}>
                    {digit}
                  </span>
                );
              })}
          </Animated>
        </Swipeable>

        {/* MINUS BUTTON */}
        <div
          className={classnames(style.button, style.minusButton)}
          onClick={this.changeBy.bind(this, -1)}
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
