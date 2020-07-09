import React from "react";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import shipping from '../../src/images/shipping.jpg';
// import HeaderBanner from '../ui_components/BaseComponent/HeaderBanner';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:12,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, shippingtime, deliverytime, totaltime) {
  return { name, shippingtime, deliverytime, totaltime };
}

const rows = [
  createData('Metro Cities', '2-3 working days', '2-4 working days', '4-7 working days'),
  createData('Rest of India', '2-3 working days', '6-8 working days', '8-11 working days'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});
const Shipping = () => {
  const classes = useStyles();
  return (
    <shipping_page className="shipping-page">
      <SearchFilter />
      <h2>Shipping Policy</h2>
      {/* <HeaderBanner tag="Shipping Policy" bannerImg={`url(${shipping})`} /> */}
      <Grid container spacing={2}>

      <Grid item xs={12}>
        <div>
          <span>
            We currently offer <strong>FREE DELIVERY</strong> on all orders Above Rs.499/-. You
            do not have to pay any shipping charges on Order Above Rs.499/-
            placed on <span><a style={{color:'orangeRed',fontSize:'1.8rem'}} href="/">KidStation</a></span>
          </span>
          
          <p className="shipping-para-one">
            The large majority of our orders are shipped within 2-3 working days
            of the order, and delivered in 2-4 days from shipping.However, there
            may be delay in delivering to remote areas / villages and other
            towns as delivery is purely vested with courier companies.We ship
            through leading courier services, and you can track your order
            online after it is shipped. In the unlikely event we are unable to
            deliver any items in your order, be assured that you will not be
            charged for that item, or you shall be refunded the full amount
            charged for the item.
          </p>
          <span>
          WE ARE COMMITTED TO DELIVERING YOUR ORDER ACCURATELY, IN GOOD CONDITION, AND ALWAYS ON TIME.
          </span>
          <ul className="shipping-points">
            <li>We currently deliver to more than 850+ cities across India.</li>
            <li>Our shipping and delivery lead times vary by destination, and the typical lead times are as shown below</li>
          </ul>
        </div>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Destination</StyledTableCell>
            <StyledTableCell align="center">Shipping Time (A)</StyledTableCell>
            <StyledTableCell align="center">Delivery Time (B)</StyledTableCell>
            <StyledTableCell align="center">Total time (A+B)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.shippingtime}</StyledTableCell>
              <StyledTableCell align="center">{row.deliverytime}</StyledTableCell>
              <StyledTableCell align="center">{row.totaltime}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="footer-second-points">
      <ul>
        <li>As mentioned above, we ship most items within 2-3 working days of the order. However in some cases, we may take longer, up to 7 working days, to ship the order as we may have to procure it from some other stores or our suppliers. In the unlikely event that we are not able to ship your order completely within 7 working days of the order, we shall cancel the remaining unshipped part of the order, and send you an email informing you about the same. In such cases, your payment against the unshipped part of the order shall be refunded, in the manner you have made the payment*.</li>
        <li>We ship on all week days (Monday to Saturday), excluding public holidays.</li>
        <li> To ensure that your order reaches you in the fastest time and in good condition, we only ship through reputed courier agencies</li>
        <li>While we strive hard to deliver on time, due to the load with the couriers, estimate a delay of 2-3 days.</li>
        <li> If your order has multiple items, these may ship separately from different locations in separate shipments. You will receive a separate email if the shipment does not contain all the items that you had ordered.</li>
        <li>We are not responsible for any delay caused by any unforeseen time lags by the courier companies in delivering the goods to the customer, or if the customer is not available at the time of delivery.</li>
        <li> If you believe that the product is not in good condition, or if the packaging is tampered with or damaged, before accepting delivery of the goods, please refuse to take delivery of the package, and call our Customer Care at <span><a style={{color:'orangeRed',fontSize:'1.8rem'}} href="mailto:kidstation2020@gmail.com">kidstation2020@gmail.com</a></span>, mentioning your order reference number. We shall make our best efforts to ensure that a replacement delivery is made to you at the earliest.</li>
        <li>Please note all items (including gifts) will be shipped with an invoice mentioning the price, as per Indian Tax Regulations. Octroi or entry tax if any should be borne by the customer.</li>
      </ul>
    </div>
    <div>
      <p>
        <span>*Note :</span>
        In the event we have to cancel any items in your order, if you have paid using a credit card your credit card shall not be charged for the above cancelled item(s). If you have paid using a debit card/netbanking, your bank shall be instructed to refund the amount within 2 working days. However, the actual credit to your account will depend on your banks processing time, which may be 7-15 days. If you do not receive a credit within this time, please check with your bank and let us know if you face any issues with the same.
      </p>
    </div>
    </Grid>
    </Grid>
    </shipping_page>
  );
};

export default Shipping;
