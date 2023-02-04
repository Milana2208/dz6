import React, { useState, useEffect } from "react";
import Comments from '../../components/Comments'


function MainPage() {

    const [posts, setPosts] = useState([])
    const [clickedPostId, setClickedPostId] = useState(0)
    const [isCom, setIsCom] = useState(false)
    
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setPosts(data)
    })
    useEffect(() => {

    }, [posts])
    const showCom = (pId) =>{
        setClickedPostId(pId)
        setIsCom((prev)=>!prev)
    }

  return (
    <div>
        {posts.slice(0, 5).map((post, id) =>
            <div>
                <p key={id} 
                style={{
                    border:"2px solid grey",
                    maxWidth:"700px",
                    margin:"0 auto",
                }}>
                    {post.title}
                    ---
                    <button onClick={()=>showCom(post.id)}>comments</button>
                </p>
                { post.id == clickedPostId 
                        &&
                        
                        <li>
                            <Comments userId={post.id}/>
                            ---
                            <button onClick={showCom}>comments</button>
                        </li>
                    }
                
            </div>
        )}
    </div>
  )
}

export default MainPage