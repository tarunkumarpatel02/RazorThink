import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DownloadLink from "react-download-link";
import  {FiX} from 'react-icons/fi';


import './ImageDownload.css';
// import Path from '../DownloadedImages/';



class ImageDownload extends Component{
    render(){
        return(
            <div id="myModal" className="modal">
                 <div className="modal-content">
                  <Link to={{pathname:'/'}}><FiX onClick={this.props.searchHandler} className="cancelIcon"/></Link>
                  <span className="fullName">{this.props.location.aboutProps.fullName}</span>
                  <span className="userName">@ {this.props.location.aboutProps.userName}</span>
                    <div className="profileImageWrapper"><img className="profileImage2" src={this.props.location.aboutProps.profileImage}></img></div>
                    <div><img className=".img" src={this.props.location.aboutProps.imageUrl}/></div>
                    <button className="download" onClick={()=>this.props.Imagedownloaded(this.props.location.aboutProps.imageUrl)}>Download</button>
                </div>
            </div> 
        );
    }
}

export default ImageDownload;