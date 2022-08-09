import React from "react";
import { useState } from "react";

const myPhoto1 = new URL('../../assets/myPhoto1.jpg',import.meta.url)
const myPhoto2 = new URL('../../assets/myPhoto2.jpg',import.meta.url)
const myPhoto3 = new URL('../../assets/myPhoto3.jpg',import.meta.url)
const myPhoto4 = new URL('../../assets/myPhoto4.jpg',import.meta.url)
const arrowPrev = new URL('../../assets/prev.png',import.meta.url)
const arrowNext = new URL('../../assets/next.png',import.meta.url)


function Photo({photo}) {
  const {file, alt} = photo
  return(
    <div className="photo">
      <img src={file} alt={alt} />
    </div>
  )
}

export default function SlidePhotos(){
  const availablePhotos= [
    {file: myPhoto1, alt: "I'm Sasawat!"},
    {file: myPhoto2, alt: "Hi, how are you?"},
    {file: myPhoto3, alt: "nice to meet you."},
    {file: myPhoto4, alt: "You can call me HomHomna"}
  ]
  const [currentIndex, setCurrentIndex]= useState(0)
  function previous(){
    const maxIndex = availablePhotos.length - 1
    let newIndex 
    if(currentIndex === 0){
      newIndex = maxIndex
    }
    else {
      newIndex = currentIndex - 1
    }
    setCurrentIndex(newIndex)
  }

  function next(){
    const maxIndex = availablePhotos.length - 2
    let newIndex
    if(currentIndex > maxIndex){
      newIndex = 0
    }
    else {
      newIndex = currentIndex + 1
    }
    setCurrentIndex(newIndex)
  }

  return(
    <section>
      <Photo photo={availablePhotos[currentIndex]}/>

      <div className="arrow">
        <div className="arrow-prev" onClick={()=> previous()}>
          <img src={arrowPrev}  />
        </div>
        <div className="arrow-next" onClick={()=> next()}>
          <img src={arrowNext}  />
        </div>
      </div>
    </section>
  )
}