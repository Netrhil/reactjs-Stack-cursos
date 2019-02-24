import React, { Component } from 'react'
import {
    StyleSheet,
    ActivityIndicator,
    Text
   } from 'react-native';

import Layout from '../components/video-layout';
import Video from "react-native-video";
import ControlLayout from "../components/control-layout";
import PlayPause from "../components/play-pause";

export default class Player extends Component {
    state = {
        loading: true,
        paused: false
    }
    
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

  render() {
    return (
        <Layout
            video={
                <Video
                    source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                    style={styles.video}
                    resizeMode="contain"
                    onBuffer={this.onBuffer}
                    paused={this.state.paused}
                />
            }
            loader={
                <ActivityIndicator color="#70b124"/>
            }
            loading={this.state.loading}
            controls={
                <ControlLayout>
                    <PlayPause
                        onPress={this.playPause}
                        paused={this.state.paused}
                    />
                    <Text> Progress bar </Text>
                    <Text> Progress bar </Text>
                    <Text> Progress bar </Text>
                </ControlLayout>
            }
        >
            
        </Layout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
     position: 'absolute',
     left: 0,
     right: 0,
     bottom: 0,
     top: 0
  }
})


