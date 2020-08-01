import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  {FaSearch} from 'react-icons/fa';

import './LandingPage.css';


class LandingPage extends Component{
  render(){
      var ImagePagination = this.props.Images.map(elem =>(
                <Link to={{
                    pathname:elem.urls.full,
                    key:elem.id,
                    hash:elem.user.profile_image.small
                }}>
                    <div className="grid-item">
                        <img className="hvr" src={elem.urls.full}></img>
                        <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="userName">{elem.user.first_name+' '+elem.user.last_name}</span></p>
                    </div>
                </Link>

      ));

    //   if(this.props.ImagesForSiblings.length !==0){
    //     var siblingPagination = this.props.ImagesForSiblings.map(elem =>(
    //         <Link to={{
    //             pathname:elem.urls.full,
    //             key:elem.id
    //         }}>
    //             <div className="grid-item">
    //                 <img className="hvr" src={elem.urls.full}></img>
    //             </div>
    //         </Link>
    //     ));

    //     ImagePagination = ImagePagination.appendChild(siblingPagination)
    //   }

        return(
            <div>
                <div className="searchImg">
                    <input type="text" className="textBox" name="search" onChange={this.props.onchangeHandler} placeholder="Search for images here..."/><FaSearch onClick={this.props.searchHandler} className="searchIcon"/>
                 </div>
                <div className="grid-container">
                    {ImagePagination}
                </div>
                <div className="Loadmore">
                    <button className="loadmoreBtn" onClick={this.props.LoadMore}>Load More</button>
                </div>
            </div>
        );
    }
}

export default LandingPage;