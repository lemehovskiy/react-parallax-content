import React, {Component} from 'react';

import ParallaxContent from './ParallaxContent';

class App extends Component {

    render() {

        return (

            <div>
                <section className="section-intro back-img" style={{backgroundImage: `url(${'src/imgs/sample-photo-1.jpg'})`}}>
                    <div className="container">
                        <div className="content-wrap">
                            <ParallaxContent className="title parallax-move" shift={40} duration={3}>
                                Lorem ipsum dolor
                            </ParallaxContent>
                        </div>
                    </div>
                </section>

                <section className="section-features">

                    <div className="container">

                        <ul className="features-list">
                            <li className="feature-item">
                                <div className="content-col">
                                    <ParallaxContent className="title" shift={15} duration={2}>
                                        Lorem ipsum
                                    </ParallaxContent>
                                    <div className="desc">
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </p>
                                    </div>
                                </div>
                                <ParallaxContent className="img-col" duration={2} shift={-15}>
                                    <div className="img-wrap back-img" style={{backgroundImage: `url(${'src/imgs/sample-photo-2.jpg'})`}}>

                                    </div>
                                </ParallaxContent>
                            </li>

                            <li className="feature-item">
                                <div className="content-col">
                                    <ParallaxContent className="title" shift={15} duration={2}>
                                        Lorem ipsum
                                    </ParallaxContent>
                                    <div className="desc">
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </p>
                                    </div>
                                </div>
                                <ParallaxContent className="img-col" duration={2} shift={-15}>
                                    <div className="img-wrap back-img" style={{backgroundImage: `url(${'src/imgs/sample-photo-3.jpg'})`}}>

                                    </div>
                                </ParallaxContent>
                            </li>

                            <li className="feature-item">
                                <div className="content-col">
                                    <ParallaxContent className="title" shift={15} duration={2}>
                                        Lorem ipsum
                                    </ParallaxContent>
                                    <div className="desc">
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </p>
                                    </div>
                                </div>
                                <ParallaxContent className="img-col" duration={2} shift={-15}>
                                    <div className="img-wrap back-img" style={{backgroundImage: `url(${'src/imgs/sample-photo-4.jpg'})`}}>

                                    </div>
                                </ParallaxContent>
                            </li>

                        </ul>
                    </div>

                </section>
            </div>
        );
    }
}

export default App;
