import React from "react";
// import { Link } from "react-router-dom";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/smiling_dog.jpg" width="300px" height="300px" className="d-block" alt="smiling dog"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Dog Supplies, Toys, and more.</h5>
                        <p>Everything your dog needs to smile.</p>
                    </div>
                </div>
            <div className="carousel-item">
                <img src="/images/happycat.jpg" className="d-block w-100" alt="happy cat"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Cat Supplies, Toys, and more.</h5>
                    <p>Everything your cat needs to purr.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>T</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</div>
  );
}

export default Carousel;