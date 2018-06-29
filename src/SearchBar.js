import React from 'react'

class SearchBar extends React.Component {
 
    // constructor(){
    //     super()
    //     this.state={
    //         searchString:""
    //     }
    // }

    handleSearchInput(event){
        console.log("this is triggered",event)
        // this.setState({
        //     searchString: event.target.value
        // })
        this.props.thisPropFunction_updateSearchString(event.target.value)
    }

 
 
    render(){
    return(
      <div classname='header'>
          <input value={this.props.searchString} onChange={event=>this.handleSearchInput(event)}/>
          <div className='cart-cont'>
              <span className='cart-font' > {this.props.cart.length} </span>
            </div>
      </div>
    )
  }
}

export default SearchBar