import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, detailProducts } from '../../actions/productAction';
import { Row, Col, Radio, Button, Rate, Tabs, Image } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { PRODUCT_REVIEW_CREATE_RESET } from '../../constants/productConstants';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';
import Rating from '../Components/Rating';


function ProductDetails(props) {
    const [slmua, setSoluong] = useState(1);
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });
    const { TabPane } = Tabs;
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading ,error} = productDetails;
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const {
        loading: loadingReviewCreate,
        error: errorReviewCreate,
        success: successReviewCreate,
    } = productReviewCreate;

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    useEffect(() => {
        if (successReviewCreate) {
            window.alert('Gửi đánh giá thành công!');
            setRating('');
            setComment('');
            dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
        }
        dispatch(detailProducts(productId));
    }, [dispatch, productId, successReviewCreate]);

    const Addtocart = () => {
        props.history.push("/cart/" + productId + "?slmua=" + slmua)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (comment && rating) {
            dispatch(
                createReview(productId, { rating, comment, name: userInfo.name })
            );
        } else {
            alert('Hãy nhập đánh giá của bạn vào !');
        }
    };
    return (
        <div>
            <div className="back-to-result">
                <button type="primary"><span><Link to="/products" >Trở về</Link></span></button>
            </div>
            { loading ? <div>Xin đợi một chút! Trang web đang lấy dữ liệu...</div> :
                error ? <div>{error}</div> : (
                    <div>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <Row span={6}></Row>
                            <Row span={18}>
                                <h1>Thông tin chi tiết</h1>
                            </Row>
                        </Col>
                        <Col span={2}></Col>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={9}>
                                <div className="details-image">
                                    <Image
                                        width={500}
                                        src={product.image} />
                                </div>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h2>{product.name}</h2>
                                        </li>
                                        <li>
                                            <h4>{product.category}</h4>
                                        </li>
                                        <li>
                                            {product.rating} Stars
                                            <Rate value={product.rating} />
                                            {product.review} Reviews
                                        </li>
                                        <li>
                                            Giá: <b> $ {product.price} </b>
                                        </li>
                                        <li>
                                            Mô tả :
                                            {product.description}
                                        </li>
                                        <li>
                                            <br />
                                            <b>Color : </b> {product.mau}
                                        </li>
                                        <li>
                                            <br />
                                            <b>Kiểu dáng : </b> {product.kieudang}
                                        </li>
                                        <li>
                                            <br />
                                            <b>Nhãn hiệu : </b> {product.brand}
                                        </li>
                                        <li>
                                            <br />
                                            <b>Trạng thái : </b> {product.soluongco > 0 ? "Còn hàng" : "Hết hàng"}
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Giá</div>
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                                <Row>
                                    <Col span={9}>Số lượng</Col>
                                    <Col span={9}>Cỡ giày</Col>
                                </Row>
                                <Row>
                                    <Col span={9}>
                                        <select value={slmua} onChange={(e) => { setSoluong(e.target.value) }}>
                                            {[...Array(product.soluongco).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                    </Col>
                                    <Col span={10}>
                                        {/* thay doi gia tri cho radio va gom nhóm chúng  */}
                                        <Radio.Group defaultValue="37">
                                            <Radio.Button value="37">37</Radio.Button>
                                            <Radio.Button value="38">38</Radio.Button>
                                            <Radio.Button value="39">39</Radio.Button>
                                            <Radio.Button value="40">40</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    {product.soluongco > 0 &&
                                        <Button type="primary" onClick={Addtocart}>
                                            <IconFont type="icon-shoppingcart" />
                                        Thêm vào giỏ
                                    </Button>
                                    }
                                </Row>
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                        <Row>
                            <Tabs defaultActiveKey="2">
                                <TabPane
                                    tab={
                                        <span>
                                            {/* icon */}
                                            Mô tả
                                        </span>
                                    }
                                    key="1"
                                >
                                    {product.description}
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>

                                            Đánh giá
                                        </span>
                                    }
                                    key="2"
                                >
                                    <div>
                                        {product.reviews.length === 0 && (
                                            <MessageBox>Không có đánh giá nào!</MessageBox>
                                        )}
                                        <ul>
                                            {product.reviews.map((review) => (
                                                <li key={review._id}>
                                                    <strong>{review.name}</strong>
                                                    <Rating rating={review.rating} caption=" "></Rating>
                                                    <p>{review.createdAt.substring(0, 10)}</p>
                                                    <p>{review.comment}</p>
                                                </li>
                                            ))}
                                            <li>
                                                {userInfo ? (
                                                    <form className="form" onSubmit={submitHandler}>
                                                        <div>
                                                            <h2>Write a customer review</h2>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="rating">Rating</label>
                                                            <select
                                                                id="rating"
                                                                value={rating}
                                                                onChange={(e) => setRating(e.target.value)}
                                                            >
                                                                <option value="">Select...</option>
                                                                <option value="1">1- Poor</option>
                                                                <option value="2">2- Fair</option>
                                                                <option value="3">3- Good</option>
                                                                <option value="4">4- Very good</option>
                                                                <option value="5">5- Excelent</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="comment">Comment</label>
                                                            <textarea
                                                                id="comment"
                                                                value={comment}
                                                                onChange={(e) => setComment(e.target.value)}
                                                            ></textarea>
                                                        </div>
                                                        <div>
                                                            <label />
                                                            <button className="primary" type="submit">
                                                                Submit
                                                            </button>
                                                        </div>
                                                        <div>
                                                            {loadingReviewCreate && <LoadingBox></LoadingBox>}
                                                            {errorReviewCreate && (
                                                                <MessageBox variant="danger">
                                                                    {errorReviewCreate}
                                                                </MessageBox>
                                                            )}
                                                        </div>
                                                    </form>
                                                ) : (
                                                    <MessageBox>
                                                        Hãy <Link to="/signin">Đăng nhập</Link> để có thể đánh giá
                                                    </MessageBox>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Row>
                    </div>
                )
            }
        </div>
    );
}

export default ProductDetails;