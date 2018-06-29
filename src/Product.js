import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render(){
    return(
      <div className="shoe">
            <div className="shoeImage">
                <img src={this.props.productImage}/>
            </div>
            <h2 className="shoeBrand">{this.props.productBrand}</h2>
            <h2 className="shoeName">{this.props.productName}</h2>
            <h2 className="shoeCost">$ {this.props.productCost}</h2>
            {
              this.props.isAddedToCart ?
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToCartInProduct(this.props.productId) }}  className="added" type="button"> Delete </button>
                  {/* <button onClick= */}
              </div> :
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToCartInProduct(this.props.productId) }}  className="added" type="button"> Add to cart </button>
              </div>
            }
            {/* <div className="shoeAdd">
                { <button className="addBtn" type="button"> Add to the cart </button> */}
            
      </div>
    )
  }
}

Product.propTypes = {
  productBrand: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productCost: PropTypes.number,
  productImage:PropTypes.string,
  productId: PropTypes.number
}

Product.defaultProps = {
  productPrice: 0,
  productImage:"http://4.bp.blogspot.com/_CHG2GRbeET8/SS3f-tcSNiI/AAAAAAAAJEk/qVdRYu1MLMs/s320/missing-715826.gif"
}

export default Product