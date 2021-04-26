import React from 'react';

function Thongke(props) {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                    <div className="row-lg-12">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Tổng doanh thu </h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="text-bold text-lg">1220</span>
                                            <span>Visitors Over Time</span>
                                        </p>
                                        <p className="ml-auto d-flex flex-column text-right">
                                            <span className="text-success">
                                                <i className="fas fa-arrow-up" /> 12.5%
                        </span>
                                            <span className="text-muted">Since last week</span>
                                        </p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <canvas id="visitors-chart" height={200} />
                                    </div>
                                    <div className="d-flex flex-row justify-content-end">
                                        <span className="mr-2">
                                            <i className="fas fa-square text-primary" /> This Week
                      </span>
                                        <span>
                                            <i className="fas fa-square text-gray" /> Last Week
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Sản phẩm bán chạy theo </h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="text-bold text-lg">1220</span>
                                            <span>Visitors Over Time</span>
                                        </p>
                                        <p className="ml-auto d-flex flex-column text-right">
                                            <span className="text-success">
                                                <i className="fas fa-arrow-up" /> 12.5%
                        </span>
                                            <span className="text-muted">Since last week</span>
                                        </p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <canvas id="visitors-chart" height={200} />
                                    </div>
                                    <div className="d-flex flex-row justify-content-end">
                                        <span className="mr-2">
                                            <i className="fas fa-square text-primary" /> This Week
                      </span>
                                        <span>
                                            <i className="fas fa-square text-gray" /> Last Week
                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header border-0">
                                    <h3 className="card-title">Dánh sách sản phẩm bán chạy</h3>
                                    <div className="card-tools">
                                        <a href="1" className="btn btn-tool btn-sm">
                                            <i className="fas fa-download" />
                                        </a>
                                        <a href="2" className="btn btn-tool btn-sm">
                                            <i className="fas fa-bars" />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-striped table-valign-middle">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Sales</th>
                                                <th>More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Some Product
                          </td>
                                                <td>$13 USD</td>
                                                <td>
                                                    <small className="text-success mr-1">
                                                        <i className="fas fa-arrow-up" />
                              12%
                            </small>
                            12,000 Sold
                          </td>
                                                <td>
                                                    <a href="3" className="text-muted">
                                                        <i className="fas fa-search" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Another Product
                          </td>
                                                <td>$29 USD</td>
                                                <td>
                                                    <small className="text-warning mr-1">
                                                        <i className="fas fa-arrow-down" />
                              0.5%
                            </small>
                            123,234 Sold
                          </td>
                                                <td>
                                                    <a href="4" className="text-muted">
                                                        <i className="fas fa-search" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Amazing Product
                          </td>
                                                <td>$1,230 USD</td>
                                                <td>
                                                    <small className="text-danger mr-1">
                                                        <i className="fas fa-arrow-down" />
                              3%
                            </small>
                            1912 Sold
                          </td>
                                                <td>
                                                    <a href="5" className="text-muted">
                                                        <i className="fas fa-search" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Perfect Item
                            <span className="badge bg-danger">NEW</span>
                                                </td>
                                                <td>$199 USD</td>
                                                <td>
                                                    <small className="text-success mr-1">
                                                        <i className="fas fa-arrow-up" />
                              123%
                            </small>
                            127 Sold
                          </td>
                                                <td>
                                                    <a href="12" className="text-muted">
                                                        <i className="fas fa-search" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thongke;