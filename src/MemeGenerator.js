import React from 'react'
import { Button, Form, Col, ListGroup } from 'react-bootstrap'
import '../src/'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: '',
      randomImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTK00zuHEcRKikULPXvjUj6kOb7m_u0Uon_A_GhaQkCGSTCo3K&usqp=CAU',
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        console.log(memes[5])
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
  }

  render() {
    return (
      <Col>
        <ListGroup>
          <ListGroup.Item>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='formBasicText'>
                <Form.Label className='label'>Top Text</Form.Label>
                <Form.Control
                  className='input'
                  name='topText'
                  type='text'
                  value={this.state.topText}
                  placeholder='Input Your Top Text'
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formBasicText'>
                <Form.Label className='label'>Bottom Text</Form.Label>
                <Form.Control
                  className='input'
                  name='bottomText'
                  type='text'
                  value={this.state.bottomText}
                  placeholder='Input Your Bottom Text'
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant='dark' className='button' type='submit' block>
                Submit
              </Button>
            </Form>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className='image'>
              <img src={this.state.randomImg} alt='' className='img' />
              <h2 className='top'>{this.state.topText}</h2>
              <h2 className='bottom'>{this.state.bottomText}</h2>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    )
  }
}

export default MemeGenerator
