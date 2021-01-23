import React,{useState} from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

export default function ParallelCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [likeed, setlikeed] = useState("");
  const [saveed, setsaveed] = useState("");
  const [open, setOpen] =useState(false);
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
          {(likeed==="liked")?   <a  onClick={()=>{setlikeed("")}}><FavoriteIcon style={{color:"red",fontSize:"30"}}/></a>: <a  onClick={()=>{setlikeed("liked")}}><FavoriteBorderIcon style={{fontSize:"30"}}/></a>}
          </IconButton>
          <IconButton aria-label="play/pause">
          { (saveed==="saved")?<a  onClick={()=>{setsaveed("")}}><BookmarkOutlinedIcon style={{color:"grey",fontSize:"30"}}/></a>: <a  onClick={()=>{setsaveed("saved")}}><BookmarkBorderOutlinedIcon style={{fontSize:"30"}}/></a>
}          </IconButton>
          <IconButton aria-label="next">
          <a  onClick={()=>{setOpen(true);console.log("clicked"+open)}}>
<ChatOutlinedIcon style={{fontSize:"30"}}/></a>          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}
