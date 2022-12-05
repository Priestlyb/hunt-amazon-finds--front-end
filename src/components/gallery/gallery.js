import React from 'react';
import './gallery.css';
import CardItem from './galleryItem';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Gallery() {
  return (
    <div className='cards'>

<Box className='cards__items' sx={{ flexGrow: 1,}}  >
<CardItem
  src='https://m.media-amazon.com/images/I/41P46wVzn0L._AC_UF226,226_FMjpg_.jpg'
  text='Top Deal'
  label='Shop now'
  path='https://amzn.to/3VSDLgq'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/515LlHq3CCS._AC_UL320_.jpg'
  text='Beauty picks'
  label='See more'
  path='https://amzn.to/3VOxiTX'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/71ds-6sS6KL._AC_UL320_.jpg'
  text='Health & Personal Care'
  label='See more'
  path='https://amzn.to/3VIt2Fz'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/61Ici8LtRgS._AC_UL320_.jpg'
  text='Fashion favorites for Fall'
  label='Shop now'
  path='https://amzn.to/3sdCjYJ'
/>
</Box>

<Typography sx={{ fontSize: "24px", fontWeight: "900", color: "black", padding: "15px", textAlign: "left", fontFamily: "'Outfit', sans-serif" }} variant="h6" >Popular items this season</Typography>

<Box className='cards__items' sx={{ flexGrow: 2 }}>
<CardItem
  src='https://m.media-amazon.com/images/I/71LW+qiPt2L._AC_UL320_.jpg'
  text='Everything Halloween'
  label='Shop now'
  path='https://amzn.to/3TqZc6I'
/>
<CardItem
  src='https://i.pinimg.com/564x/04/8c/12/048c12db0f9e470761d2eb88d00d1077.jpg'
  text='Electronics'
  label='See more'
  path='https://amzn.to/3gyQR2A'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/71pNtrL6LuL._AC_UL320_.jpg'
  text='My Best Products'
  label='See more'
  path='https://amzn.to/3snNwpn'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/71jZlW38IUL._AC_UL320_.jpg'
  text='More items to consider'
  label='Shop now'
  path='https://amzn.to/3Dk04ob'
/>
</Box>

<Typography sx={{ fontSize: "24px", fontWeight: "900", color: "black", textAlign: "center", padding: "15px", fontFamily: "'Outfit', sans-serif" }} variant="h1" >Top 10 Must Have Products</Typography>

<Box className='cards__items'>
  <CardItem
    src='https://m.media-amazon.com/images/I/61ERduPWkrL._AC_SY450_.jpg'
    text='Bed Vacuum Cleaner Cordless, UV Mattress Vacuum Cleaner Powerful Suction, Handheld Couch Cleaner Machine Deep Cleaner for Bed Cleaning, Sheet, Fabric Sofa Vacuuming'
    label='See more'
    path=''
  />
  <CardItem
    src='https://m.media-amazon.com/images/I/71lGEQJt3vL._AC_SY450_.jpg'
    text='Zenmox Bamboo Clip On Couch Tray Built-in Mug Warmer with Mug Set - Table for Food, Drink Holder - Modern, Sleek Design - with 360° Rotating Phone Holder'
    label='See more'
    path=''
    />
    </Box>
    <Box className='cards__items'>
    <CardItem
      src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/efdf53b3-207e-410a-b3a7-ee5da20b1a05.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
      text='ROG Strix G10DK Gaming Desktop PC, AMD Ryzen 7 3700X, GeForce GTX 1660 Ti, 16GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 5, Windows 10 Home, G10DK-AB764'
      label='See more'
      path=''
    />
    <CardItem
        src='https://m.media-amazon.com/images/I/71ASPj7gCSL._AC_SX425_.jpg'
        text='Horizontal Wall Mug Rack - Large Wall Mounted Storage Display Organizer Rack for Coffee Mugs, Tea Cups, Mason Jars, and More. (34" x 23.5")'
        label='See more'
        path='/products'
    />
    <CardItem
        src='https://m.media-amazon.com/images/I/71LlfhZG1AL._AC_SX679_.jpg'
        text='WAITIEE Wireless Charger 3 in 1, 15W Fast Charging Station for Apple iWatch, AirPods Pro, Compatible with iPhone Pro & Max/8/8 Plus/Samsung Galaxy (White)'
        label='See more'
        path='/sign-up'
      />
      </Box>

      <Box className='cards__items'>
      <CardItem
        src='https://m.media-amazon.com/images/I/91S8HgXkbyL._AC_SX522_.jpg'
        text='Renoj Resistance Bands for Working Out, Exercise Bands Workout, 3 Booty Bands for Women Legs and Glutes, Yoga Starter Set'
        label='See more'
        path=''
      />
      <CardItem
        src='https://m.media-amazon.com/images/I/81XNhzMI9iL._AC_SX522_.jpg'
        text='Yjkoo Abs Muscle, Muscle Toner, Portable Muscle Trainer, Intelligent Wireless Fitness Apparatus, Fitness Trainer for Men and Woman'
        label='See more'
        path=''
      />
      </Box>

      <Box className='cards__items'>
        <CardItem
          src='https://m.media-amazon.com/images/I/71Td07yjoUL._SX425_.jpg'
          text='Neutrogena Makeup Remover Cleansing Face Wipes, Remove Waterproof Makeup and Mascara, Alcohol-Free'
          label='See more'
          path='/services'
        />
        <CardItem
          src='/Thigh Trimmers2.jpg'
          text='Experience Football on Top of the Himilayan Mountains'
          label='See more'
          path='/products'
        />
        <CardItem
          src='https://m.media-amazon.com/images/I/41jzSekfrfL._SX300_SY300_QL70_FMwebp_.jpg'
          text='Foot Peel Mask For Cracked Heels, Dead Skin & Calluses Exfoliating Peeling Treatment for Men and Women (Peach, 2 Pair (Pack of 1))'
          label='See more'
          path='https://www.amazon.com/Foot-Peel-Cracked-Heels-Calluses/dp/B0B5Z9XCD2?pd_rd_w=RC4GS&content-id=amzn1.sym.67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_p=67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_r=2J5BHB40E86D0G3RHFA1&pd_rd_wg=FoG31&pd_rd_r=d73bdca2-666c-48db-b761-15495a8e80ff&pd_rd_i=B0B5Z9XCD2&psc=1&linkCode=sl1&tag=m1000001-20&linkId=08b2b61122e88e52742f65cefdb07648&language=en_US&ref_=as_li_ss_tl'
        />
        </Box>

<Typography sx={{ fontSize: "20px", fontWeight: "900", color: "black", textAlign: "left", padding: "15px", fontFamily: "'Outfit', sans-serif" }} variant="h6" >International top sellers</Typography>

<Box className='cards__items'>
<CardItem
  src='https://m.media-amazon.com/images/I/61bkrsNhmPL._AC_UL320_.jpg'
  text='Home & Kitchen Under $30'
  label='Shop now'
  path='https://amzn.to/3eOqZPL'
/>
<CardItem
  src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
  text='Get fit at home'
  label='See more'
  path='https://amzn.to/3VS71Ek'
/>
<CardItem
  src='https://i.pinimg.com/236x/c2/01/45/c2014513c8edf1662467725094484af3.jpg'
  text='Create with strip lights'
  label='See more'
  path='https://amzn.to/3sfc18i'
/>
<CardItem
  src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/049d7dbd-6009-4531-9e2a-c05ab8061fde.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
  text='Shop Laptops & Tablets'
  label='Shop now'
  path='https://amzn.to/3Tsq5ao'
/>
</Box>

<Box className='cards__items'>
<CardItem
  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
  text='Shop trackers & smartwatches'
  label='Shop now'
  path='https://amzn.to/3MSBL3Z'
/>
<CardItem
  src='https://i.pinimg.com/564x/68/f7/dd/68f7dd5197aec3b764429aaceb35a075.jpg'
  text='Decorate for Halloween'
  label='Shop now'
  path='https://amzn.to/3F4Gm18'
/>
<CardItem
  src='https://m.media-amazon.com/images/I/813AlyPdDEL._AC_UY218_.jpg'
  text='Cell Phones & Accessories'
  label='Shop now'
  path='https://amzn.to/3gwzOOi'
/>
<CardItem
  src='https://i.pinimg.com/564x/ff/64/c2/ff64c29bf63742943c0d2ced920cff6a.jpg'
  text='More items to consider'
  label='Shop now'
  path='https://www.amazon.com/hz/wishlist/ls/1XI04QB979Y0T?ref_=wl_share'
/>
</Box>


<Typography sx={{ fontSize: "20px", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "black", padding: "15px", textAlign: "left" }} variant="h6" >Stuffed Animals & Toys under $10</Typography>

<Box className='cards__items'>
<CardItem
src='https://m.media-amazon.com/images/I/71CC-gq6nfL._AC_SX569_.jpg'
text='Sloth Soft Stuffed Animal Removable Blue T-Shirt'
label='Shop now'
path='https://amzn.to/3eUwso2'
/>
<CardItem
src='https://m.media-amazon.com/images/I/41+OIcvE8+L._AC_.jpg'
text='Cute Charming Pretty Dinosaur Stuffed Animals'
label='Shop now'
path='https://amzn.to/3guOmxU'
/>
<CardItem
src='https://m.media-amazon.com/images/I/61cZCpk4NBL._AC_SX569_.jpg'
text='Barbie Stroll ‘n Play Pups Playset with Blonde Barbie'
label='Shop now'
path='https://amzn.to/3z256TD'
/>
<CardItem
src='https://m.media-amazon.com/images/I/91AUJ+ZE9aL._AC_SX569_.jpg'
text='Pets Sadie Spotson Leopard Cat Plush'
label='Shop now'
path='https://amzn.to/3TpCcVE'
/>
</Box>

<Typography sx={{ fontSize: "20px", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "black", padding: "15px", textAlign: "left" }} variant="h6" >Home Décor Under $30</Typography>

<Box className='cards__items'>
<CardItem
src='https://m.media-amazon.com/images/I/71cLd6Tm1QL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
text='4 set Halomoon Christmas Pillow Covers'
label='Shop now'
path='https://amzn.to/3seOtR5'
/>
<CardItem
src='https://m.media-amazon.com/images/I/61bQz-M2u3S._AC_SX450_.jpg'
text='AMADA Floating Shelves Wall Mounted Set of 3'
label='See more'
path='https://amzn.to/3JSBUmr'
/>
<CardItem
src='https://m.media-amazon.com/images/I/819PzdoQELL._AC_SX450_.jpg'
text='YCOLL Modern Throw Pillow Cover'
label='See more'
path='https://amzn.to/3sen5me'
/>
<CardItem
src='https://m.media-amazon.com/images/I/61VYmeEbdXL._AC_SY450_.jpg'
text='Bedside Shelf Accessories Organizer'
label='Shop now'
path='https://amzn.to/3JSBUmr'
/>
</Box>

    </div>
  );
}

export default Gallery;
