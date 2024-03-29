import {Card, IconButton} from '@mui/material';
import React from "react";
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const RestaurantCard= ({item,index})=>{
    const navigate=useNavigate();
    const handleAddToFavourites=()=>{
        console.log("add to fav.........")
    }
    return (
        <Card className='m-5 w-[18rem] productCard'>
            <div 
            onClick={() => navigate(`/restaurant/${item.name}/${item.address}/${index + 1}`)}
            >
                <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.imageUrl}alt=""/>
            </div>
            <div className='p-4 textPart lg:flex w-full justify between'>
                <div className='space-y-l'>
                    <p className='font-semibold text-lg'>{item.name}</p>
                    <p className='text-gray-500 text-sm'>{item.address}</p>
                    <p className='text-gray-500 text-sm'>{item.description.length>40?item.description.substring(0,40)+"...":item.description}</p>
                </div>
            </div>
            <div>
                <IconButton onClick={handleAddToFavourites}>
                    {index%2==0?<FavoriteIcon color='primary'/>:<FavoriteBorderOutlinedIcon/>}
                </IconButton>
            </div>
        </Card>
    )
}
export default RestaurantCard;