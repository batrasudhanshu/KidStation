import React from 'react'
import Refund_banner from './Refund_banner'
import '../styles/Refund.css'
import SearchFilter from '../CMS/ProductCrud/SearchFilter';

const Return = () =>{
    return(
        <refund>
            <SearchFilter />
            <Refund_banner/>
            <div  className="refund">
                <p  className="black">Thanks for shopping at <span id="gradient_text">KID STATION</span><br/>If you are not entirely satisfied with your purchase, we're here to help you</p>
                
                <div className= "row return_section" id="return">
                    <strong className="black col-12 brown_gradient" >Returns</strong>
                    <br/>
                    <ul>
                    <li className="black">You have 7 calender days to return an item from the date you received it.</li>
                    <li className="black">Any product you return must be in same condition you received it and in the orignal packaging. <span>Please keep the receipt.</span></li>
                    <li className="black">If you are not 100% satisfied with your purchase, simply send it back within 14 days and we'll refund the full costof item minus shipping cost</li>
                    </ul>
                </div>
                <div className = "row return_section" id = "refund">
                    <strong className="black col-12 brown_gradient" >Refunds</strong>
                    <br/>
                    <ul>
                        <li className="black">Once we receive your item, we will inspect it and notify you that we have received your returned item. We will notify the status of your refund after inspecting the item.</li>
                        <li className="black">If your return is approved. We will initiate a refund to your orignal method of payment.You will receive the credit within a certain amount of days, depending on your card issuer's policies.</li>
                    </ul>
                </div>
                <div className="row return_section" id="shipping"> 
                    <strong className="black col-12 brown_gradient">Shipping</strong>
                    <br/>
                    <ul>
                        <li className="black">You will be responsible for paying for your own shipping costs for your item. Shipping costs are non-refundable</li>
                        <li className="black">If you receive a refund, the cost of return shipping will be deducted from your</li>
                    </ul>
                </div>
                <div className="row contact_section" id="shipping" >
                <strong className="black col-12 brown_gradient">Contact</strong>
                <br/>
                    <p className="black">If you have any questions on how to return your item to us. <span><a id="gradient_text" href="">Contact US</a></span></p>
                </div>
            </div>  
    </refund>
    );
}
export default Return