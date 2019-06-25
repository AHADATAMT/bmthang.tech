import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <p className="font-secondary paragraph-lg text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <a href="about.html" className="btn btn-transparent">know more</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
