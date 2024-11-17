import React from "react";
import { useNavigate} from "react-router-dom";
import './scenicviews.css';



const ScenicViews=()=>{
    return(
        <div className="scenic-view">
            <div className="scn-heading">
                <div className="scn-mainline"><h1>Scenic Views</h1></div>
                <div className="scn-lgout-btn"><button>LOGOUT</button></div>
            </div>
        </div>
    )
}
export default ScenicViews;