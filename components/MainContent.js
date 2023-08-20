import React from "react"
import Card from "./Card"
import data from "../data"

export default function MainContent() {
  const datalist = data
  console.log(datalist)
  const cards = datalist.map((item) => {
    return (
      <Card {...item} />
    )
  }
  )
  return (
    <div className="main-content">
      {cards} 
    </div>
  )
}
