import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import Fullscreen from '../components/full-screen';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }

    togglePlay = () => {
        this.setState({
            pause: !this.state.pause
        })

    }

    componentDidMount = () => {
      this.setState({
          pause: !this.props.autoplay
      })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value 
    }
    
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        }
    }

    setRef = element => {
        this.player = element;
    }

    formattedTime(secs) {
        const minutes = parseInt(secs / 60, 10);
        const seconds = ~~parseInt(secs % 60,10);
        const secondsParse = seconds.toString().length < 2? "0" + seconds.toString() : seconds.toString();
        return `${minutes} : ${secondsParse}`
    }

    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title
                    title={this.props.title}
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                  
                    <Timer 
                        duration={this.formattedTime(this.state.duration)}
                        currentTime={this.formattedTime(this.state.currentTime)}
                    />
                     <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                     />
                     <Volume
                        handleVolumeChange={this.handleVolumeChange}
                     />
                     <Fullscreen
                        handleFullScreenClick={this.handleFullScreenClick}
                     />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video 
                    pause={this.state.pause}
                    autoplay={false}
                    src={this.props.src}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
              
            </VideoPlayerLayout>
        )
    }

}

export default VideoPlayer;