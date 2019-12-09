import React from 'react';


export default (props) => {
    let {snippet: {title,description , channelTitle}} = props.detail;
    return (
        <div>
        <p>Title: {title}</p>
        <p>Description : {description}</p>
        <p>channelName : {channelTitle}</p>
        </div>
    )
}