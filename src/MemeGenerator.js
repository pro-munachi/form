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

    render() {
        return (
            <div>
            <form>
                <input 
                name='topText'
                type='text'
                value='this.state.topText'
                />
                <input 
                
                />
                <button>Gen</button>
            </form>
            </div>
        )
    }
}

export default MemeGenerator