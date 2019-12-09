import React from 'react';
import {connect} from 'react-redux';
import {setTextSearch} from '../actions/search';
import {getFirstVideo} from '../actions/video';
import axios from 'axios';
import getResponseByQuery from '../data/youtube';
import YouTube from 'react-youtube';

 
const mapStateToProps = (state) => {
    return { 
        search: state.search
    }
};


const mapDispatchToProps = (dispatch) => {
    return({
        updateSearchBox: (text) => {dispatch(setTextSearch(text))},
        getfirstvideo: (arr) => dispatch(getFirstVideo(arr))
    })
}

class SearchBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }


    handleChange = (e) => {
        let {name,value} = e.target;
        this.props.updateSearchBox(value);
    }

    
    handleBlur = (e) =>  {
        let {name,value} = e.target;
        const endpoint = getResponseByQuery(value);
        axios.get(endpoint)
      .then(res => {
        let {data: {items} } = res;
        this.props.getfirstvideo(items);
      })
    }



  
  
    render = () => (
      <div>
        <input name="searchBox" onBlur={this.handleBlur} onChange={this.handleChange} value={this.props.search} />
    </div>
        )
  }


  export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);