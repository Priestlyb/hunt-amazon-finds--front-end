import React from "react";
import "./nav.css";
import { FaPinterestP, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiArrowUturnUp } from "react-icons/hi2";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Navbar() {
  return (
    <div className="navigation">
      <a href="https://www.instagram.com/huntamazonfinds/" target='blank'>
      <Tooltip title="Instagram">
      <IconButton>
        <FaInstagram className="icon active-nav" />
      </IconButton>
    </Tooltip>
      </a>
      <a href="https://www.tiktok.com/@huntamazonfinds?is_from_webapp=1&sender_device=pc" target='blank'>
      <Tooltip title="TikTok">
      <IconButton>
        <FaTiktok className="icon" />
      </IconButton>
    </Tooltip>
      </a>
      <a href="https://pin.it/2FjZcZf" target='blank'>
      <Tooltip title="Pinterest">
      <IconButton>
        <FaPinterestP className="icon" />
      </IconButton>
    </Tooltip>
      </a>
      <a href="#home">
      <Tooltip title="Back To Top">
      <IconButton>
        <HiArrowUturnUp className="icon" />
      </IconButton>
    </Tooltip>
      </a>
    </div>
  );
}

export default Navbar;
