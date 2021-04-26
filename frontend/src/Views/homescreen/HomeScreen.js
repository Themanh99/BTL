import { Carousel, Image, Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { topProduct } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function HomeScreen(props) {
    const dispatch = useDispatch();
    const productTop = useSelector((state) => state.productTop);
    const {
        loading,
        error,
        products
    } = productTop;

    useEffect(() => {
        dispatch(topProduct());

    }, [dispatch])
    return (
        <div className="heroblock">
            <Carousel autoplay autoplaySpeed={2000} >
                <div>
                    <Image src="assets/images/nen1.jpg" />
                </div>
                <div>
                    <Image src="assets/images/nen2.jpg" />
                </div>
                <div>
                    <Image src="assets/images/nen4.jpg" />
                </div>
            </Carousel>
            <div id="about" className="block aboutBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>About Us</h2>
                        <p>dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                    <div className="contentHolder">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
                    </div>
                    {loading ? <div>Xin đợi một chút! Trang web đang lấy dữ liệu...</div> :
                        error ? <div>{error}</div> :
                            (
                                <div>
                                    <div className="titleHolder">
                                        <h2>Top Product</h2>
                                    </div>
                                    <Row gutter={[16, 16]}>
                                        {products.map((product) => {
                                            return (
                                                <Col md={{ span: 8 }} key={product._id}>
                                                    <div className="product" >
                                                        <div className="image-pro">
                                                            <Link to={`/product/${product._id}`}>
                                                                <img className="product-image" src={product.image} alt="product" />
                                                            </Link>
                                                        </div>
                                                        <div className="product-name">
                                                            <Link to={'/product/' + product._id}>{product.name}</Link>
                                                        </div>
                                                        <div className="product-brand">{product.brand}</div>
                                                        <div className="product-price">{product.price}</div>
                                                        <div className="product-rating">{product.rating} Stars ({product.review})</div>
                                                    </div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;