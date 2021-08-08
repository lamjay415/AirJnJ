import React from 'react';
import { Link } from 'react-router-dom';

class FormCompleted extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='form-popup'>
                <div>Form has been updated!</div>
                <Link to='/hostings' className='form-button'>Back to Listings</Link>
            </div>
        )
    }

}

export default FormCompleted;