import React from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router';
import { propTypeOpts, propTypeGroupOpts, privacyTypeOpts } from '../../util/dropdown_options_util';
import FormCompleted from '../popup/formCompleted';


class EditForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.props.listing;
        this.state.completed = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const listing = Object.assign({}, this.state);
        this.props.processForm(listing).then(() => this.setState({completed:true}));
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    render(){
        return(
            <div className='listing-edit-content'>
                {this.state.completed ? <FormCompleted formType={this.props.formType}/> : null}
                <form onSubmit={this.handleSubmit} className='edit-form'>
                    <div className='form-category'>Photos 
                        <div className='form-photos'>
                            {this.state.photoUrls.map((src,indx)=>{
                                return <img src={src} key={`img${indx}`} />
                            })}
                        </div>
                    </div>
                    <div className='form-category'>Listing basics 
                        <div>Listing title  
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </div>
                        <div>Listing description  
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                                rows='10'
                            />
                        </div>
                        <div className='form-num-field'>Number of guests:
                            <input type="number"
                                value={this.state.maxGuests > 0 ? this.state.maxGuests : ''}
                                onChange={this.update('maxGuests')}
                            />
                        </div>
                    </div>
                    <div className='form-category'>Amenities
                        <div>What you offer
                            <input type="text"
                                value={this.state.amenities}
                                onChange={this.update('amenities')}
                            />
                        </div>
                    </div>
                    <div className='form-category'>Location
                        <div>Address
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                            />
                        </div>
                    </div>
                    <div className='form-category'>Property and rooms
                        <div>Property Type Group
                            <Select options={propTypeGroupOpts} defaultValue={{label:this.state.propertyTypeGroup, value:this.state.propertyTypeGroup}} onChange={(e)=> this.setState({propertyTypeGroup: e.value})}/>
                        </div>
                        <div>Property Type
                            <Select options={propTypeOpts[this.state.propertyTypeGroup]} defaultValue={{label:this.state.propertyType, value:this.state.propertyType}} onChange={(e)=> this.setState({propertyType: e.value})}/>
                        </div>
                        <div>Privacy Type
                            <Select options={privacyTypeOpts} defaultValue={{label:this.state.privacyType, value:this.state.privacyType}} onChange={(e)=> this.setState({privacyType: e.value})}/>
                        </div> 
                        <div className='form-num-field'>Bedrooms:  
                            <input type="number"
                                value={this.state.numBedrooms> 0 ? this.state.numBedrooms : ''}
                                onChange={this.update('numBedrooms')}
                            />
                        </div>
                        <div className='form-num-field'>Beds:  
                            <input type="number"
                                value={this.state.numBeds > 0 ? this.state.numBeds : ''}
                                onChange={this.update('numBeds')}
                            />
                        </div>
                        <div className='form-num-field'>Bathrooms:  
                            <input type="number"
                                value={this.state.numBathrooms> 0 ? this.state.numBathrooms : ''}
                                onChange={this.update('numBathrooms')}
                            />
                        </div>
                    </div>
                    <div className='form-category'>Pricing
                        <div className='form-num-field'>Nightly price
                            <input type="number"
                                value={this.state.price > 0 ? this.state.price : ''}
                                onChange={this.update('price')}
                            />
                        </div>
                    </div>
                    <input type = "submit" value='Update' className='form-button'/>
                </form>
            </div>
        )
    }
}

export default withRouter(EditForm);