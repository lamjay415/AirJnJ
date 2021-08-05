import React from 'react';
import { Link } from 'react-router-dom';

class ListingForm extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const listing = Object.assign({}, this.state);
        this.props.processForm(listing).then(this.props.history.push('/hostings'));
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    render(){
        return (
            <div className='listing-form-container'>
                <div className='form-graphics'>
                    <Link to='/' className='link'>airjnj</Link>
                    <div className='graphics-text'>Hosting makes Airjnj, Airjnj</div>
                </div>
                <div className='form-side-container'>
                    <form onSubmit={this.handleSubmit} className='listing-form'>
                            <div>Property Type Group: </div>
                            <input type="text"
                                value={this.state.property_type_group}
                                onChange={this.update('property_type_group')}
                            />
                            <div>Property Type: </div>
                            <input type="text"
                                value={this.state.property_type}
                                onChange={this.update('property_type')}
                            />
                            <div>Privacy Type: </div>
                            <input type="text"
                                value={this.state.privacy_type}
                                onChange={this.update('privacy_type')}
                            />
                            <div>Location: </div>
                            <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                            />
                            <div>Max Guests:  </div>
                            <input type="number"
                                value={this.state.max_guests}
                                onChange={this.update('max_guests')}
                            />
                            <div>Bedrooms:  </div>
                            <input type="number"
                                value={this.state.num_bedrooms}
                                onChange={this.update('num_bedrooms')}
                            />
                            <div>Beds:  </div>
                            <input type="number"
                                value={this.state.num_beds}
                                onChange={this.update('num_beds')}
                            />
                            <div>Bathrooms:  </div>
                            <input type="number"
                                value={this.state.num_bathrooms}
                                onChange={this.update('num_bathrooms')}
                            />
                            <div>Amenities  </div>
                            <input type="text"
                                value={this.state.amenities}
                                onChange={this.update('amenities')}
                            />
                            <div>Price per day:  </div>
                            <input type="text"
                                value={this.state.price}
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