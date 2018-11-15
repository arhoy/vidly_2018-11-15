import React from 'react';
// using https://fontawesome.com/v4.7.0/icon/heart-o
const Like = (props) => {
    
        let classes = `fa fa-heart-o fa-${props.size}`;
        if(props.liked){
            classes = `fa fa-heart fa-${props.size}`;
        }
        return (
                <i 
                    onClick = {props.onLike} 
                    className= {classes} 
                    style = {{color:props.color,cursor:'pointer'}}
                    size = {props.size}
                    aria-hidden="true">
                </i>
        );
    
}

export default Like;