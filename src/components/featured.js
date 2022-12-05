import React from 'react';
import "./page/products/Products.css";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';

const Featured = () => {
  return (
    <div id='home'>
    <Box 
    display="flex" flexDirection="column" textAlign="center"
    >

      <Typography sx={{ fontWeight: "700", color: "#232F3D", marginTop: "100px", fontFamily: "'Rubik Microbe', cursive" }} variant="h3">
        Hunt Amazon Finds
      </Typography>

      <Typography  variant = "h7" sx={{ color: "#232F3D" }} >Get Amazing Amazon Product</Typography>

      <div className='intro'>
        <Button
        sx={{
          background: '#FF9900',
          color: '#fff',
          borderRadius: '10px',
          border: '2px solid #232F3D',
          mt: '20px'
        }}
        LinkComponent={Link} to="/products"
        varaint="contained">
          <Typography sx={{ fontWeight: "500" }} variant = "h6">Explore Products</Typography>
        </Button>
      </div>
    </Box>
    </div>
  )
}

export default Featured