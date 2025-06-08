import { useState } from "react";

export function CreateCard(){

    const [username,setUsername] = useState("");
    const [description,setDescription] = useState("");
    const [linkedin,setLinkedin] = useState("");
    const [twitter,setTwitter] = useState("");
    const [interests,setInterests] = useState("");

    return <div>
        <input type="text" placeholder="username" onChange={(e) => {
            setUsername(e.target.value);
        }}></input><br/>
        <input type="text" placeholder="description" onChange={(e) => {
            setDescription(e.target.value);
        }}></input><br/>
        <input type="text" placeholder="linkedIn" onChange={(e) => {
            setLinkedin(e.target.value);
        }}></input><br/>
        <input type="text" placeholder="twitter" onChange={(e) => {
            setTwitter(e.target.value);
        }}></input><br/>
        <input type="text" placeholder="personal interests" onChange={(e) => {
            setInterests(e.target.value);
        }}></input><br/>

        <button onClick={() => {
            // fetch POST call
            const post_payload = {
                method : "POST",
                body : JSON.stringify({
                    username,
                    description,
                    linkedin,
                    twitter,
                    interests
                }),
                headers:{
                    "Content-Type" : "application/json"
                }
            };
            fetch("http://localhost:3000/card", post_payload)
                .then(async function(res){
                    const json = await res.json();
                    console.log("Post response : ",json);
                })
        }}>Create Card</button>
    </div>
}