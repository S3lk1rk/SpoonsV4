import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../index.css"
const Review = ({ food }) => {
    const [areviewText, setaeviewText] = useState("")
    const [breviewText, setbeviewText] = useState("")
    const [creviewText, setceviewText] = useState("")

    const a = () => {
        console.log("fml")
        if (areviewText !== "" && breviewText !== "" && creviewText !== "") {
            const newpreview = {
                name: areviewText,
                rating: breviewText,
                comment: creviewText,
            }
            console.log(food.preview)
            food.preview.push(newpreview)
            console.log(food.preview)
            setaeviewText("");
            setbeviewText("");
            setceviewText("");
        }
      
    }
    console.log(food.preview)
    return (
        <div className="cam-control">Review

                <p>Please leave a review</p>
                <div class="namereview">
                <p>Name</p>
                <input type="text" value={areviewText} onChange={(e) => setaeviewText(e.target.value)}placeholder="Enter a your name"></input>
                </div>
                <div class="ratingreview">
                <p>Rating</p>
                <input type="number" min="1" max="10" value={breviewText} onChange={(e) => setbeviewText(e.target.value)} placeholder="Enter a number 1-10"></input>  
                </div>
                <div class="ratingreview">
                <p>Comments</p>
                <input type="text" value={creviewText} onChange={(e) => setceviewText(e.target.value)}placeholder="leave a comment"></input>
                </div>
                <button onClick={() => a()} > Add Review </button>
                <div class="reviews">
                <p>linebreak</p>
                {food.preview.map((item,i) =>{
                    return <div>{item.name}{item.rating}{item.comment}</div>
                    
                })}
                </div>
       
  
        </div>
        
    

    );
};
export default Review;