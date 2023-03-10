import React from "react";
import MusicPlayer from "./MusicPlayer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="reproductor">
				<MusicPlayer/>
			</div>	
		</div>
	);
};

export default Home;

/* 
<div class="position-absolute top-50 start-50 translate-middle"></div>
*/