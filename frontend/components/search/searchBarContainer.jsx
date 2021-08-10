import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.state.searchLocation = '';
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(e){
        this.setState({searchLocation:[e.currentTarget.value]});
    }

    handleClick(){
        this.props.history.push(`search/${this.state.searchLocation}`);
    }

    componentDidMount(){
        let autocomplete;
        function initAutoComplete(){
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('autocomplete'),
                {
                    types: ['city'],
                    componentRestrictions: {'country': ['USA']},
                    fields: ['place_id', 'geometry', 'name']
                }
            );
            autocomplete.addListener('place_changed', onPlaceChanged);
        }
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