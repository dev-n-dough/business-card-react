// directly accessing `props` will give error, destructure it beforehand, or use

export function Card({cards}){
    // e have to display name,desc, social media handles, Interests (ignore the styling for now)

    // e THIS HIGH LEVEL DIV TO BE RETURNED IS VERY IMPORTANT
    return <div>
        {cards.map((card) => {
            // details=cards[0];
            return <div>
            <h1>{card.username}</h1>
            <h2>{card.description}</h2>
            <h3>LinkedIn : {card.linkedin}</h3>
            <h3>Twitter : {card.twitter}</h3>
            <p>Personal Interests : {card.interests}</p>

            <button>Edit Card</button>
            <button onClick={() => {
                const delete_payload = {
                    method : "DELETE",
                    body : JSON.stringify({
                        id : card._id
                    }),
                    headers: {
                        "Content-type" : "application/json"
                    }
                };
                fetch("http://localhost:3000/delete", delete_payload)
                    .then(async function(res){
                        const json = await res.json();
                        console.log(json.msg);
                    })
            }}>Delete Card</button>
        </div>
        })}
    </div>
    // console.log(cards);
}