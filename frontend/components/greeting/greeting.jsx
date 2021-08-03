import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // debugger
        let { currentUser } = this.props;
        console.log(currentUser);
        const userGreeting = () => {

                return (<div className='greetings'>
                    Welcome, {currentUser.firstName.toUpperCase()}
                    <button onClick={this.props.logout}>Logout</button>
                </div>)
                
        }

        const defaultGreeting = () => {

                return (
                    <div className='greetings'>
                        <Link to='/signup'>Signup</Link>
                        &nbsp;or&nbsp;
                        <Link to='/login'>Login</Link>
                    </div>
                )
        }

        return currentUser ? userGreeting() : defaultGreeting();
    }

}

export default Greeting;