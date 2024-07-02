import { useState } from 'react'

//This is a component made inside same file
function Item({name,isPacked}){
  //This is when we want to render a list with tick
  // if(isPacked){
  //   return <li className='item'>{name}✔️</li>
  // }else{
  //   return <li className='item'>{name}</li>
  // }

  //When we want to render anything at all : we can return null
  //This Method of writing violates DRY
  // if(isPacked){
  //   return null;
  // }else{
  //   return <li className='item'>{name}✔️</li>
  // }

  //Better method using JS conditional
  return (
    <li>
      {isPacked ? (
        <del>
          {name+"✔️"}
        </del>
      ) :name}
    </li>
  )



}

function ConditionalRendering() {

  return (
    <>
      <h1>This is a list</h1>
      <ul>
      <Item
        name="I am learning  react"
        isPacked={true}
      />
      <Item
        name="Conditional Rendering achieved"
        isPacked={true}
      />
      <Item
        name="It is not good"
        isPacked={false}
      />
      </ul>

    </>
  )
}

export default ConditionalRendering;
