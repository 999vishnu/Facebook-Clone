import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as images from "./Images/images";
import InfoBar from "./util/InfoBar";
import "./Left_sidebar.css";



function Left_sidebar() {
  const [open, setOpen] = useState(false);
  const getMode = () =>{
    return JSON.parse(localStorage.getItem("mode")) || false
}
const [dark, setMode] = useState(getMode())
useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
    
}, [dark])
 

    // const topRows = [
    //     { src: images.FacebookPages, title: "Pages" },
    //     { src: images.FacebookCovid, title: "Covid Information Center" },
    //     { src: images.FacebookFriends, title: "Friends" },
    //     { src: images.FacebookGroups, title: "Groups" },
    //     { src: images.FacebookMarketplace, title: "Marketplace" },
    //   ];

      const bottomRows = [
        { src: images.FacebookAdCenter, title: "Ad Center" },
        { src: images.FacebookAdsManager, title: "Ads Manager" },
        { src: images.FacebookBloodDonation, title: "Blood Donation" },
        { src: images.FacebookBuyAndSell, title: "Buy and Cell" },
        { src: images.FacebookCrisis, title: "Crisis Response" },
        { src: images.FacebookEvents, title: "Events" },
        { src: images.FacebookFavourites, title: "Favourites" },
        { src: images.FacebookFilms, title: "Films" },
        { src: images.FacebookFriendList, title: "Friend List" },
        { src: images.FacebookFundrisers, title: "Fundrisers" },
        { src: images.FacebookGames, title: "Games" },
        { src: images.FacebookGameVideos, title: "Game Videos" },
      ];
     
      const toggle = () => {
        setOpen(!open);
      };
      const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
      
        <div className={dark ? "left_sidebar_dark" : "left_sidebar"} >
       
            <div className="avater">
            <Avatar src="" onClick="" fontSize="large"   />
               
            </div>
            <div className="avater_button">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" />
            <h3> Pages </h3>
            </div>
             <div className="avater_button">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" />
            <h3> Covid Information Center </h3>
            </div>
             <div className="avater_button">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
            <h3> Friends </h3>
            </div>
             <div className="avater_button">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" />
            <h3> Groups </h3>
            </div>
             <div className="avater_button">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" />
            <h3> Marketplace </h3>
            </div>
            <div>
            {open && (
          <>
            {bottomRows.map(({ src, title }, i) => (
              <InfoBar key={`info-bottom-${i}`} Source={<Avatar src={src} />} title={title} />
            ))}
          </>
        )}
        <InfoBar
          key={"expand-icon"}
          Source={
            <Avatar>
              <ExpandMoreIcon style={{ transform: open && "rotate(180deg)" }} />
            </Avatar>
          }
          title={open ? "See Less" : "See More"}
          onClick={toggle}
        />

            </div>
            
        </div>
       
    )
}

export default Left_sidebar;

// {topRows.map(({ src, title }, i) => (
//           <InfoBar
//             key={`info-top-${i}`}
//             Source={<Avatar src={src} />}
//             title={title}
//             transform={true}
//           />
//         ))}
//          {open && (
//           <>
//             {bottomRows.map(({ src, title }, i) => (
//               <InfoBar key={`info-bottom-${i}`} Source={<Avatar src={src} />} title={title} />
//             ))}
//           </>
//         )}
//         <InfoBar
//           key={"expand-icon"}
//           Source={
//             <Avatar>
//               <ExpandMoreIcon style={{ transform: open && "rotate(180deg)" }} />
//             </Avatar>
//           }
//           title={open ? "See Less" : "See More"}
//           onClick={toggle}
//         />
