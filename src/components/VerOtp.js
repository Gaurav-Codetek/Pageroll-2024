import React, { useState } from 'react'

function VerOtp(props) {
    const [otp, setOtp] = useState()
    return (
        <>
            <div className="otpWin">
                <div className="otpForm">
                    <h1 className='welBackOtp'>Enter verification code</h1>
                    <p className='registerLine'>Verification code sent to your email!<span className='register'></span> </p>

                    <div className="emailInpOtp">
                        <input maxLength="5" onChange={(text) => setOtp(text.target.value)} type="text" id='EmailOtp' required />
                        <br />
                        <label className='emailLabel' htmlFor="Email">Enter code</label>
                    </div>
                    <div className="contBtnOtp">
                        <button onClick={()=>props.verify(otp)}>Verify OTP</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default VerOtp