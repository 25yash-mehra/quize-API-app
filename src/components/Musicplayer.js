import React, { useEffect, useState } from 'react'

function Musicplayer() {
const [data,setData] = useState([])
// const [err,setErr] = useState(null)
const [count,setCount] = useState(0)
  const quizeApi = async () =>{
    try{
        const url = await fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`)
        if(!url.ok){
            throw new Error('Network response was not ok');
        }
        const store = await url.json()
        setData(store.results)

        console.log(store)

    } catch(err){
    //    setErr(err)
       console.log(err);
    }
  }

  useEffect(()=>{
    quizeApi()
  },[])

//next question
const next =()=>{
setCount(count +1)
}
  
  return (
   <>
   <h1>daya</h1>
   {
data.length > 0 ?  (
    <div  >
<h1>{count +1} of {data.length}</h1>
<h1 dangerouslySetInnerHTML={{__html:data[count].question}}></h1>
{data[count].incorrect_answers.map((item,id)=>{
    return (
        <div key={id}>
            <button>{item.incorrect_answers}</button>
            {console.log(item.incorrect_answers)}
        </div>
    )
})}
</div>
)  : (
    <h1>loading</h1>
   )
   }
   <button onClick={next}>next</button>
   </>
  )
}

export default Musicplayer