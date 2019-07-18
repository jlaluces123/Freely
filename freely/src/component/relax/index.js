import React from 'react';
import "./relax.css";

/* Component import */
import ReactAudioPlayer from "react-audio-player";

/* Song Imports */
import DeepMeditation from "../../assets/media/David_Fesliyan_Deep_Meditation.mp3";
import QuietMorning from "../../assets/media/David_Fesliyan_Quiet_Morning.mp3";


class Relax extends React.Component {
  state = {
    currentSong: null,
  }

  componentDidMount() {
    this.setState({ currentSong: DeepMeditation });
  }

  onSongEnd = () => {
    if (this.state.currentSong === DeepMeditation) {
      this.setState({ currentSong: QuietMorning });
    } else {
      this.setState({ currentSong: DeepMeditation });
    };
  }

  render() {
    return (
      <div className="relax">
        <ReactAudioPlayer
          className = "audio"
          src = {`${this.state.currentSong}`}
          controls
          autoPlay
          onCanPlay = {console.log("can play")}
          onEnded = {this.onSongEnd}
        />
      </div>
    );
  }
}

export default Relax;