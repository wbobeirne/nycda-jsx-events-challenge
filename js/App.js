const React = require("react");
const Button = require("./components/Button");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Button>I'm a regular button</Button>
				<Button isLoading={true}>I'm a button that is loading</Button>
				<Button isDisabled={true}>I'm a disabled button</Button>
			</div>
		);
	}
}

module.exports = App;
