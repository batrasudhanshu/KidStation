import React , {useEffect} from "react";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '5px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgb(250,249,245)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    fontSize:20,
  },
}))(MuiExpansionPanelDetails);

const Refund = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
      <refund_page className="refund-page">
      <SearchFilter />
		  <h2 >Refund Policy</h2>
      <Grid container spacing={3}>
      <Grid item xs ={12}>
        <div className="return-policy">
          <div className="return-policy-head">
              <span>KidStation's Return policy</span>
          </div>
          <div className="return-policy-detail">
          <span style={{marginBottom:'2rem'}}>All products sold on KidStation are brand new and 100% genuine. We offer easy replacement for all products sold, under certain conditions which are mentioned below:</span>
        <ul>
          <li>if you are not completely satisfied with the products, you can return all the items in the order to us in the unused condition within 30 days of delivery to get a 100% refund.</li>
          <li>In case of any manufacturing defect / transit damages customers has to be reported us within 72 hours from the delivery, After which we may not be able to accept the complaint.</li>
          <li>We may ask you to share the images of the product and the internal & external packaging material.</li>
          <li>Once we agree to replace, then we will replace the defective/damaged product with a brand new product at no extra cost.</li>
          <li>KidStation will try to replace the specific product ordered. However, the company reserves the right to offer an alternate product in case the product is Out of Stock or Discontinued by the manufacturer.</li>
          <li>Damages due to normal wear & tear and negligence on part of the customer is not returnable at all.</li>
        </ul>
        <span>Following are the terms and conditions for return/replacement:</span>
          <ul>
            <li>Products must be in their original condition.</li>
            <li>Only unused, unaltered, unsoiled products with their original tags will be accepted.</li>
            <li>Brand packaging should be intact. Do not paste anything or use any adhesive based tape on the original packaging. If needed, you may put it in a plastic bag and then stick over it.</li>
            <li>Replacements will be made basis availability of that product on the website.</li>
            <li>Brand’s policy shall apply for specific branded product. We source branded products and these products are bound by brand policies of repair, exchange, refunds and cancellations thereby binding the customer with the same.</li>
          </ul>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
      <div className="refund-ques">
      
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className = "ques-text" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How long will it take to process a cancellation request?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ans1">
          <span>Once we receive a cancellation request, it will take maximum 48 hours to cancel the order. You will be notified of the same.</span><br/>
        <span>
        In case your order has been “Shipped”, we may take your cancellation request; however, we shall be able to process refund once we receive the cancelled items back from the courier.
        </span><br/>
        <span>
        If you opt for store credit as a refund, it will take 1-2 working days. You can use the amount for future purchases with us.
        </span><br/>
        <span>
        However, if you opt for having the money transferred back to the source of transaction,while we process the refund immediately and notify your bank, it usually takes up to 7-10 business days for your bank to process the refund and the same to reflect in your account. Please get in touch with the banks directly in case of any delays post confirmation of cancellation/refund by us.
        </span>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" className="ques-text" id="panel2d-header">
          <Typography>Why did KidStation cancel my order?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ans3">
          <span>Your order can be cancelled due to any of the below reasons:</span>
        <ul>
          <li>Technical issues related to pricing information.</li>
          <li>Non-availability of the product(s).</li>
          <li>Payment problem identified by Fraud Detection Department.</li>
        </ul>
        <span>Note: We may put additional checks and verifications or seek more information before accepting any order. We will contact you if all or a part of your order is cancelled or if additional information is required to accept your order.</span>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" className="ques-text" id="panel3d-header">
          <Typography>How Do I cancel my order?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ans3">
          <span>You can cancel your COD or Pre-paid order any time prior to its shipment.</span>
          <ul>
            <li>If you wish to cancel an order, please contact our Customer Support team through Contact us form or Write us at info@www.stationeryworld.net and let us know the reason for it.</li>
            <li>Our Customer Support team will review the reason for your cancellation request and try to resolve the objective if possible.</li>
            <li>If you still do not wish to continue with your order, we’ll cancel it without any further delay.</li>
            <li>Once the order is cancelled, a confirmation email will be sent to your registered email ID.</li>
          </ul>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4-content" className="ques-text" id="panel4d-header">
          <Typography>I want to return a faulty/damaged product, how do I proceed?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ans5">
          <span>Please follow the below mentioned steps :</span>
        <ul>
          <li>Click clear images of the product showing damages.</li>
          <li>Email us the images.</li>
          <li>Explain the exact detail of the damage/defect and the status of the package that you received.</li>
          <li>The complaint and the images should be sent to us within 72 hours of the delivery. Failing to do so, we will not be able to serve the claim for you.</li>
          <li>f necessary, we will arrange a pickup of the product through our logistic partner. If we are unable to do so, we will request you to send the product back to us.</li>
          <li>Once the product reaches us, our Team will evaluate your returned product to ensure adherence to our Returns Guidelines.</li>
        </ul>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" className="ques-text" id="panel5d-header">
          <Typography>What are KidStation's Returns Guideline?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className="ans5">
        <ul>
          <li>Return Policy is implied only where the product have defect or damage. Cases where the wrong selection was made by the customer will be considered discretionary returns and may attract Cancellation/Restocking Charges.</li>
          <li>Customers may be asked to send the product back to us through a courier of Thier choice. In case of returns for a cause – where a different product is delivered from the ordered product OR the product got damaged in transit – www.stationeryworld.net will reimburse the cost ( Up to Rs.150/- ) of courier charges for returning the products back to us. In case of returns of choice – where the customer does not like the product or simply changes mind – the courier charges for the returns will have to be borne by the customer.</li>
          <li>Replacement policy is applicable only on the products “sold by KidStation” and not from any other Merchant / Seller or Marketplace. In that case, Seller Specific Return Policy will be followed.</li>
          <li>KidStation is not responsible for any in-transit damages, while product has been shipped by the customer. Customer is solely responsible for the damage claim from courier company.</li>
        </ul>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" className="ques-text" id="panel6d-header">
          <Typography>When are returns not possible?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="ans6">
          <span>There are certain scenarios where it is difficult for us to support returns, which are:</span>
        <ul>
          <li>If the return request is made outside the specified time frame.</li>
          <li>Items that are returned without original packaging, freebies or accessories.</li>
          <li>If the product is damaged because of use or the product is not in the same condition in which you had received it.</li>
          <li>Defective products which are covered under the manufacturer’s warranty.</li>
          <li>Any consumable item which has been installed or used.</li>
          <li>Products that may/have been tampered or products with missing serial numbers.</li>
        </ul>
        
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary aria-controls="panel7d-content" className="ques-text" id="panel7d-header">
          <Typography>How will I get a refund for the order I cancelled or returned?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className="ans6">
        <ul>
          <li>Once the resolution is set for refund, we will soon move ahead with the refund.</li>
          <li>Refund will be done by the same method we received the payment in. In exceptions, we may ask you for the Bank account details.</li>
        </ul>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary aria-controls="panel8d-content" className="ques-text" id="panel8d-header">
          <Typography>I’ve still not received the refund in my bank account. Why?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className="ans8">
        <ul>
          <li>If you have received a mail from us confirming your refund request, then rest assured that we have initiated your refund request and are following up with financial organisations for the same.</li>
          <li>Sometimes financial organizations take a longer time to process the refund request. However, if the refund hasn’t happened by the date we promised, you can contact us. We will gladly help you.</li>
        </ul>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
      </Grid>
      </Grid>
      

      </refund_page>
    
    )
};

export default Refund;