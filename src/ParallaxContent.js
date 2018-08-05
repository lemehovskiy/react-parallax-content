import React, {Component, PureComponent} from 'react'
import ReactDOM from 'react-dom';

import {TweenLite, Power2, TimelineLite} from "gsap/TweenMax";

class ParallaxContent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            val: 0
        }

        this.dom = {};
    }

    componentDidMount() {
        this.dom.root = ReactDOM.findDOMNode(this);
        this.update(this.dom.root);
    }

    update(element) {

        let self = this;
        let test = {val: 0}

        TweenLite.to(element, 1, {
            x: 10, onUpdate() {
                self.setState({
                    val: test.val
                })
            }
        })
    }


    render() {

        return (
            <div>
                <div className="parallax" ref={this.myRef}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}


export default ParallaxContent