import React from 'react';
import { useHistory } from 'react-router';
import Greeting from '../greeting/greeting';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthdate: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    showErrors(){
        let {errors} = this.props
        if(typeof errors === 'undefined'){
            return null;
        }
        return(
            <div className='session-errors'>
              {errors.map((error, i) => (
                <div key={i}>
                  {error}
                </div>
              ))}
            </div>
          );
    }

    render(){
        let {formType} = this.props;
        let form;
        if(formType === 'signup'){
            form = (
                    <form onSubmit={this.handleSubmit} className='form-elements' id='signup-from'>
                        <div>Email:</div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        <div className='form'>First Name: </div>
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                        <div className='form'>Last Name: </div>
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                        />
                        <div className='form'>Birthdate: </div>
                        <input type="date"
                            value={this.state.birthdate}
                            onChange={this.update('birthdate')}
                        />
                        <div>Password: </div>
                        <input type="text"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                        <input type = "submit" value={this.props.formType} className='form-button'/>
                    </form>
            )
        }else{
            form = (
                <form onSubmit={this.handleSubmit} className='form-elements' id='login-form'>
                    <div>Email:</div>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                    <div>Password: </div>
                    <input type="text"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                    <input type = "submit" value={this.props.formType} className='form-button'/>
                </form>
            )
        }


        return (
            <div className='user-form'>
                <div className='form-header'>  
                    <div id='close-modal' onClick={this.props.closeModal}>x</div>
                    <div className='form-type'>{formType}</div>
                </div>
                <div className='welcome-header'>Welcome to Airjnj</div>
                {this.showErrors()}
                {form}
            </div>
        )
    }

}

export default SessionForm;