import React, { useId, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Text from '../UI/Text';
import '../../assets/scss/component/faq/faqAccordion.scss'
import { IoChevronDownSharp } from "react-icons/io5";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FAQAccordion = ({ faqData, isLoading, isError, error }) => {

    const [activeKey, setActiveKey] = useState(['0']);

    return (
        <>
            <Accordion className='ct-accord' defaultActiveKey={activeKey} alwaysOpen>
                {isLoading ? <SkAccordLoader />
                    : isError ? <Text as='h6'>{error.message}</Text>
                        : faqData?.map((value,index) => {
                            const { id, head, para } = value;
                            return (
                                <Accordion.Item eventKey={index.toString()} key={id}>
                                    <AccordionHeader head={head} />
                                    <AccordionBody para={para} />
                                </Accordion.Item>
                            )
                        })
                }
            </Accordion>
        </>
    )
}

export default FAQAccordion

export const AccordionBody = ({ para }) => {
    return (
        <Accordion.Body>
            <Text as='p'>{para || <Skeleton count={2} height={10} />}</Text>
        </Accordion.Body>
    )
}

export const AccordionHeader = ({ head }) => {
    return (
        <Accordion.Header>
            {head || <Skeleton count={1} height={10} width={100} />}
            <div className="ct-icon">
                <IoChevronDownSharp />
            </div>
        </Accordion.Header>
    )
}

export const SkAccordLoader = () => {
    return (
        Array.from({ length: 6 }).map((_, index) => {
            return (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <AccordionHeader />
                    <AccordionBody />
                </Accordion.Item>
            )
        })
    )
}

