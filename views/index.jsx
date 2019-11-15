//Bring in React.
const React = require('react')
//calling the layout.
const Layout = require('./Layout')
const Burger = require('./Burger')

module.exports = props =>{
  return(
    // PROPS are things that we hand down to another component. example: hotdog prop.
    <Layout hotdog='example prop'>  
      <h1>Another example prop: this is one of the children of Layout now.</h1> 
      <h2>EAT DA BURGER</h2>
    
    {/* SHOW BURGERS HERE */}
    {/* COMMENTED OUT THIS PART BECAUSE IT WON'T WORK AND I DONT KNOW HOW TO WORK WITH PROPS.BURGERS*/}
    {/* {
      props.burgers.map(burger =>{
        return (
          <div className = 'burger' id = {burger.id} data-eaten={burger.eaten}>
            <Burger
              name = {burger.name}
              eaten = {burger.eaten}
            />    
            <hr/>
          </div>
        )
      })
    } */}

    {/* FORM FOR ADDING BURGER */}
      <form>
        <p>
          <label htmlFor="burgerName">Burger: </label>
          <input type="text" name="name" id="name"/>
        </p>
        <p>
          <button id="addBurger">Add burger</button>
        </p>
      </form>
    </Layout>
  )
}