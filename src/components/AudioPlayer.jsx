import React, { useState, useRef, useEffect } from "react";
import { PiPlayLight, PiPauseLight } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

const AudioPlayer = ({ audioUrl, closeAudio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(88);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current.load();
      setCurrentTime(0);
      setIsPlaying(false);
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="bg-gray-800 p-6 border-2 border-gray-900 rounded-xl text-white w-[36vw]">
      <div className="text-start mb-6">
        <h3 className="text-xl opacity-90 font-bold mb-1">Listen Call</h3>
        <p className="text-sm text-gray-400">Playback audio for analysis</p>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src={audioUrl}
      ></audio>
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-2xl flex justify-center items-center transition-all duration-200"
        >
          {isPlaying ? <PiPauseLight /> : <PiPlayLight />}
        </button>
        <div className="flex-1 flex flex-col">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="appearance-none h-1 bg-gray-600 rounded-full cursor-pointer outline-none hover:bg-gray-500 transition-all"
          />
          <div className="flex mt-4 justify-between text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={closeAudio}
        className="absolute top-2 right-2 text-white text-xl bg-gray-600 p-2 rounded-full hover:bg-gray-700"
      >
        <IoIosClose />
      </button>
    </div>
  );
};

export default AudioPlayer;
