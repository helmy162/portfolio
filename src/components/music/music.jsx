import React, { Component } from "react"

export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    const audio2 = document.getElementById("myaudio");
    audio2.volume = 0.05;
  }

  render() {
    return (
      <div>
        <audio className="audio-element" id="myaudio">
          <source src="https://sndup.net/n4mj/d"></source>
        </audio>
      </div>
      
    )
    
  }

  

}