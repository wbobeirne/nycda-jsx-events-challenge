const React = require("react");

class Button extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<button className="Button">
				{children}
			</button>
		);
	}
}

module.exports = Button;
