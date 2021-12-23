import React from "react";
import HomeHeader from "../Layout/Header/HomeHeader";
import Footer from "../Layout/Footer/Footer";
import Carousel from "../Utils/Home/Carousel/Carousel";

const Home = () => {
	return (
		<>
			<HomeHeader />
			<Carousel />
			<Footer />
		</>
	);
};

export default Home;