import './index.css'
import { Link } from "react-router-dom";

function Music() {
    return (
        <div>
            <h1 className='center'><img src="/images/banners/music.gif" className="banner"/></h1>
            <br/>
            <p>since i can recall i have been around music, my mom would always be listening to music or singing. she has always been in cover bands so i'm sure that
                has some subconcious doings haha 
            </p>
            <br/>
            <p>me getting into producing was because of a friend in highschool, you can check out some of his stuff <Link to="https://soundcloud.com/noah-kramer-292637112/tracks">here</Link> and <Link to="https://soundcloud.com/noah-kramer-959107890">here</Link>, showing me a song he made in computer
                science class and then the software he used, <Link to="https://www.image-line.com/">fl studio</Link>, which is now my personal hell
            </p>
            <br/>
            <p>a lot of inspiration comes from old video games that i grew up playing and their soundtracks. jungle was HUGE in early 2000's gaming. with time watching youtube poop in middle school i found emma's music (vulpvibe/lapfox trax/halley labs) which was a lot of old school rave stuff, adjacent to what i grew up hearing in games. i fell in love. with this they introduced me to dubstep with their character klippa. bangers man. now i mainly strive to produce riddim, jungle, hardcore/happy hardcore, hardstyle, jumpstyle, future riddim, botanica and what my friend mentioned above kinda invented, or at least what i call it, lofi future bass</p>
            <br/>
            <p>i find it funny how i make music such a big part of my personality but honestly i struggle with it a lot. i set very high expectations and goals for myself because i want my work to sound good, great, amazing, whatever. sure i can just slap stuff together and call it there, but i want to create something as incredible as all the stuff i love listening to. hopefully with time and some guidance i can get to a point to where i can more frequently put out works i am happy with and will be excited to share with others</p>
            <br/>
            <p>for now you can find my stuff on <Link to="https://soundcloud.com/smonkmusic/sets/unreleased-shit/s-5IEkbzWCi7Y?si=aa246d12e06b49468bd4573c1716a0d1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">soundcloud</Link> and <Link to="https://trevorbriggz.bandcamp.com/album/fat-cackey-2026">bandcamp</Link></p>

            <br/>
            <hr/>
            
            <h2>tools i use</h2>
            <p>daw: fl studio</p>
            <p>my main workspace. i also own reason but i only use it for its synths</p>
            <br/>
            <p>plugins: (this isn't an exhaustive list, just the stuff i use most right now)</p>
            <br/>
            <p>/ instruments:</p>
            <p>- serum2</p>
            <p>- kontakt</p>
            <br/>
            <p>/ effects:</p>
            <p>- kilohearts suite</p>
            <p>- camel crusher</p>
            <p>- glitch2</p>
            <p>- ott</p>
            <p>- valhalla free stuff</p>
            <p>- ruina</p>
            <p>- lephonk</p>
            <p>- melda free stuff</p>
            <p>- tube amp</p>
            <p>- patcher in fl studio is where the fun is at</p>
            <br/>
            <p>/ mastering + monitoring: (in this order)</p>
            <p>- gclip</p>
            <p>(a general rule of thumb is you want gclip on the end of every effect chain/the last effect for each sound so you don't overwhelm this gclip on your master, you will have funky stuff occur if you have stuff thats too loud smashing your master gclip just like you would with a compressor, limiter, whatever)</p>
            <p>- ozone imager</p>
            <p>- span</p>
            <p>- youlean loudness meter</p>
            <p>you can have stuff before the master gclip, but its really not necessary for singles if you mix your stuff loud. if you are making a whole album you can and probably want to then set all tracks to some LUF limit then compress all of them under the same chain to give them all a more cohesive feel, like theyre all a part of one thing, you can also do creative stuff to give a similar feeling; convultion, reverb, ott, etc (in small amounts of course. unless..?)</p>
            <br/>
            <hr/>
            <h2>reqs</h2>
            <p>here's some stuff you can check out that i really enjoy, inspires me to create, keeps me motivated etc</p>
            <br/>
            <p>wip - i just want to get this site live for now</p>
            <br/>
            <p>and then if you want to fall down the rabbit hole here's every album ever that i enjoy</p>
            <br/>
            <hr/>
            <h2>the shrine</h2>
            <p>i dont have the patience for this right now lmao</p>
        </div>
      );
    }

    export default Music;