import './index.css'
import contact from "/images/banners/contact.gif";
import thank from "/images/tags and other/thank you.png";

function updates() {
    return (
        <div>
            <h1><img src={contact} class="banner"/></h1>
		    <p>for now you can find me at quite a few spots but if you wish to keep it professional please send me an email @</p>
            <h2><a href="mailto:me@trevorbrig.gs">me@trevorbrig.gs</a></h2>
            <br/>
            <p>next best is probably my phone number (if you don't have it send me an email/its not for you to have) then <a href="https://www.facebook.com/trevorbriggz/" target="_blank" title="my personal facebook">facebook</a> and then <a href="https://www.instagram.com/trevorbriggz/" target="_blank" title="my personal instagram">instagram</a></p>
            <br/>
            <p>for music stuff head to <a href="https://soundcloud.com/smonkmusic" target="_blank" title="my personal soundcloud link">my soundcloud</a>, as a thanks for caring enough to dig into me a little bit more than surface level social media <a href="https://soundcloud.com/smonkmusic/sets/unreleased-shit/s-5IEkbzWCi7Y?si=7b396bf87e7a4d19aec927bab8db519b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" title="my unreleased tracks on soundcloud">here&apos;s a playlist</a> of scribbles, unreleased, wip stuff you can check out &lt;3</p>
            <p>i do use <a href="https://trevorbriggz.bandcamp.com/" target="_blank" title="my personal bandcamp link">bandcamp</a>, but there isn't much there right now</p>
            
            <br/>
            <div class="center">
            <img src={thank} class="banner"/>
            </div>
        </div>
      );
    }

    export default updates;