import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Products.css'
import { axiosInstance } from '../../../config';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Book = (props) => {
  const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const history = useNavigate();
    const {_id, name, author,description, price, image, link} = props.book;
    
    const deleteHandler  = async  () => {
      await axiosInstance.delete(`/books/${_id}`)
      .then((res) =>res.data)
      .then(() => history("/"))
      .then(()=>history("/products")); 
    }
  return (
    <div> 
    <Card className='product'>
      <CardMedia
        component="img"
        image={image}
        alt="img"
        className='productimg'
      />
      <CardContent className='typo'>
        <Typography variant="p" color="black" fontFamily="Roboto" lineHeight={1.1}>
          <p>{name}. By: {author}</p>
          <h3>${price}</h3>
        </Typography>
      </CardContent>
        <a href={link} target="blank">
          <Typography fontWeight={500} className='productbtn'>
          Buy now
          </Typography>
          </a>
      <CardActions disableSpacing>
          <Typography fontWeight={500} fontSize='16px'>
          Description
          </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className='desc'>
          {description}
          </Typography>
        <div className="btn">
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</ Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </div>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

export default Book