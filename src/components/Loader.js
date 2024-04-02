import React from 'react'
import { RiLoader3Line } from "react-icons/ri";

function Loader() {
    return (
        <>
            <div className="loadArea">
                <div className="loaderBox">
                    <RiLoader3Line className='loaderSpin' size="50"/>
                </div>
            </div>
        </>
    );
}

export default Loader