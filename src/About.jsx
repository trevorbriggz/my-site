import './index.css'
import { Link } from "react-router-dom";
import aboutbanner from "/images/banners/about.gif";
import nametag from "/images/tags and other/me namtag.png";

function updates() {
    return (
        <div>
          <h1><img src={aboutbanner} className="banner"/></h1>
          <img src={nametag} className="nametag1"/>
          <p>i'm <b>trevor</b> <i>(he/him, 1998/05/21)</i> born in attica ny, raised there and then williamsville ny til now</p>
        
          <h2>what is this?</h2>
          <p>well it started as a rip off of <Link to="https://msx.horse" target="_blank" title="msx.horse or em's personal site">em's personal site</Link> where i can have at least something to display on my personal domain. thankfully it has grown quiet a bit as i have found the drive to work on it. i will continue to add my work on here, photo, video, graphics, music etc. i have grown really tired of phones and social media so hopefully eventually i can move to just existing on here, <Link to="https://soundcloud.com/smonkmusic" target="_blank" title="my personal soundcloud link">soundcloud</Link> and <Link to="https://trevorbriggz.bandcamp.com/" target="_blank" title="my personal bandcamp link">bandcamp</Link></p>
          
          <h2>art stuff</h2>
          <p>art is cool, i have tinkered with a lot of it since a child (if we count lego) music came into the picture in highschool from a friend, with that you need art so i started learning graphics (will eventually make pages to showcase this work) photo came along with that through classes showcasing mixed media art. now im here, having worked professionally for a race track doing all of this for over two years</p>
          
          <h2>why web 1.0?</h2>
          <p className="center">cause its cool and cute</p>
          
          <h2>what are the little rectangles in the footer?</h2>
          <p>web 1.0 buttons, idk theyre silly and cute. i guess they were just a thing in the 90s. <Link to="https://www.google.com/search?q=web+1.0+buttons&rlz=1C1ASUM_enUS1026US1026&oq=web+1.0+buttons&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiGAxiABBiKBTINCAIQABiGAxiABBiKBTINCAMQABiGAxiABBiKBTIKCAQQABiABBiiBDIHCAUQABjvBdIBCDI0NDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank" title="link to google for 88x31 buttons">you can find a bunch for your own site here</Link>.</p>
          <p>some link to things such as people who have inspired me, things i like, things i used to make this, and then the last one i made myself, feel free to put it on your site and link to me or whatever you want</p>
        </div>
      );
    }

    export default updates;