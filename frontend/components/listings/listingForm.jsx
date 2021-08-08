import React from 'react';
import { Link } from 'react-router-dom';
import FormCompleted from '../popup/formCompleted';

class ListingForm extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.listing;
        this.state.completed = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const listing = Object.assign({}, this.state);
        this.props.processForm(listing).then(() => this.setState({completed:true}));
        console.log(this.state);
    }


    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        return (
            <div className='listing-form-container'>
                {this.state.completed ? <FormCompleted formType={this.props.formType}/> : null}
                <div className='form-graphics'>
                    <Link to='/' className='link'>airjnj</Link>
                    <div className='graphics-text'>Hosting makes Airjnj, Airjnj</div>
                </div>
                <div className='form-side-container'>
                    <form onSubmit={this.handleSubmit} className='listing-form'>
                            <div>Property Type Group: </div>
                            <input type="text"
                                value={this.state.propertyTypeGroup}
                                onChange={this.update('propertyTypeGroup')}
                            />
                            <div>Property Type: </div>
                            <input type="text"
                                value={this.state.propertyType}
                                onChange={this.update('propertyType')}
                            />
                            <div>Privacy Type: </div>
                            <input type="text"
                                value={this.state.privacyType}
                                onChange={this.update('privacyType')}
                            />
                            <div>Location: </div>
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                            />
                            <div>Max Guests:  </div>
                            <input type="number"
                                value={this.state.maxGuests > 0 ? this.state.MaxGuests : ''}
                                onChange={this.update('maxGuests')}
                            />
                            <div>Bedrooms:  </div>
                            <input type="number"
                                value={this.state.numBedrooms> 0 ? this.state.numBedrooms : ''}
                                onChange={this.update('numBedrooms')}
                            />
                            <div>Beds:  </div>
                            <input type="number"
                                value={this.state.numBeds > 0 ? this.state.numBeds : ''}
                                onChange={this.update('numBeds')}
                            />
                            <div>Bathrooms:  </div>
                            <input type="number"
                                value={this.state.numBathrooms> 0 ? this.state.numBathrooms : ''}
                                onChange={this.update('numBathrooms')}
                            />
                            <div>Amenities  </div>
                            <input type="text"
                                value={this.state.amenities}
                                onChange={this.update('amenities')}
                            />
                            <div>Price per day:  </div>
                            <input type="number"
                                value={this.state.price > 0 ? this.state.price : ''}
                                onChange={this.update('price')}
                            />
                            <div>Title:  </div>
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                            <div>Description  </div>
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                            <input type = "submit" value={this.props.formType} className='form-button'/>
                        </form>
                    </div>
                </div>
        )
    }

}
export default ListingForm;