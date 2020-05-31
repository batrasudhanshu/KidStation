import React, { Component } from 'react'
import {SizeMe} from 'react-sizeme';

class FilterSortMain extends Component {
    render() {
        const {width, height} = this.props;
        console.log(width,height);
        return (
            <div>
                <SizeMe 
                    monitorHeight
                    refreshRate={32}
                    render = {({size})=>(
                        <div>
                             width = {size.width}
                        </div>
                    )}
                />
            </div>
        )
    }
}
export default (FilterSortMain)