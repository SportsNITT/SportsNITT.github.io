import React from "react";
import { Carousel } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import img1 from "../../assets/images/carousel/1.jpg";
import img2 from "../../assets/images/carousel/2.jpg";
import img3 from "../../assets/images/carousel/3.jpg";
import img4 from "../../assets/images/carousel/4.jpg";
import img5 from "../../assets/images/carousel/6.jpg";
import img6 from "../../assets/images/carousel/7.jpg";

export default function CarouselImg() {
	return (
		<Carousel variant="dark" fade>
			{/* <Carousel.Item>
				<img className="d-block w-100" src={img1} alt="First slide" />
			</Carousel.Item> */}
			<Carousel.Item>
				<img className="d-block w-100" src={img3} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img4} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img5} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img6} alt="Second slide" />
			</Carousel.Item>
		</Carousel>
	);
}
