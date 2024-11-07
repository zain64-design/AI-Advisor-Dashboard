import React, { useState } from 'react';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const statsData = [
      { icon: 'st-icon-1.png', title: 'Total Properties', count: 2156 },
      { icon: 'st-icon-2.png', title: 'Ongoing Properties', count: 900 },
      { icon: 'st-icon-3.png', title: 'Completed Properties', count: 1256 },
    ];
  
    const ongoingProperties = [
      { property: 'BloomHill Apartments Suite 043', street: '333 Xavier Street', city: 'Stoltenbergton', zipCode: '11506', startDate: '09/16/2024', completionDate: '09/16/2024' },
    ];
  
    const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <>
    <div className="home-area">
      <div className="container-ct">
        <div className="row">

          {statsData.map((stat, index) => (
            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card multi-card stats-card">
                <div className="top-area">
                  <div className="detail">
                    <img src={`assets/images/${stat.icon}`} className="img-fluid" alt={stat.title} />
                    <h6>{stat.title}</h6>
                  </div>
                  <div className="action">
                    <i className="fa-light fa-ellipsis-stroke-vertical"></i>
                  </div>
                </div>
                <div className="desc">
                  <h5>{stat.count}</h5>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card multi-card table-card">
              <div className="top-area">
                <h4>Ongoing Properties</h4>
              </div>
              <div className="table-area table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Street</th>
                      <th>City</th>
                      <th>Zip Code</th>
                      <th>Start Date</th>
                      <th>Completion Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ongoingProperties.map((property, index) => (
                      <tr key={index}>
                        <td>{property.property}</td>
                        <td>{property.street}</td>
                        <td>{property.city}</td>
                        <td>{property.zipCode}</td>
                        <td>{property.startDate}</td>
                        <td>{property.completionDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                  <span>Page</span>
                  <ul>
                    {[1, 2, 3, 4, 5, 6].map(page => (
                      <li key={page}>
                        <button
                          onClick={() => handlePagination(page)}
                          className={`page-number ${currentPage === page ? 'page-active' : ''}`}
                        >
                          {page}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button>
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home