// directly accessing `props` will give error, destructure it beforehand, or use

export function Card({details}){
    // e have to display name,desc, social media handles, Interests
    return <div>
        <h1>{details.username}</h1>
        <h2>{details.description}</h2>
        <h3>LinkedIn : {details.linkedin}</h3>
        <h3>Twitter : {details.twitter}</h3>
        <p>Personal Interests : {details.interests}</p>
    </div>
}