import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import './style.css';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.state.searchLocation = '';
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.initAutocomplete = this.initAutocomplete.bind(this);
    }

    update(e){
        this.setState({searchLocation:[e.currentTarget.value]});
    }

    handleClick(){
        if(this.state.searchLocation=== ''){
            document.getElementById('autocomplete').setAttribute('placeholder','Try searching for a city!');
        }else{
            this.props.history.push(`search/${this.state.searchLocation}`);
        }
    }

    componentDidMount(){
        this.initAutocomplete();
    }
    
    initAutocomplete(){
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            {
                componentRestrictions: {'country': ['us']},
                fields: ['place_id', 'geometry', 'name']
            }
        );
        autocomplete.addListener('place_changed', ()=>{
            let place = autocomplete.getPlace();
            if(!place.geometry){
                document.getElementById('autocomplete').placeholder = 'Try entering a city'
            }else{
                document.getElementById('autocomplete').value = place.name;
                this.setState({searchLocation:[place.name]});
                this.handleClick();
            }
        });
    }


    render(){
        return (
            <div className='searchBar-container'>
                <div className='search-div'>
                    <div className='search-text'>Location </div>
                    <input type='text' onChange={this.update} placeholder='Where are you going?' className='search-input' id='autocomplete'/>
                </div>
                <div className='search-button' onClick={this.handleClick}>
                    Search
                </div>
            </div>
        )
    }

}

export default withRouter(SearchBar);