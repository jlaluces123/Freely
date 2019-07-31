import React from 'react';
import "./relax.css";

/* Component import */
import ReactAudioPlayer from "react-audio-player";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

/* Song Imports */
import DeepMeditation from "../../assets/media/David_Fesliyan_Deep_Meditation.mp3";
import QuietMorning from "../../assets/media/David_Fesliyan_Quiet_Morning.mp3";


const content = [
  {
    content: "You should not be carried away by the dictation of the mind, but the mind should be carried by your dictation.",
    author: "A.C Bhaktivedanta Swami",
  },

  {

    content: "As gold purified in a furnace loses its impurities and achieves its own true nature, the mind gets rid of the impurities of the attributes of delusion, attachment and purity through meditation and attains Reality.",
    author: "Adi Shankara",
  },

  {

    content: "If you have time to breathe you have time to meditate. You breathe when you walk. You breathe when you stand. You breathe when you lie down.",
    author: "Ajahn Amaro",
  },

  {

    content: "Accepting the reality of change gives rise to equanimity.",
    author: "Allan Lokos",
  },

  {

    content: "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
    author: "Amit Ray",
  },

];

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
        <Slider>
          {content.map((text, index) => (
            <div className="article" key = {index}>
              <h2 className="article__header">{text.content}</h2>
              <p className="article__author">- {text.author}</p>
            </div>
          ))}
        </Slider>
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