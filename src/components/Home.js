import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <div class="container">
            <br /><br />
            <center>
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text">
                        <h1><strong>CashPositive</strong> <br /><br /></h1>
                        <div class="description">
                            <p>
                                The integrated B2B credit management engine<br />
                                <span>
                                    CashPositive streamlines credit management and improves collections for your <br />business by integrating with your systems, people and processes
                                    </span>
                            </p>
                        </div>
                    </div>
                </div>
            </center>
            <div class="row">

                <div class="col-sm-6 col-sm-offset-3 form-box">
                    <center>
                        <div class="form-top">
                            <div class="form-top-left">
                                <h3>Login to our site</h3>
                                <p>Enter your username and password to log on:</p>
                            </div>
                            <div class="form-top-right">
                                <i class="fa fa-lock"></i>
                            </div>
                        </div>
                    </center>
                    <div class="form-bottom">
                        <center>
                            <form class="login-form">
                                <div class="form-group">
                                    <label class="sr-only" for="form-username">Username</label>
                                    <input type="text" name="form-username" placeholder="Username..." class="form-username form-control" id="form-username" />
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="form-password">Password</label>
                                    <input type="password" name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" />
                                </div>
                                <center>
                                    <Link to="/inbox" type="submit" class="btn btn-success">Sign in!</Link>
                                </center>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home;
