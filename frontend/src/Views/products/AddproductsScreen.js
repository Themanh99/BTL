import React, { useState } from 'react';

function AddproductsScreen(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [soluongco, setSoluongco] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [kieudang, setKieudang] = useState('');
    const [dongsanpham, setDongsanpham] = useState('');
    const [mau, setMau] = useState('');
    const [isActive, setIsactive] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Thêm sản phẩm </h1>
                </div>
                        <div>
                            <label htmlFor="name">Tên giày</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="price">Giá</label>
                            <input
                                id="price"
                                type="text"
                                placeholder="Enter price"
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="image">Ảnh</label>
                            <input
                                id="image"
                                type="text"
                                placeholder="Enter image"
                                onChange={(e) => setImage(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                placeholder="Enter category"
                                onChange={(e) => setCategory(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="brand">Nhãn hiệu</label>
                            <input
                                id="brand"
                                type="text"
                                placeholder="Enter brand"
                                onChange={(e) => setBrand(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="soluongco">Số lượng có</label>
                            <input
                                id="soluongco"
                                type="text"
                                placeholder="Enter soluongco"
                                onChange={(e) => setSoluongco(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="description">Mô tả</label>
                            <textarea
                                id="description"
                                rows="3"
                                type="text"
                                placeholder="Enter description"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="kieudang">Kiểu dáng</label>
                            <textarea
                                id="kieudang"
                                type="text"
                                placeholder="Enter kieudang"
                                onChange={(e) => setKieudang(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="dongsanpham">Dòng sản phẩm</label>
                            <textarea
                                id="dongsanpham"
                                rows="2"
                                type="text"
                                placeholder="Enter dongsanpham"
                                onChange={(e) => setDongsanpham(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="mau">Màu sắc</label>
                            <textarea
                                id="mau"
                                type="text"
                                placeholder="Enter mau"
                                onChange={(e) => setMau(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="radioActive">
                            <label htmlFor="isActive">Trạng thái hiển thị</label>
                            <select value="true" onChange={(e) => setIsactive(e.target.value)}>
                                <option value="true">Active</option>
                                <option value="false">No Active</option>
                            </select>
                        </div>
                        <div>
                            <label></label>
                            <button className="primary" type="submit">
                                Thêm
                            </button>
                        </div>
            </form>
        </div>
    );
}

export default AddproductsScreen;