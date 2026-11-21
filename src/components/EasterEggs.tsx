import { useRef, useState } from "react";
import YouTube from "react-youtube";
import { FaPlay, FaPause } from "react-icons/fa";

const SONGS = [
  {
    videoId: "AMnWZN5bqfw", // Triangle Strategy OST - Battle Theme 10
    label: "Benedict's Path",
    link: "https://triangle-strategy.fandom.com/wiki/Benedict_Pascal",
  },
  {
    videoId: "iYZIUtDAFIw", // My Hero Academia OST - You Say Run
    label: "You Say Run",
    link: "https://www.youtube.com/watch?v=iYZIUtDAFIw",
  },
  {
    videoId: "kzjmIpZNR-g", // Fullmetal Alchemist OST - Laws of Alchemy
    label: "Laws of Alchemy",
    link: "https://www.youtube.com/watch?v=kzjmIpZNR-g",
  },
];

// Picks a random song, avoiding `exclude` when there's another option.
function randomSong(exclude?: number) {
  const choices = SONGS.map((_, i) => i).filter(
    (i) => i !== exclude || SONGS.length === 1
  );
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function Yahaha() {
  return (
    <div className="eggs">
      <a
        className="yahaha"
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=zw47_q9wbBE"
      >
        Yahaha! You found me!
      </a>
    </div>
  );
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(() => randomSong());
  const playerRef = useRef<any>(null);
  // Kept fixed: react-youtube re-cues (and stops) the player whenever its
  // videoId prop changes, so songs are switched through loadVideoById instead.
  const initialVideoId = useRef(SONGS[current].videoId).current;

  const playSong = (index: number) => {
    setCurrent(index);
    // loadVideoById starts the song from the beginning
    playerRef.current.loadVideoById(SONGS[index].videoId);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playSong(randomSong());
    }
  };

  const song = SONGS[current];

  return (
    <div className="eggs-player">
      {isPlaying && (
        <a className="pill" target="_blank" rel="noreferrer" href={song.link}>
          {song.label}
        </a>
      )}
      <button
        className="play-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
      </button>

      <div style={{ display: "none" }}>
        <YouTube
          videoId={initialVideoId}
          opts={{ playerVars: { autoplay: 0 } }}
          onReady={(e) => (playerRef.current = e.target)}
          onEnd={() => playSong(randomSong(current))}
        />
      </div>
    </div>
  );
}
