import React from "react";
import MusicPlayer from "./MusicPlayer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
			<div className="reproductor">
				<MusicPlayer/>
			</div>	
	);
};

export default Home;
