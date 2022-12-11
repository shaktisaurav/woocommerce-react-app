import React, { Component } from 'react';
import Banner from '../components/Banner';
import ProductSlider from '../components/ProductSlider';
import CategorySlider from '../components/CategorySlider';
import { fetchVendors, fetchUser } from '../utils/api';
import { connect } from 'react-redux';
import StoresList from '../components/store/StoreList';
const mapDispatchToProps = (dispatch) => {
  return{
    fetchVendors :() => {dispatch(fetchVendors())},
    fetchUser :(user) => {dispatch(fetchUser(user))}
  }
}
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login,
        orders: state.orders,
        stores: state.stores
    }
}
class Home extends Component{
  componentDidMount(){
    this.props.fetchVendors();
  }
  render(){
    return(
      <div className='home-page'>
      <Banner />
      <CategorySlider title="" fetch="categories" />
      <div className='restaurants-nearby'>20 Stores nearby <span>Delivery</span></div>
      <StoresList stores={this.props.stores}></StoresList>
      <ProductSlider title="New Arrivals" fetch="products" />
      <ProductSlider title="Category" fetch="products?category=112" />
      <ProductSlider title="Tag" fetch="products?tags=34" />
      <ProductSlider title="Category" fetch="products?category=113" />
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
