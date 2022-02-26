import { render } from "@testing-library/react";
import React, {Component} from "react"

export class MainContent extends Component{
    render()
    {
        return(
          <div class="container text-center">
          <a href="page1.html" class="btn btn-info" role="button">Sign Up Here!</a>
       </div>
        )
    
}
}
export default MainContent