import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{

    constructor(props){
        super(props);
        // this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount(){
        this.toggleMenu();
    }

    toggleMenu = () => {
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.display = 'none';
        let menu_button = document.getElementsByClassName('menu-button')[0];
        menu_button.addEventListener('click', () => {
            menu.style.display === 'none' ? menu.style.display = 'flex' : menu.style.display = 'none';  
        });
    }

    render(){
        
        let { currentUser, openModal } = this.props;
        const userGreeting = () => {

                return (
                    <div className='menu' >
                        <Link to='/hostings' className='link'>Manage Listings</Link>
                        <Link to='/trips' className='link'>My Trips</Link>
                        <div className='menu-element-button'onClick={this.props.logout}>Logout</div>
                    </div>
                )
                
        }

        const defaultGreeting = () => {

                return (
                    <div className='menu'>
                        <div className='menu-element-button' onClick={() => openModal('login')}>Login</div>
                        <div className='menu-element-button' onClick={() => openModal('signup')}>Signup</div>
                    </div>
                )
        }

        return (
            <div>
                <div className='menu-button'>
                    <div className='hamburger'></div>
                    <div className='profile-pic'></div>
                </div>
                {currentUser ? userGreeting() : defaultGreeting()}
            </div>
        )
    }

}

export default Greeting;