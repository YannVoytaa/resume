import React from 'react'
import Topic from './Topic'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Bio_text=<div>
<p>Hi, my name is Jan Wojtach.</p>
<p>I study informatics at the University of Warsaw.</p>
<p>I started learning programming in 2017, mostly in C++.</p>
<p>In 2018 and 2019 I became finalist of Polish Olympiad in Informatics.</p>
<p>Then, I started discovering new languages, such as Python or some Web languages.</p>
<p>At the moment, my goal is to develop my programming skills and learn new things.</p>
</div>



const Edu_text=<div>
  <ul>
    <li>2020-now: University of Warsaw</li>
  </ul>
  <p style={{color:'#002b87'}}>Skills:</p>
  <ul>
    <li>English: Upper-Intermediate ~ Advanced</li>
    <li>German: Elementary ~ Intermediate</li>
  </ul>
</div>

const Pro_text=<div>
  <ul>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/react_visualizeBFS'>React BFS visualization</a><span className='tooltiptext'>BFS simulation</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/react_doodler'>React Doodler</a><span className='tooltiptext'>React doodler app</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/data_structures'>Advanced Data Structures</a><span className='tooltiptext'>Complex algorithms written in C++</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/POI'>POI</a><span className='tooltiptext'>My solutions to "Polish Olympiad in IT" problems</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/django_multiproject'>Django Multiproject</a><span className='tooltiptext'>Multi-game Django app</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/Django2'>Django ToDo</a><span className='tooltiptext'>To-Do List written in Django</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/django'>Django CraigsList Clone</a><span className='tooltiptext'>Craigslist Clone in Django using Web Scraping</span></li>
    <li className='tooltip'><a href='https://github.com/YannVoytaa/lolTFT'>League of Legends: Teamfight Tactics AutoBot</a><span className='tooltiptext'>Bot playing TFT on his own</span></li>
  </ul>
</div>

const Web_text=<div>
    <ul>
    <li className='tooltip'><a href="https://yannvoytaa.github.io/react_visualizeBFS/" target='_blank'>BFS visualization<br/> <img src="./bfs.png"/></a></li>
    <li className='tooltip'><a href="https://yannvoytaa.github.io/react_doodler/" target='_blank'>Doodler<br/> <img src="./doodler.png" style={{width:"20%"}}/></a></li>
    <li className='tooltip'><a href="https://todo-811.herokuapp.com/" target='_blank'>Todo Django<br/> <img src="./todo.png"/></a></li>
    <li className='tooltip'><a href="http://gentle-depths-95467.herokuapp.com/new_search/" target='_blank'>CraigsList clone<br/> <img src="./craig.png"/></a></li>
    </ul>
</div>

const Con_text=<div>
  <ul>
    <li className='tooltip'><a href='https://www.linkedin.com/in/jan-wojtach-1205141b5/'>LinkedIn</a></li>
    <li className='mail'>Mail: wojtachjanek@gmail.com</li>
  </ul>
</div>



class Main extends React.Component{
  componentDidMount(){
    const reveal=gsap.utils.toArray('.scroll')
    reveal.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        toggleClass: 'active',
        start: "top 80%",
        end: "top 0%",
        markers: false,
      })
    });
    const blocks=gsap.utils.toArray('.scroll-block')
    blocks.forEach((item, i) => {
      let h=item.getBoundingClientRect().height+100
      ScrollTrigger.create({
        trigger: item,
        toggleClass: 'active',
        start: "top 80%",
        end: "+="+h,
        markers: false,
      })
    });
    const tl=gsap.timeline()
    tl.to('.hide>span',{y:"0%",duration:1, stagger:0.25},0.25)
    tl.to('.slider',{y:"-100%",duration:2},2)
    tl.to('.begin',{y:"-100%",duration:1},2.6)
  }
  render(){
    return(
      <div className='main'>
        <Topic subject="Bio" text={Bio_text}/>
        <Topic subject="Education & Skills" text={Edu_text}/>
        <Topic subject="Projects" text={Pro_text}/>
        <Topic subject="Other sites" text={Web_text}/>
        <Topic subject="Contact me" text={Con_text}/>
        <div className='freepik'>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
        <div className='begin'>
          <div className='hide'>
            <span>Resume Website</span>
          </div>
          <div className='hide'>
            <span>Created by</span>
          </div>
          <div className='hide'>
            <span>Jan Wojtach</span>
          </div>
        </div>
        <div className='slider'></div>
      </div>
    )
  }
}

export default Main;
