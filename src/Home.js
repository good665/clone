import React from 'react';
import './Home.css';
import Product from "./Product"

function Home() {
    return (
        <div classNme='home'>
            <div className="home__container">
                <img 
                className="home__image"
                src="https://image9.coupangcdn.com/image/ccm/banner/00b68bb2d92bcbb980348d694d0641fe.jpg"alt=""/>

                <div className="home__row">
                    <Product id ="123" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={3}/>
                    <Product id ="124" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={3}/>
                </div>

                <div className="home__row">
                <Product id ="125" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={3}/>
                <Product id ="126" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={4}/>
                <Product id ="127" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={5}/>
                </div>

                <div className="home__row">
                <Product id ="128" title='The lean startup' price={29.99} image = "https://static.coupangcdn.com/la/cmg_paperboy/image/1625796369481/C2_1_%EC%95%84%EC%86%8C%EB%A6%AC%EB%B9%99.jpg" rating={3}/>
                </div>

            </div>
        </div>
    )
}

export default Home
