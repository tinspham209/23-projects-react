import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className="title">
				<h2>Our Tour</h2>
				<div className="underline"></div>
			</div>
			<div className="">
				{tours.map((tour) => (
					<Tour key={tour.id} {...tour} removeTour={removeTour} />
				))}
			</div>
		</section>
	);
};

export default Tours;
