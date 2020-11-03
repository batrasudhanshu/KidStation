import React from 'react'
import "./styleComponents/Combo.css";
const Combo = () => {
    return (
        <>
           <combo_page>
                <div className="header" >
                    <div className="inner-header flex">
                        <div className="tag-content">
                        <h2>Customize your Combo</h2>
                        
                        <span>You can create your own combo/Gift-Hampers from wide range of products we offer. For more details, click here and and will be in touch with you over WhatsApp</span>
                            <div className="combo-connect-btn">
                                <a target="blank" href="https://api.whatsapp.com/send?phone=919999089262&text=Hello KidStation!">Click Here</a>
                            </div>
                        </div>
                    </div>
                </div>    
           </combo_page> 
        </>
    )
}

export default Combo
