import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
    super()
    this.state = {
    topText: "",
    bottomText: '',
    randomImg: '',
    allMemeImgs: []

    }
    this.handleChange = this.handleChange.bind(this)
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

    render() {
        return (
            <div>
            <form>
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
                placeholder='Top Text'
                onChange={this.handleChange}
                />
                
                <button>Gen</button>
            </form>
            </div>
        )
    }
}

export default MemeGenerator