import React, {Component} from 'react';
import './App.css';

import ParallaxContent from './ParallaxContent';

class App extends Component {

    render() {

        return (
            <div>
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="spacer"></div>

                <ParallaxContent>
                    Test1
                </ParallaxContent>

                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="spacer"></div>
            </div>
        );
    }
}

export default App;
