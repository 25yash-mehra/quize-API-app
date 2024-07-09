// import React, { useEffect, useState } from 'react'

// function Musicplayer() {
// const [data,setData] = useState([])
// // const [err,setErr] = useState(null)
// const [count,setCount] = useState(0)
// const [score,setScore] = useState(0)
//   const quizeApi = async () =>{
//     try{
//         const url = await fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`)
//         if(!url.ok){
//             throw new Error('Network response was not ok');
//         }
//         const store = await url.json()
//         setData(store.results)
//         console.log(store);
//     } catch(err){
//     //    setErr(err)
//        console.log(err);
//     }
//   }

//   useEffect(()=>{
//     quizeApi()
//   },[])

// //next question
// const next =()=>{
//   if(count < 9){
//   setCount(count +1)
// }
// }

// //maintaining score 
// const maintain = (selectedAnswer) =>{
//   // if(data.length){

//   // }
//   if(selectedAnswer === data[count].correct_answer){
//     setScore(score +1)
//   }
//   console.log(score);
//   if(count < 9){
//     setCount(count +1)
//   }
// }
//   return (
//    <>
//    <h1>daya</h1>
//    {
// data.length > 0 ?  (
//     <div  >
// <h1>{count +1} of {data.length}</h1>
// <h1 dangerouslySetInnerHTML={{ __html: data[count].question }}></h1>
// {[...data[count].incorrect_answers].concat(data[count].correct_answer).map((item,id)=>{
//     return (
//         <div key={id}>
//             <button
//             onClick={()=>{maintain(item)}}
//             >{item}</button>
//         </div>
//     ) 
// })}
// </div>
// )  : (
//     <h1>loading</h1>
//    )
//    }
//    <button onClick={next} style={{padding:"10px 30px", marginTop:"20px"}}>next</button>
//    <h1>total score {score}</h1>
//    </>
//   )
// }

// export default Musicplayer