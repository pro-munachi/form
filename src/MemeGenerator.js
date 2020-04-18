import React from 'react'
import styled from  'styled-components'

const Wrapper = styled.div `
margin: 0;
background: #7FDBFF;
`

const Para = styled.input `

  width: 30%;
  padding: 15px 22px;
  margin: 15px 20px;
  box-sizing: border-box;
  top: 0;
  bottom: 0;


`
const Submit = styled.button `

  width: 12%;
  padding: 15px 22px;
  border-radius: 1em;
  color: white;
  background: green;

`
const Pic = styled.img `
width: 50%;
`
const Myhead = styled.h2 `
position: relative;
width: 90%;
text-align: center;
left: 50mm;
transform: translateX( -50%);
margin: 15px 0;
padding: 0 5px;
font-size: 2em;
text-transform: uppercase;
letter-spacing: 1px;
`

class MemeGenerator extends React.Component {
    constructor() {
    super()
    this.state = {
    topText: "",
    bottomText: '',
    randomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTK00zuHEcRKikULPXvjUj6kOb7m_u0Uon_A_GhaQkCGSTCo3K&usqp=CAU',
    allMemeImgs: []

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const{memes} = response.data
            console.log(memes[5])
            this.setState({allMemeImgs: memes})
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return (
            <Wrapper >
            <form onSubmit={this.handleSubmit} className='memes'> 
                <Para 
                name='topText'
                type='text'
                value={this.state.topText}
                placeholder='Top Text'
                onChange={this.handleChange}
                />

                <Para 
                name='bottomText'
                type='text'
                value={this.state.bottomText}
                placeholder='Bottom Text'
                onChange={this.handleChange}
                />
                
                <Submit>Sub</Submit>
            </form>

            <div>
                <Pic src={this.state.randomImg} alt='' />
                <Myhead>{this.state.topText}</Myhead>
                <Myhead>{this.state.bottomText}</Myhead>
                
            </div>
            </Wrapper>
        )
    }
}

export default MemeGenerator