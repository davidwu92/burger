//Burger/index.js for VIEWING BURGERS FROM THE DATABASE
const React = require('react')

module.exports = props =>{
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Eaten: {props.eaten}</p>
    </div>
  )
}