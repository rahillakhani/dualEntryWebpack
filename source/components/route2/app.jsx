import React from 'react';
import ReactDOM from 'react-dom';

class MainApp extends React.Component {
	render(){
		return(
			<div>
				    <h1>React App</h1>
            <a href="/route1">route1</a>
            <a href="/route2">route2</a>
			</div>
			);
	}
}

ReactDOM.render(<MainApp/>, document.getElementById("appinit"));
