import React from "react";
import { Carousel } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import img1 from "../../assets/images/carousel/1.jpg";
import img1 from "../../assets/images/carousel/C1.jpg";
import img2 from "../../assets/images/carousel/C2.jpg";
import img3 from "../../assets/images/carousel/C3.jpg";
import img4 from "../../assets/images/carousel/C4.jpg";
import img5 from "../../assets/images/carousel/C5.jpg";

export default function CarouselImg() {
	return (
		<Carousel variant="dark" fade>
			
			<Carousel.Item>
				<img className="d-block w-100" src={img1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img3} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img4} alt="Fourth slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img5} alt="Fifth slide" />
			</Carousel.Item>
		</Carousel>
	);
}
