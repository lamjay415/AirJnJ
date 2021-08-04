import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // debugger
        let { currentUser, openModal } = this.props;
        console.log(currentUser);
        const userGreeting = () => {

                return (
                    <div className='greetings'>
                        {currentUser.firstName.toUpperCase()}
                        <div className='greetings-button'onClick={this.props.logout}>Logout</div>
                    </div>
                )
                
        }

        const defaultGreeting = () => {

                return (
                    <div className='greetings'>
                        <div>User</div>
                        <div className='greetings-button' onClick={() => openModal('login')}>Login</div>
                        <div className='greetings-button' onClick={() => openModal('signup')}>Signup</div>
                    </div>
                )
        }

        return (
            <div>
                {currentUser ? userGreeting() : defaultGreeting()}
            </div>
        )
    }

}

export default Greeting;