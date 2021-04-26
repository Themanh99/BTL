import React, { useEffect } from 'react';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productAction';
import Products from '../Components/Products';

function ProductScreen(props) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch]);

    return (
        <div>
            {
                loading ? (<LoadingBox></LoadingBox>) :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                        : 
                        (
                            <div>
                            <li className="products">
                            {products.length === 0 && <MessageBox>Không có sản phẩm nào!</MessageBox>}
                                {products.map((product) => (
                                    <Products key={product._id} product={product}></Products>
                                )
                                )}
                            </li>
                            </div>
                        )
            }
        </div>
    )

}

export default ProductScreen;