import './index.css'
import msx from "/images/buttons/msx8831.gif";
import csgo from "/images/buttons/csbanner.gif";
import vscode from "/images/buttons/vscbutton.gif";
import ps2 from "/images/buttons/ps2.gif";
import windows from "/images/buttons/windows.gif";
import webp from "/images/buttons/button_webp.png";
import twelve from "/images/buttons/12men.gif";
import knf from "/images/buttons/knf.gif";
import virus from "/images/buttons/viruses.gif";

function footer() {
    return (
        <footer className="footer">
          <a href="https://msx.horse" className="aimg" target="_blank"><img src={msx} alt="88x31 pixel button: msx.horse, home of em"></img></a> 
          <img src={csgo} alt="88x31 pixel button: a csgo (shooter game) montage button"></img>
          <a href="https://code.visualstudio.com/" className="aimg" target="_blank"><img src={vscode} alt="88x31 pixel button: made with visual studio code"></img></a>
          <img src={ps2} alt="88x31 pixel button: win a free ps2"></img>
          <a href="https://en.wikipedia.org/wiki/Microsoft_Windows" className="aimg" target="_blank"><img src={windows} alt="88x31 pixel button: made with Windows"></img></a>
          <img src={webp} alt="88x31 pixel button: no WEBP! just use PNG!"></img>
          <a href="https://twelvemen.neocities.org/index.html" className="aimg" target="_blank"><img src={twelve}></img></a>
          <a href="https://www.youtube.com/watch?v=FOebMAx-GVI" className="aimg" target="_blank"><img src={knf}></img></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="aimg" target="_blank"><img src={virus}></img></a>
        </footer>
    )
}

export default footer;