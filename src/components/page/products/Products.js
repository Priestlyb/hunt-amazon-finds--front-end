import React, {useState, useEffect} from 'react'
import Book from "./Product"
import Featured from "../../featured"
import './Products.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

//Axios Request
import { axiosInstance } from "../../../config";
const URL = "/books";
const fetchHandler = async() => {
  return await axiosInstance.get( URL).then((res)=> res.data)
}

const Products = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    
    fetchHandler().then((data) => setBooks(data.books));
  
  }, []);

  const [search, setSearch] = useState('');
  console.log(search)
  
  return (
    <div>
      <Featured />
      
      <Box className="text-field">
        <SearchIcon />
        <TextField
          id="standard-search"
          label="Hunt Products"
          type="search"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Box className='products'>
        {books &&
        books
        .filter((book) => {
          return search.toLowerCase() === '' ? book : book.name.toLowerCase().includes(search);
        })
        .map((book, id) => (
          <div key={id}>
            <Book book={book} /> 
          </div>
          ))}
      </Box>
    </div>
  )
}

export default Products;