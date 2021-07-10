import React,{useState} from "react";
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
      width: 'auto',
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
<br/>
{children}
<br/>
    </div>
</Modal>
    )
}

export default ModelP
