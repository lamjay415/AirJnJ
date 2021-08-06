import React from 'react';

class HostingDetail extends React.Component{
    
    constructor(props){
        super(props);
    }

    // componentDidMount(){
        
    // }

    render(){
        const {hosting} = this.props;
        return (
            <div className='hosting-item'>
                <div>Title: {hosting.title}</div>
                <div>Description: {hosting.description}</div>
                <div>Location: {hosting.location}</div>
                <div>Price: {hosting.price}</div>
            </div>
        )
    }
}

export default HostingDetail;