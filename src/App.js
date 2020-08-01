import React, { Component } from 'react';
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom';
import axios from 'axios'

import LandingPage from './components/LandingPage';
import ImageDownload from './components/ImageDownload';
import './App.css';

class App extends Component {

  state={
    Images : [],
    ImagesForSiblings : [],
    PageNo : 1,
    searchKey: ''
  }

  componentDidMount(){
    var store = []
    axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&query=water").then(response => {
        console.log(response.data);
        response.data.splice(0,1);
        this.setState({Images:response.data});
    })    
  }

  onchangeHandler=(e)=>{
     this.setState({searchKey:e.target.value})
  }

  searchHandler=(e)=>{
    axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&query="+this.state.searchKey).then(response => {
        console.log(response.data);
        response.data.splice(0,1);
        this.setState({Images:response.data});
    })   
  }

  ImageDownload=(e)=>{
    var link = document.createElement('a');
    link.href = e.view.location.pathname.slice(1);
    link.download = 'Download.jpg';
    link.target ="_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  LoadMore = (e) =>{
    var currentPage = this.state.PageNo+1;
    var currentEvent = e.target.closest(".Loadmore").previousSibling;
     this.setState((state,props)=>{
       return {
        PageNo: state.PageNo+1
       };
     });
     axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&page="+currentPage).then(response => {
        console.log(response.data);
        response.data.splice(0,1);
        this.setState({ImagesForSiblings:response.data});
        var Pagination = response.data.map(elem =>{
              var Image = document.createElement("img");
              var Link = document.createElement("a")
              Link.setAttribute("href","/"+elem.urls.full);
              Image.setAttribute("class","hvr");
              var DIV   = document.createElement("div");
              DIV.setAttribute("class","grid-item");
             Image.setAttribute("src",elem.urls.full);
             DIV.appendChild(Image);
             Link.appendChild(DIV);
             currentEvent.appendChild(Link);
        });
    });        
}

  render() {
    return (
      <div className="App">
         <Switch>
             <Route path={'/'} exact render = {() => <LandingPage Images={this.state.Images} onchangeHandler={this.onchangeHandler} searchHandler={this.searchHandler} ImagesForSiblings={this.state.ImagesForSiblings} LoadMore={this.LoadMore}/>}/>
             <Route path={'/:title'} render = {(props) => <ImageDownload  Imagedownloaded={this.ImageDownload} {...props}/>}/>
         </Switch>
      </div>
    );
  }
}

export default App;
