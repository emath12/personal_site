import './Home.css'
import '../deprecated/NavBar.js'
import Footer from './Footer.js'
import ymeetsimg from "../imgs/ymeets.png"
import YCSWebsiteImg from "../imgs/ycs-website.png"

import { IoIosPaper } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdOutlineNotes } from "react-icons/md";
import { GiFireworkRocket } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";


function AboutMe() {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = 'AMnWZN5bqfw'; // Replace with the actual YouTube video ID
    const playerRef = useRef(null);

    const opts = {
     
        playerVars: {
        // Autoplay the video
        autoplay:0,
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
            
        <div className="flex items-center justify-between pr-4 w-screen">
            <a target="_blank" href="https://www.youtube.com/watch?v=zw47_q9wbBE">
            <h2 className="opacity-5 underline">Yahaha! You found me!</h2>
            </a>
            <button onClick={togglePlayPause} className="ml-auto">
            {isPlaying ? <FaPause size={30} color="white" /> : <FaPlay size={30} color="white" />}
            </button>
            <br></br>
            {isPlaying && <a href="https://triangle-strategy.fandom.com/wiki/Benedict_Pascal"><p className='text-white ml-3 bg-gray-700 p-2 rounded-lg opacity-90 drop-shadow-lg'>Benedict's Path</p></a>}
        </div>

        <div className="m-6 mb-0 lg:m-20 md:m-20 sm:m-20 w-full font-medium">

            <div className='flex flex-row'>
                <div className="lg:text-4xl text-2xl">
                    <h1 className='text-white lg:leading-65 leading-10'>
                        <span className='highlight'>My name is <span className="no-drop">Ethan Mathieu.</span></span>
                        <br/>
                        I'm studying Computer & Data Science <br/> at Yale University.
                        <br />

                        {/* <a href="/notes">
                            <div className='flex flex-row mb-3 mt-3'>
                                <PiNotePencilBold 
                                    size={30}
                                />
                                <p className='sm:text-md text-lg ml-2'>Notes on what I'm learning, updated live</p>
                            </div>
                        </a>
                        <a href="/fun">
                            <div className='flex flex-row mb-3'>
                                <GiFireworkRocket 
                                    size={30}
                                />
                                <p className='sm:text-md md:text-md text-lg ml-2'>Random stuff!</p>
                            </div>
                        </a>
                        <a href="/fun">
                            <div className='flex flex-row mb-3'>
                                <MdConstruction 
                                    size={30}
                                />
                                <p className='sm:text-md md:text-md text-lg ml-2'>Stuff I'm working on</p>
                            </div>
                        </a> */}

                        
                    </h1> 
            
                    <div className="hidden">
                        <YouTube videoId={videoId} opts={opts} onReady={(e) => (playerRef.current = e.target)} />

                    </div> 
                </div>
            
            </div>
        </div>
        </>
    )
}

function Page() {  

    return (  
        <div>
            <AboutMe />

            <div className='hidden lg:block'>
                <div className="center-obj">
                    <div className="down-arrow"></div>
                </div>
            </div>


            <div className='bg-white w-screen flex items-center justify-center mt-72'>
                <h4 className='lg:m-30 lg:w-1/2 p-4 lg:text-xl text-lg'>
                    Hello! My name is Ethan Mathieu and I’m a Senior at Yale majoring in Computer Science 
                    and minoring in Data Science. 
                    <br/>
                    <br/>
                    I've built scalable web-apps, engineered custom OS improvements and designed products. 
                    Working with other people, though, is the best part of the job of the job for me.                  
                    <br/>
                    <br/>
                    Please feel free to contact me with the socials at the bottom of my site; I always reply within
                    24 hours unless on break. And while you're here, check out some of the things I've done!
                    
                    <h1 className='text-xl font-bold mr-4 underline mt-2 '>Project Headliners</h1>
                    <p className='text-sm italic mr-4'>More stuff is on my GitHub, but these are live! :)</p>
                    
                    <a target="_blank" href="https://ymeets.com">
                        <div className='transition hover:scale-105 drop-shadow-lg rounded-lg p-4 text-black font-bold mb-4 mt-4'
                            style={{
                                backgroundImage: `url(${ymeetsimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the alpha channel (0.5 for 50% opacity)

                              }}
                            
                        >
                            ymeets - yale scheduling made easy
                        </div></a>
                    <a target="_blank" href="https://www.yalecomputersociety.org"><div                       
                        style={{
                        backgroundImage: `url(${YCSWebsiteImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the alpha channel (0.5 for 50% opacity)

                      }} className='rounded-lg drop-shadow-lg transition hover:scale-105 p-4 text-white font-bold mb-4 mt-4'>Yale Computer Society Website</div></a>
                    <br />

                    <div className='flex justify-center items-center'>
                        <div className='flex flex-row'>
                            
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

            
        </div>
    )
    
}

export default Page; 
