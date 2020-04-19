import React from 'react'
import styled from 'styled-components'



const Myimg = styled.img `
width: 35%;
min-height: auto;
`
const Fig = styled.figure `
float: right;
width: 30%;
text-align: center;
font-style: italic;
font-size: smaller;
text-indent: 0;
border: thin black solid;
margin: 0.5em;
padding: 0.5em;
`

function About() {
    return (
        <div>
         <Fig>  
         <Myimg src='/asset/img/Snapchat-322511253.jpg' alt='' />   
         <blockquote>Munachiso is generous and kind</blockquote>
         <figcaption>Munachi - 2020</figcaption>
         
         </Fig> 
         <div>
             <h2>About Madu Stanley Munachiso</h2><hr />
             <p>Madu Stanley Munachiso resides in Owerri Municipal Local Government Area in Imo State, Nigeria. He was introduced to programming by his elder brother,
               he successfully has HTML,CSS,Javascript,React.js under his arms and is still striving to learn Angular,Node,Php, and many others.</p>
         </div>
        </div>
    )
}

export default About 