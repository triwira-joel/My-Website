import './home.scss';
import { ArrowDropDown } from "@mui/icons-material";
import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';

let isLoading = true;

export default function Home() {
    const [isHover, setHoverState] = useState(false);
    const [circle, setCircle] = useState(false);
    const style = {
        letterSpacing: isHover ? '6px' : 'normal',
        color: isHover ? 'rgb(0, 13, 255)' : 'royalblue',
        transition: 'all 0.5s ease-in-out',
    };
    useEffect(() => {
        if (!isHover) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setHoverState(false);
        }, 1000);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isHover]);
    const trigger = () => {
        setHoverState(true);
    }
    const website = useRef();
    useEffect(() => {
        if (isLoading) {
            isLoading = false;
            init(website.current, {
                strings: ["Website", "Веб-сайт", "sitio web", "situs web"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                startDelay: 1000,
                loop: true,
            });
        }
    }, []);
    return (
        <div className='home' id='home'>
            <div className='home-content'>
                <div className='home-content-text'>
                    <h1>Hi, I'm <span onMouseEnter={trigger} style={style}>Joel</span>.</h1>
                    <h2>Welcome to my <span ref={website}></span>.</h2>
                </div>
                <div className='magic-circle'>
                    <div className='circle-1' onClick={() => setCircle(!circle)}>
                        <img src={require('../../assets/magic-circle-modified.png')} alt="magic circle" width={'400px'} />
                    </div>
                    <div className={'hover-show ' + (circle + 'active')}>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                    </div>
                </div>
                <div className='home-content-arrow'>
                    <p>More</p>
                    <ArrowDropDown sx={
                        {
                            width: '400px',
                            height: '70px',
                        }
                    } />
                </div>
            </div>
        </div>
    )
}
