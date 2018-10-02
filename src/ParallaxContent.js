import React, {Component, PureComponent} from 'react'
import ReactDOM from 'react-dom';

import {TweenLite} from "gsap/TweenMax";

class ParallaxContent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            val: 0,
            isOnScreen: false
        }

        this.dom = {};
    }

    componentDidMount() {
        this.dom.root = ReactDOM.findDOMNode(this);
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        let self = this;

        let clientRect = this.dom.root.getBoundingClientRect();

        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;
        let triggerPosition = scrollTop + windowHeight;

        let elementHeight = clientRect.height;
        let elementOffsetTop = clientRect.top + scrollTop;

        let animationTriggerStart = elementOffsetTop;
        let animationTriggerEnd = animationTriggerStart + windowHeight;

        let animationLength = animationTriggerEnd - animationTriggerStart;

        if (triggerPosition > animationTriggerStart && triggerPosition < animationTriggerEnd + elementHeight) {
            this.handleIsOnScreen(true);
        }

        else {
            this.handleIsOnScreen(false);
        }

        if (this.state.isOnScreen) {
            self.animate(self.getElementAnimatePosition({
                triggerPosition: triggerPosition,
                elementOffsetTop: elementOffsetTop,
                animationLength: animationLength
            }));
        }
    }

    animate(y) {
        TweenLite.to(this.dom.root, 0.3, {y: y + 'px'});
    }

    getElementAnimatePosition(options) {
        let centerPixelShift = options.triggerPosition - options.elementOffsetTop - (options.animationLength * 0.5),
            centerPercentShift = centerPixelShift / (options.animationLength / 100) * 2;

        return 50 / 100 * centerPercentShift;
    }

    handleIsOnScreen(isOnScreen) {
        if (!this.state.isOnScreen && isOnScreen) {
            this.setState({
                isOnScreen: true
            })
        }
        else if (this.state.isOnScreen && !isOnScreen) {
            this.setState({
                isOnScreen: false
            })
        }
    }

    render() {
        return (
            <div className="parallax-content">
                <div className="parallax-content-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ParallaxContent