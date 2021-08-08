import React from 'react';
import { Link } from 'react-router-dom';
import { Button, notification } from 'antd';

class FormCompleted extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        let message = '';

        if(this.props.formType === 'Create Listing'){
            message = 'created';
        }else{
            message = 'updated'
        }
        return(
            <div className='form-popup'>
                <div>Listing has been successfully {message}!</div>
                <Link to='/hostings'>Back to Listings</Link>
            </div>
        )
    }

}

export default FormCompleted;