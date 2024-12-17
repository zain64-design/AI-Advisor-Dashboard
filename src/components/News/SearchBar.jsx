import React from 'react'
import { Button, Form } from 'react-bootstrap'
import SearchBarScss from '../../assets/scss/component/news/searchBar.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS'

const SearchBar = () => {
    useDynamicCSS(SearchBarScss);
    return (
        <>
            <Form className='search-bar'>
                <Form.Control type="search" className='ct-inp' name="search" placeholder='Search for articles' />
                <Button variant="search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14592 13.604C4.14592 8.3803 8.38055 4.14568 13.6042 4.14568C18.8279 4.14568 23.0625 8.3803 23.0625 13.604C23.0625 18.8276 18.8279 23.0623 13.6042 23.0623C8.38055 23.0623 4.14592 18.8276 4.14592 13.604ZM13.6042 0.604004C6.42453 0.604004 0.604248 6.42429 0.604248 13.604C0.604248 20.7837 6.42453 26.6039 13.6042 26.6039C16.5555 26.6039 19.2772 25.6205 21.4592 23.9633L29.9977 32.5018C30.6893 33.1934 31.8105 33.1934 32.502 32.5018C33.1936 31.8102 33.1936 30.689 32.502 29.9975L23.9636 21.459C25.6207 19.2769 26.6042 16.5553 26.6042 13.604C26.6042 6.42429 20.7839 0.604004 13.6042 0.604004Z" fill="white" />
                    </svg>
                </Button>
            </Form>
        </>
    )
}

export default SearchBar