import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return(
            <footer className="text-muted py-5">
  <div className="container">
    <p className="float-end mb-1">
      <a href="#">Back to top - this link does take you back to the top of the page.</a>
    </p>
    <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p className="mb-0">New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>
        );
    }
}

export default Footer;