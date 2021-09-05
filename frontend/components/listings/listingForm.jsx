import React from 'react';
import { Link } from 'react-router-dom';
import { $CombinedState } from 'redux';
import FormCompleted from '../popup/formCompleted';

class ListingForm extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.listing;
        this.state.completed = false;
        this.state.previewPics = [];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        const {photos} = this.state;
        formData.append('listing[user_Id]', this.state.user_id);
        formData.append('listing[title]', this.state.title);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[property_type_group]', this.state.propertyTypeGroup);
        formData.append('listing[property_type]', this.state.propertyType);
        formData.append('listing[privacy_type]', this.state.privacyType);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[location]', this.state.location);
        formData.append('listing[max_guests]', this.state.maxGuests);
        formData.append('listing[num_bedrooms]', this.state.numBedrooms);
        formData.append('listing[num_bathrooms]', this.state.numBathrooms);
        formData.append('listing[num_beds]', this.state.numBeds);
        formData.append('listing[amenities]', this.state.amenities);
        for(let i = 0; i < photos.length; i++){
            formData.append("listing[photos][]", photos[i]);
        }
        $.ajax({
            url: '/api/listings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then((() => this.setState({completed:true})));
        // const listing = Object.assign({}, this.state);
        // this.props.processForm(listing).then(() => this.setState({completed:true}));
    }


    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value}, ()=>console.log(this.state));
        };
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        // const preview = document.querySelector('img');
        let photos = this.state.photos;
        reader.onloadend = () => {
            photos.push(file);
            this.setState({ imageUrl: reader.result, photos: photos });
            this.createPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", photos: this.state.photos });
        }
    }

    createPreview(src){
        let previews = this.state.previewPics;
        previews.push(src);
        this.setState({previewPics: previews});
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
                            {/* <input type="text"
                                value={this.state.propertyTypeGroup}
                                onChange={this.update('propertyTypeGroup')}
                            /> */}
                            <select defaultValue='--Select One--' onChange={this.update('propertyTypeGroup')}>
                                {/* <option value='' disabled selected>--Select One--</option> */}
                                <option value='Apartment'>Apartment</option>
                                <option value='House'>House</option>
                                <option value='Secondary Unit'>Secondary Unit</option>
                                <option value='Unique Space'>Unique Space</option>
                                <option value='Hotel/Motel'>Hotel/Motel</option>
                            </select>
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
                                value={this.state.maxGuests > 0 ? this.state.maxGuests : ''}
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
                            <div>
                            {this.state.previewPics.map((src,indx)=>{
                                return <img src={src} key={`img${indx}`} height='75'/>
                            })}
                            </div>
                            {this.props.formType==='Create Listing' ? (
                                <input 
                                    type ="file"
                                    onChange={this.handleFile}
                                    multiple
                                />
                            ) : null }
                            <input type = "submit" value={this.props.formType} className='form-button'/>
                        </form>
                    </div>
                </div>
        )
    }

}
export default ListingForm;