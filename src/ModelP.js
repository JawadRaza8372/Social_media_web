import React,{useState} from "react";
import "./App.css";
import Modal from "@material-ui/core/Modal"
import { makeStyles } from '@material-ui/core/styles';
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  
function ModelP({openModel,closeModel,children}) {
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    return (
        <Modal
open={openModel}
onClose={closeModel}
>
   <div style={modalStyle} className={classes.paper}>
<center>
<div className="app_header">
      <img className="app_headerImg" src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
    </div>
{children}
<br/>
    </center>
    </div>
</Modal>
    )
}

export default ModelP
