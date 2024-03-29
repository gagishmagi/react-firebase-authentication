import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../lib/auth";

export default class SignUp extends Component {

  constructor(){
	  super()

	  this.nameRef = React.createRef(null)
	  this.emailRef = React.createRef(null)
	  this.passRef = React.createRef(null)
  }

  validateData(){
    return true
  }

  handleSubmit = (e) => {
    e.preventDefault();

	const name = this.nameRef.current.value
	const email = this.emailRef.current.value
	const password = this.passRef.current.value

	if(this.validateData()){	
		auth.signup(email, password)
		this.props.history.push('/login')
		// console.log(auth.isAuthenticated())
	  }
  };

  render() {
    return (
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img
                  src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                  alt="logo"
                  width="100"
                />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                  <form
				    onSubmit={this.handleSubmit}
                    method="POST"
                    className="needs-validation"
                    noValidate=""
                    autoComplete="off"
                  >
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="name">
                        Name
                      </label>
                      <input
					    ref={this.nameRef}
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        autoFocus
                      />
                      <div className="invalid-feedback">Name is required</div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">
                        E-Mail Address
                      </label>
                      <input
					    ref={this.emailRef}
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                      />
                      <div className="invalid-feedback">Email is invalid</div>
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="password">
                        Password
                      </label>
                      <input
					    ref={this.passRef}
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        required
                      />
                      <div className="invalid-feedback">Password is required</div>
                    </div>

                    <p className="form-text text-muted mb-3">
                      By registering you agree with our terms and condition.
                    </p>

                    <div className="align-items-center d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-dark">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright &copy; 2017-2021 &mdash; Your Company
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
