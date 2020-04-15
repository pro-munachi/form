import React from 'react';
import './App.css';

class App extends React.Component {
 constructor() {
   super()
   this.state = {
   firstName: "",
   lastName: '',
   age: '',
   gender: '', 
   destination: '',
   isVegan: false,
   isKash: false,
   isLactose: false
   }
   this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event) {
   const{name, value, type, checked} = event.target
   type === 'checkbox' ?
   this.setState({
     [name]: checked
   })
   :
   this.setState({
     [name]: value
   })
 }
 
  render() {

  return (
    <div className="App">
  <form>
  <input type="text"
   name='firstName'
   value={this.state.firstName}
   placeholder="First Name"
   onChange={this.handleChange}/><br />

   <input type='text'
    placeholder='Last Name'
    name='lastName'
    value={this.state.lastName}
    onChange={this.handleChange}
   /><br />

<input type='number'
    placeholder='Age'
    name='age'
    value={this.state.age}
    onChange={this.handleChange}
   />
   <br />

   <label>
     <input
      name="gender" 
      value="male"
      type="radio" 
      onChange={this.handleChange}
      checked={this.state.gender === "male"}
      />Male
   </label><br />

   <label>
     <input
      name="gender" 
      value="female"
      type="radio" 
      onChange={this.handleChange}
      checked={this.state.gender === 'female'}
      />Female
   </label><br />
   <select value={this.state.destination} name='destination' onChange={this.handleChange}>
     <option value="europe">Europe</option>
     <option value="asia">Asia</option>
     <option value="south america">South America</option>
     <option value='north america'>North America</option>
   </select><br/>

   <input
    type='checkbox' 
    name='isVegan' 
    onChange={this.handleChange}
    checked={this.state.isVegan} 
    />Is Vegan<br />

<input
    type='checkbox' 
    name='isLactose' 
    onChange={this.handleChange}
    checked={this.state.isLactose} 
    />Is Lactose<br />

<input
    type='checkbox' 
    name='isKash' 
    onChange={this.handleChange}
    checked={this.state.isKash} 
    /> Is Kash<br />

  
  
  </form>
  <hr />
  <h1>Information</h1>
  <p>name: {this.state.firstName} {this.state.lastName}</p>
  <p>Age: {this.state.age}</p>
  <p>i am a {this.state.gender}</p>
  <p>i stay at {this.state.destination}</p>
  <p>Your dietary restrictions</p>
  Vegan: {this.state.isVegan ? 'Yes' : 'No'}<br />
  Kash: {this.state.isKash ? 'Yes' : 'No'}<br />
  Lactose: {this.state.isLactose ? 'Yes' : 'No'}

    </div>

  );
  }
}

export default App;
