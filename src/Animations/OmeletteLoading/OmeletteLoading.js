import React from 'react';
import './OmeletteLoading.scss'

const OmeletteLoading = () => {
    return(
        <div className="omelette-loading" id="1">
            <div class="pan-loader">
                <div class="loader"></div>
                <div class="pan-container">
                    <div class="pan"></div>
                    <div class="handle"></div>
                </div>
                <div class="shadow"></div>
            </div>
            <div className="desc">
                <h3>Omelette on a pan animation...</h3>
                <div class="flex">
                    <a href="#1" class="bttn-dark">Continue</a>
                </div>
            </div>
        </div>
    )
}

export default OmeletteLoading;