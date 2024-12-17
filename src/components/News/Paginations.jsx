import React from 'react';
import {Pagination,Col} from 'react-bootstrap';
import { LuChevronRight } from "react-icons/lu";
import PaginationScss from '../../assets/scss/component/news/pagination.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const Paginations = () => {
  useDynamicCSS(PaginationScss);
  return (
    <>
    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
    <div className="pagination-wrap d-flex align-items-center gap-3">
    <span>page</span>
    <Pagination>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next>
      <LuChevronRight />
      </Pagination.Next>
    </Pagination>
    </div>
    </Col>
    </>
  )
}

export default Paginations;