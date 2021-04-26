import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route,  BrowserRouter } from 'react-router-dom';
import HomeScreen from './Views/homescreen/HomeScreen';
import ProductScreen from './Views/homescreen/ProductScreen';
import ProductDetails from './Views/products/ProductDetails';
import Headers from './Views/Headers/Headers';
import { Layout } from 'antd';
import Footers from './Views/Footers/Footers';
import CartScreen from './Views/Carts/CartScreen';
import SigninScreen from './Views/Signin/SigninScreen';
import Register from './Views/Register/Register';
import ConfirmInfoScreen from './Views/Carts/ConfirmInfoScreen';
import PaymentMethodScreen from './Views/Carts/PaymentMethodScreen';
import OrderScreen from './Views/Carts/OrderScreen';
import SeeOrder from './Views/Carts/SeeOrder';
import OrderHistoryScreen from './Views/homescreen/OrderHistoryScreen';
import ProfileScreen from './Views/homescreen/ProfileScreen';
import ManageProduct from '../src/Views/homescreen/ManageProduct.js';
import AdminRoute from '../../frontend/src/Views/Components/AdminRoute';
import SellerRoute from '../../frontend/src/Views/Components/SellerRoute';
import { useSelector } from 'react-redux';
import HeaderAdmin from './Views/Components/HeaderAdmin';
import HeaderSeller from './Views/Components/HeaderSeller';
import AddproductsScreen from './Views/products/AddproductsScreen';
import ProductEditScreen from './Views/products/ProductEditScreen';
import Thongke from './Views/homescreen/Thongke';
import OrderListScreen from './Views/homescreen/ManageOrderList';
import ManageUserList from './Views/homescreen/ManageUserList';
import UserEditScreen from './Views/homescreen/UserEditScreen';
import SellerScreen from './Views/homescreen/SellerScreen';
import SearchScreen from './Views/homescreen/SearchScreen';
import SearchBox from './Views/Searchs/Searchs';


const { Header, Content ,Footer } = Layout;

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  return (
    <BrowserRouter>
    <Layout className="mainLayout">
       <Header>
        {
          userInfo && userInfo.isAdmin ? (
            <HeaderAdmin></HeaderAdmin>
          ): 
             userInfo && userInfo.isSeller ? (
              <HeaderSeller></HeaderSeller>
          ):
          (
            <Headers />
          )
        }
      </Header>
      <Content>
      {
          userInfo && userInfo.isAdmin ? (
            <AdminRoute path="/thongke" component={Thongke} render></AdminRoute>
          ): userInfo && userInfo.isSeller ? (
              <SellerRoute path="/manageproduct/seller" component={ManageProduct} render />
          ):
          (
            <Route path="/" exact={true} component={ HomeScreen } render/>
          )
        }
      <AdminRoute path="/product/:id/edit"
            component={ProductEditScreen}
            exact
            render>
      </AdminRoute>
      <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order"
            component={SearchScreen}
            exact
          ></Route>
          <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
        <Route path="/seller/:id" component={SellerScreen}></Route>
        <Route path="/products/"  component={ ProductScreen } render/>
        <Route path="/signin" component={ SigninScreen } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/cart/:id?" component={ CartScreen } />
        <Route path="/order/:id" component={ SeeOrder } />
        <Route path="/register" component={ Register } />
        <Route path="/payment" component={ PaymentMethodScreen } />
        <Route path="/placeorder" component={ OrderScreen } />
        <Route path="/checkinfo" component={ ConfirmInfoScreen } />
        <Route path="/orderhistory" component={ OrderHistoryScreen } />
        <Route path="/profile" component={ ProfileScreen } />
        <AdminRoute path="/themsanpham" component={AddproductsScreen} exact/>
        <AdminRoute path="/manageproduct" component={ManageProduct} render exact/>
        <AdminRoute path="/manageorder" component={OrderListScreen} exact/>
        <AdminRoute path="/manageuser" component={ManageUserList} exact/>
        <AdminRoute path="/user/:id/edit" component={UserEditScreen} render exact/>
        <SellerRoute path="/manageproduct/seller" component={ManageProduct} exact/>
        <SellerRoute path="/manageorder/seller" component={OrderListScreen} exact/>
      </Content>
      <Footer>
        <Footers />
      </Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
