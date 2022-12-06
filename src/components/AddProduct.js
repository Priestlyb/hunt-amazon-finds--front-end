import React, { useState } from 'react'
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';
import {axiosInstance} from "../config";
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate(); 
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    link: '',
    image: '',
    available: ''
  });
  const [checked, setChecked] = useState(false); 
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
//  console.log(e.target.name, "value", e.target.value);
  };
  const sendRequest = async () => {
    axiosInstance.post("http://localhost:5000/books", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      link: String(inputs.link),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res=> res.data);
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history("/products"));
   }

  return (
    <form onSubmit={handleSubmit}>
    <Box
      display={"flex"}
      flexDirection="column"
      margin= "150px"
      maxWidth="50%"
    >
      <FormLabel>Name</FormLabel>
      <TextField
      value={inputs.name}
      onChange={handleChange}
      margin="normal" fullWidth variant="outlined" name="name"/>

      <FormLabel>Author</FormLabel>
      <TextField
      value={inputs.author}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>

      <FormLabel>Description</FormLabel>
      <TextField
      value={inputs.description}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"/>

      <FormLabel>Price</FormLabel>
      <TextField
      value={inputs.price}
      onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>

      <FormLabel>Link</FormLabel>
      <TextField
      value={inputs.link}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="link"/>

      <FormLabel>Image</FormLabel>
      <TextField
      value={inputs.image}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"/>

      <FormControlLabel control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available" />

      <Button variant="contained" type="submit">Add Product</Button>
    </Box>
    </form>
  )
}

export default AddBook