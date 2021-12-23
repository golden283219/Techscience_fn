import React from "react";
import { MDBBox, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBView } from "mdbreact";
import carousel1 from "../../../../assets/images/carousel1.jpg";
import carousel2 from "../../../../assets/images/carousel2.jpg";
import carousel3 from "../../../../assets/images/carousel3.jpg";

const Carousel = () => {
	return (
		<MDBCarousel
			activeItem={1}
			length={3}
			showControls={true}
			showIndicators={true}
			className="z-depth-1 w-100"
		>
			<MDBCarouselInner>
				<MDBCarouselItem itemId="1">
					<MDBView>
						<img
							className="d-block w-100"
							src={carousel1}
							alt="First slide"
						/>
						<MDBMask overlay="black-light" />
					</MDBView>
					<MDBCarouselCaption className="custom-carousel-caption">
						<MDBBox tag="h1">Education For Everyone</MDBBox>
						<MDBBox tag="h6">We Acknowledge The Fact That Every Human Being Has The Potential Of Contributing Something To World Our Performance BAse APPRoach Enables This Human Quality </MDBBox>
					</MDBCarouselCaption>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="2">
					<MDBView>
						<img
							className="d-block w-100"
							src={carousel2}
							alt="Second slide"
						/>
						<MDBMask overlay="black-strong" />
					</MDBView>
					<MDBCarouselCaption className="custom-carousel-caption">
						<MDBBox tag="h1">We Will Help You to learn</MDBBox>
						<MDBBox tag="h6">Through Performance Base Learning that Result in The Creation of Product or the offering of Services</MDBBox>
					</MDBCarouselCaption>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="3">
					<MDBView>
						<img
							className="d-block w-100"
							src={carousel3}
							alt="Third slide"
						/>
						<MDBMask overlay="black-slight" />
					</MDBView>
					<MDBCarouselCaption className="custom-carousel-caption">
						<MDBBox tag="h1" abbr='hey'>Best Education Ever</MDBBox>
						<MDBBox tag="h6">Performance Base Approach Learning Is Rooted In The Result OF Our Education Objective Which is Product Creation</MDBBox>
					</MDBCarouselCaption>
				</MDBCarouselItem>
			</MDBCarouselInner>
		</MDBCarousel>
	);
};

export default Carousel;