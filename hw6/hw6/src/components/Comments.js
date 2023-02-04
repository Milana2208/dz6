import React, { useState, useEffect } from "react";


function Comments({userId}) {
    const [comments, setComments] = useState([])
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setComments(data)
    })
    useEffect(() => {

    }, [comments])
    
  return (
    <div>
        {comments.slice(0, 3).map(comment => 
            <p>{comment.body}</p>
        )}
    </div>
  )
}

export default Comments