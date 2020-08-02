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
    searchKey: '',
    aboutProps:{},
    ImagePagination:[],
    siblingPagination:[],
    searchResult:[],
  }

  componentDidMount(){
    var store = []
    axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&query=water&per_page=9").then(response => {
        console.log(response.data);
        // response.data.splice(0,1);
        this.setState({Images:response.data});
        console.log(this.state.Images);
        var ImagePagination  = this.state.Images.map(elem =>(
          <Link to={{
              pathname:elem.urls.full,
              key:elem.id,
              hash:elem.user.profile_image.small,
              aboutProps:{
                  imageUrl :elem.urls.full,
                  profileImage:elem.user.profile_image.small,
                  userName: elem.user.username,
                  fullName:elem.user.first_name+' '+elem.user.last_name
              }
          }}>
              <div className="grid-item">
                  <img className="hvr" src={elem.urls.full}></img>
                  <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="user">{elem.user.first_name+' '+elem.user.last_name}</span></p>
              </div>
          </Link>
      ));
      this.setState({ImagePagination:ImagePagination});
    })    
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return this.state.siblingPagination != nextState.siblingPagination;
  // }
  componentDidUpdate(){
    console.log("component did update ran")
      if(this.state.ImagesForSiblings.length !==0){
      var  siblingPagination = this.state.ImagesForSiblings.map(elem =>(
            <Link to={{
                pathname:elem.urls.full,
                key:elem.id,
                hash:elem.user.profile_image.small,
                aboutProps:{
                    imageUrl :elem.urls.full,
                    profileImage:elem.user.profile_image.small,
                    userName: elem.user.username,
                    fullName:elem.user.first_name+' '+elem.user.last_name
                }
            }}>
                <div className="grid-item">
                    <img className="hvr" src={elem.urls.full}></img>
                    <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="user">{elem.user.first_name+' '+elem.user.last_name}</span></p>
                </div>
            </Link>
        ));

        // ImagePagination = document.querySelector(".grid-container");
      //  this.setState({ImagePagination:[...this.state.ImagePagination,siblingPagination]});
       this.setState({ImagePagination:this.state.ImagePagination.concat(siblingPagination)});
       this.state.ImagesForSiblings.length = 0;
      }else if(this.state.searchResult.length !==0){
        var ImagePagination  = this.state.searchResult.map(elem =>(
          <Link to={{
              pathname:elem.urls.full,
              key:elem.id,
              hash:elem.user.profile_image.small,
              aboutProps:{
                  imageUrl :elem.urls.full,
                  profileImage:elem.user.profile_image.small,
                  userName: elem.user.username,
                  fullName:elem.user.first_name+' '+elem.user.last_name
              }
          }}>
              <div className="grid-item">
                  <img className="hvr" src={elem.urls.full}></img>
                  <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="user">{elem.user.first_name+' '+elem.user.last_name}</span></p>
              </div>
          </Link>
      ));
      this.setState({ImagePagination:ImagePagination});
      this.state.searchResult.length = 0;
      }
  }

  onchangeHandler=(e)=>{
     this.setState({searchKey:e.target.value})
  }

  searchHandler=(e)=>{
    axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&per_page=9&query="+this.state.searchKey).then(response => {
        console.log(response.data);
        this.setState({searchResult:response.data});
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
     axios.get("https://api.unsplash.com/photos/?client_id=QfXd71TsBLAcVluOiBe6ZJsltwJnTIV8WVjD24lovvE&per_page=9&page="+currentPage).then(response => {
        console.log(response.data);
        this.setState({ImagesForSiblings:response.data});
    });        
}

  render() {
    return (
      <div className="App">
         <Switch>
             <Route path={'/'} exact render = {() => <LandingPage ImagePagination={this.state.ImagePagination} onchangeHandler={this.onchangeHandler} searchHandler={this.searchHandler} ImagesForSiblings={this.state.ImagesForSiblings} LoadMore={this.LoadMore}/>}/>
             <Route path={'/:title'} render = {(props) => <ImageDownload  Imagedownloaded={this.ImageDownload} {...props}/>}/>
         </Switch>
      </div>
    );
  }
}

export default App;
