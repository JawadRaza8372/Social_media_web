import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
const design={color:"grey",fontSize:"26",marginLeft:"5px",marginRight:"5px"}
const design2={color:"white",fontSize:"26",marginLeft:"5px",marginRight:"5px"}
function BtTxtPic({text,text2,icon1,icon2,icon3,icon4,icon5,icon6,icon7}) {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
          {icon1 && <AccountCircleIcon style={design}/>}
          {icon2 && <SettingsIcon style={design}/>}
          {icon3 && <BookmarkBorderIcon style={design}/>}
          {icon4 && <ExitToAppIcon style={design}/>}
          {icon5 && <AppsOutlinedIcon style={design}/>}
          {icon6 && <FavoriteBorderIcon style={design2}/>}
          {icon7 && <ChatOutlinedIcon style={design2}/>}

          
          { text &&<h6 style={{color:"grey"}}>{text}</h6>  }
          { text2 &&<h6 style={{color:"white"}}>{text2}</h6>  }

        </div>
    )
}

export default BtTxtPic
