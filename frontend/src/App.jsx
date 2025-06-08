import { Card } from '../../components/Card'
import { CreateCard } from '../../components/CreateCard';
import { useState } from 'react';

function App() {

  // const cards = [{
  //   username : "Akshat",
  //   description : "Upcoming pre-final yearite at IITR",
  //   linkedin : "https://www.linkedin.com/in/akshat-arora-2493a3292/",
  //   twitter : "https://x.com/0xAech",
  //   interests : "Swimming,Badmintion"
  // }];

  const [cards,setCards] = useState([]);

  fetch("http://localhost:3000/cards")
  .then(async function(res){
    const json = await res.json();
    setCards(json.cards);
    })

  return (
    <div>
      <CreateCard></CreateCard>
      <Card cards = {cards}></Card>
    </div>
  )
}

export default App

