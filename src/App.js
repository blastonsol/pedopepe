import logo from './assets/logo.png';
import pepekid from './assets/pepekid.png';
import creep from './assets/creep.png';
import spinpepe from './assets/pedospin.gif'
import smalllogo from './assets/smalllogo.png'
import jupiter from './assets/jupiter.png'
import raydium from './assets/raydium.png'
import backgroundVideo from "./assets/video.mp4"
import TG from "./assets/TG.png"
import TW from "./assets/TW.png"
import corona from "./assets/corona.png"
import './App.css';

function App() {

  const contract = "asd23f344wf4fwfwhugighw4u5g45iguhiewuag"

  return (
    <div className="App">
      <div className="section1">
        <div className="logoBlock">
          <img className="logo" alt="logo" src={logo}/>
        </div> 
        <div className="headingBlock">
          <h1 className="heading">PEDOPEPE</h1>
          <h3 className="subheading black">Kids let's play Solana</h3>
          <a href="https://t.me/pedopepe" target="_blank" rel="noopener noreferrer"><button className="button">play</button></a>
        </div>
        <div className="pepekidBlock">
          <img alt="pepekid" src={pepekid} className="pepekid"/>
        </div>
      </div>
      <div className="section2">
        <div className="runningImgBlock">
          <img alt="creep" className="runningImg" src={creep} />
        </div>
      </div>
      <div className="section3">
        <div className="aboutContent">
          <div className="leftAbout">
            <img alt="spinpepe" className="spingpepe" src={spinpepe} />
          </div>
          <div className="rightAbout">
            <div className="headingBlock2">
              <img className="smalllogo" alt="smallLogo" src={smalllogo} />
              <h2 className="heading2">WHY YOU GAY?</h2>
            </div>
            <p className="aboutText black">We're not sure who let these two wild worlds collide, but it's happening today! Forget rocket launches - we're sending Pedo Pepe to the moon on the Solana spaceship.
Get ready for the Pedo Pepe Solana saga – where memes become magic and blockchain gets a taste of absurdity! It's not just a partnership; it's a cosmic carnival 
of craziness!</p>
          </div>
        </div>
      </div>
      <div className="section4">
        <h1 className="subheading white tokenomics">
          TOKENOMICS
        </h1>
        <p className="tokenomicText white">
          -CA- <br/> {contract}
        </p>
        <p className="tokenomicText white">
          -KIDS SUPPLY- <br/> 690,000,000
        </p>
        <p className="tokenomicText white">
          -LIQUIDITY KIDS- <br/> BURNED
        </p>
        <div className="dexBlock">
          <a href="https://jup.ag/swap/cont-SOL" target="_blank" rel="noopener noreferrer"><img className="raydium dexImg" alt="raydium" src={raydium} /></a>
          <a href="https://jup.ag/swap/cont-SOL" target="_blank" rel="noopener noreferrer"><img className="jupiter dexImg" alt="jupiter" src={jupiter} /></a>
        </div>
      </div>
      <div className="section5">
        <video className="backgroundVideo" autoPlay loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section6">
        <div className="socialBlock">
        <div className="leftDiv">
          <img className="corona" alt="corona" src={corona} />
          <div className="joinTextBlock"><h2 className="socialsHeading white">Join PEDOPEPE</h2>
          <p className="white text2">Follow our latest news and become <br/> a member of the community now!</p></div>
        </div>
        <div className="rightDiv">
          <a href="https://t.me/pedopepe" target="_blank" rel="noopener noreferrer"><img className="social" alt="Telegram" src={TG} /></a>
          <a href="https://x.com/PedoPepeSol" target="_blank" rel="noopener noreferrer"><img className="social" alt="X" src={TW} /></a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
