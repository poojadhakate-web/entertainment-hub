import { Badge } from '@mui/material'
import React from 'react'
import {img_300, unavailable} from '../../Config/Config'
import './SingleContent.css'
// import Badge from '@mui/material/Badge';

const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
  return (
    <div className='media'>
    <Badge badgeContent={vote_average} color={vote_average>6? 'primary':'secondary'}/>
        <img src={poster? `${img_300}/${poster}` : unavailable}  className="poster" />
        <b className='title text-center'>{title}</b>
        <span className='subTitle subTitleOne text-center'>
            {media_type === "tv" ? "TV series" : "movie"}
        </span>
            <span className='subtitle text-center'>{date}</span>
    </div>
  )
}

export default SingleContent;
