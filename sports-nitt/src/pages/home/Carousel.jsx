import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/carousel/1.jpg";
import img2 from "../../assets/images/carousel/2.jpg";
import img3 from "../../assets/images/carousel/3.jpg";
import img4 from "../../assets/images/carousel/4.jpg";
import img5 from "../../assets/images/carousel/5.jpg";

export default function CarouselImg() {
	return (
		<Carousel variant="dark">
			<Carousel.Item>
				<img className="d-block w-100" src={img1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img3} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img4} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img5} alt="Third slide" />
				<Carousel.Caption>
					<h5>Third slide label</h5>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
