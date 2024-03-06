import { useState } from 'react';
import useSound from 'use-sound'; //nmp install use-sound -m
import music from '../assets/sound/sound.mp3';

export function Sound(){
    const [isPlaying, setIsPlaying] = useState(false);

    const [playBoop, {pause}] = useSound(music, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
        pause();
        } else {
        playBoop();
        }
        setIsPlaying(!isPlaying);
    }

    const musicOn = <i onClick={togglePlay} className='bx bx-volume-full' />;
    const musicOf = <i onClick={togglePlay} className='bx bx-volume-mute' />;

    return(
        <button className="sonido" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? musicOn : musicOf}
        </button>
    )
}