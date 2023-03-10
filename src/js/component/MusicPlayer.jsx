import React, {useState, useRef} from "react";
import { FaPlay , FaStepBackward , FaStepForward , FaPause } from "react-icons/fa";


const MusicPlayer = () => {

    const [playingSong, setPlayingSong] = useState( [
        { "id":1, "category":"game", "name":"Mario Castle", "url":"files/mario/songs/castle.mp3"},
        { "id":2, "category":"game", "name":"Mario Star", "url":"files/mario/songs/hurry-starman.mp3"},
        { "id":3, "category":"game", "name":"Mario Overworld", "url":"files/mario/songs/overworld.mp3"},
    
    ]);

    let playingSongRef = useRef();

    const [playing, setPlaying] = useState(null);

    const playlist = playingSong.map((track, i) => {
        const url = track.url
        return (
        <li key={i}>
            <button onClick={() => {playingSongRef.src ="https://assets.breatheco.de/apis/sound/" + url; setPlaying(i)}}>
                {track.name}
           </button>
        </li>)

        });

    const [icono, setIcono] = useState(<FaPlay />)

    function playSong() {
        if(playingSongRef.paused){
            playingSongRef.play();
            setIcono(<FaPause />)
        } else {
            playingSongRef.pause();
            setIcono(<FaPlay />);
        }
    }

    function nextSong() {
        if(playing === null || playing === playingSong.length - 1){
            playingSongRef.src ="https://assets.breatheco.de/apis/sound/" + playingSong[0].url;
            setPlaying(0)
            playSong();
            return;
        } else {
            playingSongRef.src ="https://assets.breatheco.de/apis/sound/" + playingSong[playing + 1].url;
            playSong();
            setPlaying(playing + 1)
        }
    }

    function previousSong() {
        if(playing === null || playing === 0){
            playingSongRef.src ="https://assets.breatheco.de/apis/sound/" + playingSong[playingSong.length - 1].url;
            setPlaying(playingSong.length - 1)
            playSong();
            return;
        } else {
            playingSongRef.src ="https://assets.breatheco.de/apis/sound/" + playingSong[playing - 1].url;
            playSong();
            setPlaying(playing - 1);
        }
    }

    return (
        <>
            <div className="list">
                <ol>
                    <span onClick={playSong}>{playlist}</span>
                </ol>
            </div>
            <audio ref={e => playingSongRef = e}></audio>
            <div className="buttons ">
                <button className="backward" onClick={previousSong}> <FaStepBackward /> </button>
                <button className="play" onClick={playSong}> {icono } </button>
                <button className="forward" onClick={nextSong}> <FaStepForward /> </button>             
            </div>
        </>
    )
};

export default MusicPlayer;