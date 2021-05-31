import { Carousel, Image, Row, Col, Rate } from 'antd';
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
                        <p>Trang web tạo ra để bán giày online nhé các bạn</p>
                    </div>
                    <div className="contentHolder">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
                    </div>
                    {loading ? <div>Xin đợi một chút! Trang web đang lấy dữ liệu...</div> :
                        error ? <div>{error}</div> :
                            (
                                <div>
                                    <div className="titleHolder">
                                        <h2>Top Đánh giá cao nhất</h2>
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
                                                        <div className="product-rating">{product.rating} Stars
                                                             <Rate value={product.rating} />
                                                        </div>
                                                    </div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            )
                    }
                    <div className="row">
                        <div className="col" style={{width:'550px',backgroundColor: 'aliceblue', margin: '5px', borderRadius: '10px', marginLeft: '20px' }}>
                            <div className="row">
                                <div className="col" style={{ textAlignLast: 'left' }}>
                                    <img alt="" src="images/icon1.png" style={{ width: '100px', height: '100px', marginTop: '14px' }} />
                                </div>
                                <div className="col" style={{ border: "box-sizing" }}>
                                    <h3>Giao hàng miễn phí</h3>
                                    <p>Miễn phí giao hàng trong nội thành Hà Nội</p>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={ {width:'550px',backgroundColor: 'aliceblue', margin: '5px', borderRadius: '10px' }}>
                            <div className="row">
                                <div className="col" style={{ textAlignLast: 'left' }}>
                                    <img alt="" src="images/icon3.png" style={{ width: '100px', height: '100px', marginTop: '14px' }} />
                                </div>
                                <div className="col" style={{ border: "box-sizing" }}>
                                    <h3>Khuyến mại</h3>
                                    <p>Khuyến mại sản phẩm nếu đơn hàng trên 20.000.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;