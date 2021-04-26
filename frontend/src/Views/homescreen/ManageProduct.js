import { PlusSquareTwoTone } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, listProducts } from '../../actions/productAction';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../../constants/productConstants';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';


export default function ManageProduct(props) {
  const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }if (successDelete) {
      window.alert('Đã xóa thành công !');
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts({ seller: sellerMode ? userInfo._id : '' }));
  }, [createdProduct, dispatch, props.history,sellerMode, successCreate,successDelete,userInfo._id]);

  const deleteHandler = (product) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };
  const chuyentrang = () => {
    props.history.push('/themsanpham');
  }
  return (
    <div>
    <h1>Danh sách sản phẩm</h1>
    <div className="row">
      
      <button type="button" className="primary" onClick={createHandler}>
      <PlusSquareTwoTone />
          Thêm nhanh
        </button>
        <button type="button" className="primary" onClick={chuyentrang}>
          <PlusSquareTwoTone />
          Thêm sản phẩm
      </button>
      </div>
      {loadingDelete && <LoadingBox>
      </LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox>
        </LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Giá</th>
              <th>Loại</th>
              <th>Nhãn hiệu</th>
              <th>Màu</th>
              <th>Kiểu dáng</th>
              <th>Dòng sản phẩm</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.mau}</td>
                <td>{product.kieudang}</td>
                <td>{product.dongsanpham}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}