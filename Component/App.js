import React, {Component} from 'react';

import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import Title from './title';

import profile from '../assets/mypic.jpg';
import Header from './Header';


class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio=()=>  {
        this.setState({  displayBio : !this.state.displayBio });
    }
   render() {
       return(
           <div>  
               <img src={profile}  alt='profile' className='profile' />
               <h1>Hello!</h1>
               <p>My name is  Satya Ranjan Swain.</p>
              <Title />
               <p>I'm always looking forward to working 
                   on meaningful projects.</p>
              {
                 this.state.displayBio ? (
                    <div>
                        <p>l Live in benguluru, and code every day</p>
                        <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                        <p>Beside coding, I also love music and playing guiter</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                     ) :(
                         <div>
                             <button onClick={this.toggleDisplayBio}>Read More</button>
                             </div>
                     )
                 }
                 <hr />
                 <Projects />
                 <hr />
                 <SocialProfiles />
                </div> 
       )
   }
}


export default App;