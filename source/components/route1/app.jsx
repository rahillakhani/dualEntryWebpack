import React from 'react';
import ReactDOM from 'react-dom';

class MainApp extends React.Component {
	render(){
		return(
			<div>
				    <h1>React App</h1>
            <div>This is new route1</div>
			</div>
			);
	}
}

ReactDOM.render(<MainApp/>, document.getElementById("appinit"));
