//Bring in React.
const React = require('react')
//calling the layout.
const Layout = require('./Layout')

module.exports = () =>{
  return(
    // PROPS are things that we hand down to another component. example: hotdog prop.
    <Layout hotdog='example prop'>  
      <h1>Another example prop: this is one of the children of Layout now.</h1> 
      <h2>EAT DA BURGER</h2>
    
    {/* SHOW BURGERS HERE */}
    

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