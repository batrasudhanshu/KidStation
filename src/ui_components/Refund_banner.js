import React from 'react'
import ban from '../images/ban.jpg'


const Refund_banner = () => {
    let refund_style = {
        backgroundImage:'url(' + ban + ')'
    }

    return (
   
    <div class="banner-breadcum section">
<div class="row">
	<div class="breadcrumb-image" style={refund_style}>
    <div class="container text-center">
        <h1>Return policy</h1>
    </div>
    </div>

</div>
</div>
    )
}
export default Refund_banner