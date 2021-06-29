import React, { Component } from 'react';
import "./MainBanner.css";

class MainBanner extends Component {
    //  Banner Component that contains any info for the banner such as the 
    //website name, icon and any other information.
    render() {
        return (
            <div className="pokePlannerBanner">
                <h1>PokePlanner</h1>                    
            </div>
            
        )
    }
}

export default MainBanner;