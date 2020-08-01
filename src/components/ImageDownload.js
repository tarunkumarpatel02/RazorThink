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
                    <div className="profileImageWrapper"><img className="profileImage2" src={window.location.hash.slice(1)}></img></div><br/>
                    <div><img className=".img" src={window.location.pathname.slice(1)}/></div>
                    <button className="download" onClick={this.props.Imagedownloaded}>Download</button>
                </div>
            </div> 
        );
    }
}

export default ImageDownload;