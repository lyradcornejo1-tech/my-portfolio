import './App.css';
import daryl from './darylyi234.png'
import insta from './icons8-instagram-96.png'
import fb from './icons8-fb-96.png'
import linked from './icons8-linkedin-80.png'
import github from './icons8-github-96.png'



function App() {
   
  
  return (
<div className="app">
  <header> <h1> My Portfolio</h1>
<nav>
<ul>	
	<li><a href = "#home"> Home </a></li>
	<li><a href = "#moreinfo"> About </a></li>
	<li><a href = "#signin"> Sign Up </a></li>
</ul>
</nav></header>

<div className='container'>
  <div className='cont1'> <h1>Hello</h1>
  <h2> I'm Daryl</h2>
  <h2> Front-End Developer</h2>
  
  <section className='socials'><span><h3>Follow me on</h3></span><span className="vapor-icon">  <a href = "https://web.facebook.com/daryl.cornejo.92/" target="_blank" rel="noopener noreferrer"><img  src = {fb}/></a></span><span className="vapor-icon"> <a href = "https://www.instagram.com/daryl.cor/" target="_blank" rel="noopener noreferrer"> <img src = {insta}/></a></span><span className="vapor-icon"><a href = "https://www.linkedin.com/in/daryl-cornejo-365276303/" target="_blank" rel="noopener noreferrer"> <img src = {linked}/></a></span><span className="vapor-icon"><a href = "https://github.com/lyradcornejo1-tech" target="_blank" rel="noopener noreferrer"> <img src = {github}/></a></span></section>
  <a href= "RESUME.pdf" download><button className="vapor-btn">Download CV</button></a></div>
  <div className='cont2'> <div className='vapor-img'> <img  src = {daryl}/></div> </div>
</div>
</div>
  );
}

export default App;