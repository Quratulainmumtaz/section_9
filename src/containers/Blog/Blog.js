import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import {Route, NavLink, Switch} from 'react-router-dom';





import './Blog.css';



class Blog extends Component {
  


    



    render () {
      
     
        return (
            <div className="block">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                            exact activeClassName="my-active" activeStyle={{color:'#f92a3f',
                            textDecoration:'underline'}}>
                                Home</NavLink></li>
                            <li><NavLink to={{pathname:"/NewPost"}}>New Post</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
                <Route path="/"  render={()=> <h1>Home  2</h1>} /> */}
                <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/NewPost"  component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
                </Switch>
               
                
            </div>
        );
    }
}

export default Blog;