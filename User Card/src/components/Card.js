import React from 'react';
import './styles.css';

/* {"id":1,
"email":"george.bluth@reqres.in",
"first_name":"George",
"last_name":"Bluth",
"avatar":"https://reqres.in/img/faces/1-image.jpg"} */

export default function Card(props) {
  return (
    <div className='userCard'>
      <img src={props.image} className='userImage'></img>
      <div className='userName'>{props.first_name} {props.last_name}</div>
      <div className='userEmail'>{props.email}</div>
    </div>
  )
}
