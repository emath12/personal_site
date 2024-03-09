import './Home.css'
import './NavBar.js'
import OurBar from './NavBar.js'
import Footer from './Footer.js'
import { styled } from '@mui/system';
import ResumeCard from './ResumeCard.js'
import ProjectCard from './ProjectCard.js'
import Grid from '@mui/material/Grid'; // Grid version 1
import placeholder from "../imgs/placeholder.png"
import mint_port from "../imgs/mintporfolio.png"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import WeekifyImg from "../imgs/Weekify.png"
import guiImg from "../imgs/gui.png"
import ymeetsimg from "../imgs/ymeets.png"
import SkillRack from './SkillRack';
import YCSWebsiteImg from "../imgs/ycs-website.png"
import resumePDF from "../EthanMathieu_Feb2024Resume.pdf"
import { IoIosPaper } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function AboutMe() {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = 'AMnWZN5bqfw'; // Replace with the actual YouTube video ID
    const playerRef = useRef(null);

    const opts = {
     
        playerVars: {
        // Autoplay the video
        autoplay: 1,
        },
    };

    const onReady = (event) => {
        playerRef.current = event.target;
      };
    
      const togglePlayPause = () => {
        if (playerRef.current) {
          const playerState = playerRef.current.getPlayerState();
    
          if (playerState === 1) {
            // If the player is currently playing, pause it
            playerRef.current.pauseVideo();
          } else if (playerState === 2 || playerState === 5) {
            // If the player is paused or cued, play it from the beginning
            playerRef.current.seekTo(0);
            playerRef.current.playVideo();
          }
    
          setIsPlaying(!isPlaying);
        }
      };
    return (
        <>
            
            <div className="flex items-center justify-between pr-4">
        <a target="_blank" href="https://www.youtube.com/watch?v=zw47_q9wbBE">
          <h2 className="opacity-5 underline">Yahaha! You found me!</h2>
        </a>

        <button onClick={togglePlayPause} className="ml-auto">
          {isPlaying ? <FaPause size={30} color="white" /> : <FaPlay size={30} color="white" />}
        </button>
      </div>

            <div className='m-20 font-robot font-medium'>
                <div className="text-4xl">
                    <h1 className='text-white leading-65'>
                        <span className='highlight'>My name is <span className="no-drop">Ethan Mathieu.</span></span>
                        <br/>
                        I'm studying Computer & Data Science at <br/> Yale University.
                        <br />
                    </h1> 
                    <h6 className='text-sm mt-3 italic text-white'>
                    I think building things is cool!
                    </h6>

                    <div className="hidden">
                        <YouTube videoId={videoId} opts={opts} onReady={(e) => (playerRef.current = e.target)} />

                    </div>
                    
                
                </div>
            </div>
        </>
    )
}

function Page() {  

    return (  
        <>
            <AboutMe />

            <div className="center-obj">
                <div className="down-arrow"></div>
            </div>



            <div className='bg-white justify-center items-center mt-72 flex'>
                <h4 className='m-30 w-1/2 m-5 text-xl'>
                    Hello! My name is Ethan Mathieu and I’m a Junior at Yale majoring in Computer Science 
                    and minoring in Data Science. 
                    <br/>
                    <br/>
                    I'm the son of two Haitian-American immigrants. I was drawn to engineering
                    due to a love for tinkering and uncovering ways to accomplish tasks and
                    solve problems efficiently. Over the years, I've learned that data tells a story
                    and software gives us the capability to convert that into action and meaning.
                    
                    I've built scalable web-apps, engineered custom OS improvements and designed products. 
                    Working with other people, though, is the best part of the job of the job for me. 
                    <br/> 
                    <br/>
                    
                    <strong>I'm interested New Grad & Fall 2024 Software Engineering opportunties.</strong>
                 
                    <br/>
                    <br/>
                    Please feel free to contact me with the socials at the bottom of my site; I always reply within
                    24 hours unless on break. And while you're here, check out some of the things I've done!
                    
                    <br/>
                    <br/>

                    <div className='flex justify-center items-center'>
                        <div className='flex flex-row'>
                            <a target='_blank' rel='noopener noreferrer' href={resumePDF} className='text-center underline font-bold'>
                            <IoIosPaper 
                                size={60}
                                className='mr-2'
                            />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/ethan-mathieu/">
                            <FaLinkedin 
                                size={60}
                                className='mr-2'
                            />
                            </a>
                            <a target="_blank" href="https://github.com/emath12">
                                <FaGithubSquare
                                    size={60}
                                    className='mr-2'
                                />
                            </a>
                            <a href="mailto:ethan.mathieu@yale.edu">
                                <MdOutlineEmail 
                                    size={60}
                                    className='mr-2'
                                />

                            </a>

                        </div>
                    </div>
                </h4>  
            </div>

            <Footer/>

            
        </>
    )
    
}

export default Page; 
