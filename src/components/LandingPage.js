import React from 'react';
import {Link} from 'react-router-dom';
import  {FaSearch} from 'react-icons/fa';

import './LandingPage.css';


const LandingPage=(props)=>{

    // var ImagePagination = document.getElementsByClassName("grid-container");
     
    //     if(props.ImagesForSiblings.length ===0){
    //         var ImagePagination  = props.Images.map(elem =>(
    //             <Link to={{
    //                 pathname:elem.urls.full,
    //                 key:elem.id,
    //                 hash:elem.user.profile_image.small,
    //                 aboutProps:{
    //                     imageUrl :elem.urls.full,
    //                     profileImage:elem.user.profile_image.small,
    //                     userName: elem.user.username,
    //                     fullName:elem.user.first_name+' '+elem.user.last_name
    //                 }
    //             }}>
    //                 <div className="grid-item">
    //                     <img className="hvr" src={elem.urls.full}></img>
    //                     <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="user">{elem.user.first_name+' '+elem.user.last_name}</span></p>
    //                 </div>
    //             </Link>
    //         ));
    //     }        
    //   if(props.ImagesForSiblings.length !==0){
    //   var  siblingPagination = props.ImagesForSiblings.map(elem =>(
    //         <Link to={{
    //             pathname:elem.urls.full,
    //             key:elem.id,
    //             hash:elem.user.profile_image.small,
    //             aboutProps:{
    //                 imageUrl :elem.urls.full,
    //                 profileImage:elem.user.profile_image.small,
    //                 userName: elem.user.username,
    //                 fullName:elem.user.first_name+' '+elem.user.last_name
    //             }
    //         }}>
    //             <div className="grid-item">
    //                 <img className="hvr" src={elem.urls.full}></img>
    //                 <img className="profileImage" src={elem.user.profile_image.small}/> <p className="textOverImage">Image by <span className="user">{elem.user.first_name+' '+elem.user.last_name}</span></p>
    //             </div>
    //         </Link>
    //     ));

    //     // ImagePagination = document.querySelector(".grid-container");
    //    ImagePagination = ImagePagination.concat(siblingPagination);
    //   }

        return(
            <div>
                <div className="searchImg">
                    <input type="text" className="textBox" name="search" onChange={props.onchangeHandler} placeholder="Search for images here..."/><FaSearch onClick={props.searchHandler} className="searchIcon"/>
                 </div>
                <div className="grid-container">
                    {props.ImagePagination}
                </div>
                <div className="Loadmore">
                    <button className="loadmoreBtn" onClick={props.LoadMore}>Load More</button>
                </div>
            </div>
        );
    }

export default LandingPage;