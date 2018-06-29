import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import NavBar from './NavBar'
import SearchBar from'./SearchBar'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicProducts: [],
        searchString:"This is from App.js",
        cart:[]
    }
  }

  

  updateSearchString(searchInput){
    console.log("notification",searchInput)
    this.setState({
      searchString: searchInput
    })
  }

  handleAddToCart(newProduct){
    console.log("This is the message from App and this is the product that is clicked",newProduct)
    let newCart = [...this.state.cart, newProduct]
    this.setState({
      cart: newCart
    })

  }
  render(){
    return(
      <div className='App'>
          <SearchBar searchString={this.state.searchString} cart={this.state.cart} thisPropFunction_updateSearchString={(searchStringIn)=>this.updateSearchString(searchStringIn)}/>
          <NavBar />
          <ProductContainer cart={this.state.cart} products = {this.state.dynamicProducts} handleAddToCartInProductContainer = {(product)=>this.handleAddToCart(product)}/>
      </div>
    );
  }

  componentDidMount (){
    let self = this
    // fetch('https://api.myjson.com/bins/12fv7q')
    fetch('https://api.myjson.com/bins/937v2')
    .then(function(response){
        console.log("This is the Data from the API", response)
        return response.json()
    })
    .then(jsonResponse => {
        console.log("This is the JSON response", jsonResponse)
        self.setState({ dynamicProducts: jsonResponse})
    })
    .catch(function(error){
        console.log(error)
    })

  }
}

export default App