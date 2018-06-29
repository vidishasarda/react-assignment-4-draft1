import React from 'react'
import Product from './Product'

// const products = [
//   {
//     productBrand: 'Bottega Venneta',
//     productName: 'Slip on Sneaker - Blue',
//     productCost: 750,
//     productImage: "https://media.yoox.biz/items/11/11477977IM_16_ep.jpg"
//   },
//   {
//     productBrand: 'Bottega Venneta',
//     productName: 'Low Top Sneaker',
//     productCost: 690,
//     productImage: "https://media.yoox.biz/items/11/11477992FS_16_ep.jpg"
//   },
//   {
//     productBrand: 'Bottega Venneta',
//     productName: 'ARCTIC SUEDE BV FELLOWS SNEAKER',
//     productCost: 830,
//     productImage: "https://media.yoox.biz/items/11/11489558ME_16_ep.jpg"
//   },
//   {
//     productBrand: 'Bottega Venneta',
//     productName: 'Dodger Sneaker',
//     productCost: 590,
//     productImage: "https://media.yoox.biz/items/11/11489558ME_16_ep.jpg"
//   },
// ]

const ProductContainer = (props) =>{

  return(
    <div className="products">
          {
            props.products.map(function(eachProduct){
                return <Product 
                handleAddToCartInProduct={(product)=>props.handleAddToCartInProductContainer(product)}
                //key={eachProduct.id}
                presentInCart = {eachProduct.isPresent}
                productId={eachProduct.id}
                productBrand={eachProduct.productBrand} 
                productName={eachProduct.productName} 
                isAddedToCart={props.cart.indexOf(eachProduct.id) >= 0}
                //flag ={props.cart.eachProduct.presentInCart}
                productCost={eachProduct.productCost} 
                productImage={eachProduct.productImage}/>
            })
          }
    </div>
    )
  }

// class ProductContainer extends React.Component {
//   render(){
//     return(
//       <div className="products">
//             {
//               this.props.products.map(function(eachProduct){
//                   return <Product productBrand={eachProduct.productBrand} productName={eachProduct.productName} productCost={eachProduct.productCost} productImage={eachProduct.productImage}/>
//               })
//             }
//       </div>
//     )
//   }

//   componentWillReceiveProps(nextProps){
//     //  console.log("This are old Props", this.props)
//       console.log("This are new Props",nextProps)
//   }
// }

export default ProductContainer