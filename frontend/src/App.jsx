import { Card } from '../../components/Card'

function App() {

  const akshat_details = {
    username : "Akshat",
    description : "Upcoming pre-final yearite at IITR",
    linkedin : "https://www.linkedin.com/in/akshat-arora-2493a3292/",
    twitter : "https://x.com/0xAech",
    interests : "Swimming,Badmintion"
  };

  return (
    <div>
      <Card details = {akshat_details}></Card>
    </div>
  )
}

export default App

// I have not done any CSS, only that is different in the solutions.