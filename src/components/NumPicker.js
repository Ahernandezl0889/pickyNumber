import React from 'react'

// create function outside the class
function getNum(){
    return Math.floor((Math.random()*10)+1)
}


export default class NumPicker extends React.Component{
    render () {
        // will save the value of the function
        const num = getNum();
        // i have to call the function to pass the number   
      return (
        <div className = "number"> 
        {/* using braces we can embeded regular JavaScript */}
            <h1>Your number is: {num}</h1>
            {/* we are telling that if is 7 is will said Congrats, otherwise Unlucky */}
            <p className ="">{num ===7 ? "Congrats!" : "Unlucky!"}</p>
            {/* if number is 7 will display an image, if not nothing will appear (: null) */}
        {/* eslint-disable-next-line */}
            {num === 7 ? <img src="https://media1.giphy.com/media/hVYVYZZBgF50k/giphy.webp?cid=790b7611bec3210349ebaf548b1b6308c861bed68605d163&rid=giphy.webp" /> :null}
      </div>
      )
    }
}
