
import { Component } from "react";






class MyImg extends Component {
    render () {
    return (
        <div>
            <img src={this.props.src} alt="il predestinato" className="resize"/>
        </div>

    )
  }
}





export default MyImg;