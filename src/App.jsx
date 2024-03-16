

import headerpic from "../src/assets/angoshinyfinal1.gif"
import angovideo from "../src/assets/angovideo.mov"
import mainpic from "../src/assets/angomainpic.png"



function App() {

  return (
    <>
      <section id="page1">
       <div>
       <img className="headerpic" src={headerpic}/>
       <div className="angovideodiv"><video src={angovideo} className="angovideo" autoPlay loop muted></video></div>
       </div>
        <h2>angolovesyoudeeply <br />
          VR Experience<br />
          coming soon...</h2>
          <p>An Go is a future spirit trapped in a fe-male human body. in her trilogy tales starting with 'despacia i: dolor' she unfolds the story of her discovering human nature. aiming to release from the imposed physical chains, she finds sounding movements that invite you to look deep in your own human journey along her dream pop and art rock fantasies and her extraterrestrial voice.</p>
        {/*<svg id="arrowsvg" width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5251 56.4749C24.892 57.8417 27.108 57.8417 28.4749 56.4749L50.7487 34.201C52.1156 32.8342 52.1156 30.6181 50.7487 29.2513C49.3819 27.8844 47.1658 27.8844 45.799 29.2513L26 49.0503L6.20101 29.2513C4.83418 27.8844 2.6181 27.8844 1.25126 29.2513C-0.115572 30.6181 -0.115572 32.8342 1.25126 34.201L23.5251 56.4749ZM22.5 0L22.5 54H29.5L29.5 0L22.5 0Z" fill="black" />
  </svg> */}
      </section>

      <section id='page2'>
        <h1><a href="https://paypal.me/angolovesyoudeeply"> PAYPAL ME</a> </h1>
        <img src={mainpic} />
        <h2>FOLLOW {' '}
        
        <a href="https://instagram.com/angolovesyoudeeply"><i className="fa-brands fa-instagram"></i></a> {' '}
        <a href="https://angolovesyoudeeply.bandcamp.com/album/despacia-i-dolor"><i className="fa-brands fa-bandcamp"></i></a>
        </h2>
        <div id='builtdiv'>
        <h3>Site built by <span>Ram Fiorentino</span></h3>
        <p>Ram is a curious and proactive frontend web developer and digital artist, in constant seeking of knowledge and learning new technologies.  They are passionate about innovation and has a special interest for data visualisation,  web animations, UI/UX, and Web3.</p>
        </div>


      </section>

      

    </>
  )
}

export default App



