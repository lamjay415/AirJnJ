import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let greetings;
        let { currentUser } = this.props;
        if(currentUser){
            greetings = (
                <div className='greetings'>
                    Welcome, {currentUser}
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        }else{
            greetings = (
                <div className='greetings'>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                </div>
            )
        }

        return greetings;
    }

}

export default Greeting;