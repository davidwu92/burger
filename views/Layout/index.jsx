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
      {/* The PROPS dumped in <Layout> are brought in here*/}
     {props.children} 
     {/* I need the axios CDN here so I can use axios */}
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    {/* Relative to this upon loading, all the folders and files exist together. */}
    <script src="./app.js"></script>
    </body>
    </html>
  )
}