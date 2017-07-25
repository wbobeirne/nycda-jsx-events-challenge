const React = require("react");
const Button = require("./components/Button");

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Button>Regular Button</Button>
				<Button isLoading={true}>Loading Button...</Button>
				<Button isSuccessful={true}>Succesful Button!</Button>
			</div>
		);
	}
}

module.exports = App;
