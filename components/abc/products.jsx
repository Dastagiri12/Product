import React from 'react';
import PhoneDeatails from './phone-data'


import UserService from '../../shared/services/user-service';



class ProductPannel extends React.Component {
  constructor (){
    super()
    this.state = {
      products:[]
    }
    this.userService = new UserService()
  }
  componentDidMount =()=>{
    this.userService.getUser()
    .then((product) => {
        this.setState({
          products: product

        })
        // console.log("Produt Deatails",this.state.products)
    })
  }




  render() {
  
const produtData =this.state.products.map(produt => <PhoneDeatails key={produt.id} prodata={produt} />)

    return (
       <div>
         
            {produtData}    
       
      </div>
    );
  }
}


export default ProductPannel
