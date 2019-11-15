// layout/index.jsx
const React = require('react')

//don't forget to change boiler plate stuff to camoCase!
//this is sent OUT to views/index.jsx; 

module.exports = props => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
    </head>
    <body>
      {/* The PROPS dumped in <Layout> are called here*/}
     {props.children} 
    </body>
    </html>
  )
}