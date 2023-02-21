import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({onFilterGreased, filterValue, onSorterChange}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="filters-section">
				<div>
					Get greased
					<input
						type="checkbox"
						onChange={(e)=> onFilterGreased()}
						value={filterValue}
					/>
				</div>
				<div>
					<select name="sorter" id="sorter"
						onChange={(e)=>{
							onSorterChange(e)
						}}
					>
						<option value="">none</option>
						<option value="name">name</option>
						<option value="weight">weight</option>
					</select>
				</div>
			</div>

		</div>
	);
};

export default Nav;
