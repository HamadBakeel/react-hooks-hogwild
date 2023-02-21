import React, {useState} from "react";
import Nav from "./Nav";
import '../assets/style.css'
import hogs from "../porkers_data";
import Hog from "./Hog";

function App() {
	const [filterGreased, setFilterGreased] = useState(false);
	const [sorterValue, setSorterValue] = useState("");


	const handleFilterGreasedChange = (e) => setFilterGreased(!filterGreased);
	const handleSorterValueChange = (e) => setSorterValue(e.target.value);

	const filteredHogs = hogs.filter((hog)=> {
		if(filterGreased)return hog.greased === true;
		else return hog
	}).sort((a,b)=>{

		if(sorterValue.length>0){
			if(a[sorterValue] > b[sorterValue])
				return 1;
			if(a[sorterValue] < b[sorterValue])
				return -1;
		}
		return 0;
	})


	return (
		<div className="App">
			<Nav
				onFilterGreased={handleFilterGreasedChange}
				filterValue={filterGreased}
				onSorterChange={handleSorterValueChange}
			/>
			<div className="hogs-container">
				{
					filteredHogs.map((hog)=>{
						return(
							<Hog hog={hog} key={hog.name}/>
						)
					})
				}
			</div>
		</div>
	);
}

export default App;
