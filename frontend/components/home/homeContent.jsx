import { Link,withRouter } from "react-router-dom";
import React from 'react';

const HomeContent = (props) => (
    <div className='home-body-container'>
        <div className='home-content'>
            <div className='home-header'>Explore Popular Places</div>
            <div className='home-links'>
                <div className='link-div'>
                    <img className='quick-link' onClick={() => console.log(props.history.push('/search/San Francisco'))}
                        src='https://a0.muscache.com/im/pictures/69599d82-6ea3-40b6-a5b3-81f84addba6a.jpg?im_q=medq&im_w=240'
                    />
                    <div className='link-text'>San Francisco</div>
                </div>
                <div className='link-div'>
                    <img className='quick-link' onClick={() => console.log(props.history.push('/search/New York'))}
                        src='https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg?im_q=medq&im_w=240'
                    />
                    <div className='link-text'>New York</div>
                </div>
                <div className='link-div'>
                    <img className='quick-link' onClick={() => console.log(props.history.push('/search/Hawaii'))}
                        src='https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240'
                    />
                    <div className='link-text'>Hawaii</div>
                </div>
            </div>
        </div>
    </div>
);

export default withRouter(HomeContent);