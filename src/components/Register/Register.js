import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {

  return(
    <div id="signin">

<div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">

				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
            <i className=" brand_logo fa-solid fa-robot"></i>
					</div>
				</div>

				<div className="d-flex justify-content-center form_container">
					<form>

           <div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user" placeholder="Name"/>
						</div>

						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i class="fa-solid fa-envelope"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user" placeholder="email"/>
						</div>

						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass" placeholder="password" />
						</div>

						<div className="form-group"></div>

            <div className="d-flex justify-content-center mt-3 login_container">
				 	    <button type="button" name="button" className="btn login_btn" onClick={() => onRouteChange('home')}>Register Now</button>
				   </div>

           <div className="mt-4">
					<div className="d-flex justify-content-center links">
				  	<span className="plain-text">Already an account?</span>
            <a href="#" onClick={() => onRouteChange('signin')}className="ml-2">Log In Now</a>
					</div>
				</div>

					</form>
				</div>

			</div>
		</div>
	</div>

    </div>
  );
}

export default Register;