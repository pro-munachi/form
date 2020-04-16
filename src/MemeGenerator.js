import React from 'react'

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
            <div >
            <form onSubmit={this.handleSubmit} className='memes'> 
                <input 
                name='topText'
                type='text'
                value={this.state.topText}
                placeholder='Top Text'
                onChange={this.handleChange}
                />

                <input 
                name='bottomText'
                type='text'
                value={this.state.bottomText}
                placeholder='Bottom Text'
                onChange={this.handleChange}
                />
                
                <button className='but'>Gen</button>
            </form>

            <div>
                <img src={this.state.randomImg} alt='' />
                <h2>{this.state.topText}</h2>
                <h2>{this.state.bottomText}</h2>
            </div>
            </div>
        )
    }
}

export default MemeGenerator