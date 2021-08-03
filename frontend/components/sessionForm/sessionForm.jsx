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
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    render(){
        let {formType} = this.props;
        let form;
        if(formType === 'signup'){
            form = (
                <div>
                    <div className='form'>First Name: 
                        <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                        />
                    </div>
                    <div className='form'>Last Name: 
                        <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        />
                    </div>
                    <div className='form'>Birthdate: 
                        <input type="date"
                        value={this.state.birthdate}
                        onChange={this.update('birthdate')}
                        />
                    </div>
                </div>
            )
        }


        return (
            <div>
                <h1>{formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form'>Email: 
                        <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </div>
                    {form}
                    <div className='form'>Password: 
                        <input type="text"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </div>
                        <input type = "submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }

}

export default SessionForm;