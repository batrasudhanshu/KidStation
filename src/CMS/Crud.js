import React, { Component } from 'react'

class Crud extends Component {
    render() {
        return (
            <div className="row">
              <h2 style={{textAlign:'center', margin:'20px'}}>PRODUCTS</h2>
              <div style={{padding:'0'}} class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div style={{width:'80%', margin:'auto'}} className="row">
                  <span className="col-3 text-left">  <button className=" btn"><i className="fa fa-edit fa-lg"></i> </button></span>
                  <span style={{float:'right'}} className="col-3 text-right"><button  className="col-4 btn"><i className="fa fa-trash fa-lg"></i> </button></span>
                </div>
                    <div class="card">
                        <img style={{margin:'auto', textAlign:'center',display:'block'}} class="card-img-top" src="https://picsum.photos/200/150/?random" width="80%"/>
                        <div class="card-block">
                            <h4 style={{textAlign:'center', margin:'10px'}} className="text-bold">product name</h4>
                        </div>
                  </div>
              </div>
          </div>
        )
    }
}
export default Crud