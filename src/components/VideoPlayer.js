import React,{Fragment} from 'react';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import VideoDetails from './VideoDetails';

const mapStateToProps = (state) => {
  return { 
      video: state.video
  }
};




class VideoPlayer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        playPause : false,
        opts : {
          height: '390',
          width: '640',
          playerVars: { 
            autoplay: 0
          }
        }
      };
      this.Video1 = React.createRef()
    }


    handleClick = () => {
      if (!this.state.playPause) {
      this.Video1.current.internalPlayer.playVideo();
      this.setState({
        playPause : true
      })
      }else {
        this.Video1.current.internalPlayer.pauseVideo();
        this.setState({
          playPause : false
        })
      }
    }
  

  
    render() {
      return (
        this.props.video  !== null ? (
          <Fragment>
            <YouTube
            ref={this.Video1}
            videoId={this.props.video.id.videoId}
            opts={this.state.opts}
            className="videoComponent"
          />
          <button onClick={this.handleClick}>{!this.state.playPause ? "Play" : "Pause" }</button>
          <VideoDetails detail={this.props.video} />
          </Fragment>
          ) : null
      );
    }
  }


  export default connect(mapStateToProps)(VideoPlayer);