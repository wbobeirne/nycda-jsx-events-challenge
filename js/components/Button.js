const React = require("react");

class Button extends React.Component {
	render() {
		const { children, isLoading, isSuccessful } = this.props;
		let icon;
		let buttonClass = "Button";

		if (isLoading) {
			icon = <span className="Button-loader"/>;
			buttonClass += " is-loading";
		}
		else if (isSuccessful) {
			icon = <span className="Button-checkmark"/>;
			buttonClass += " is-successful";
		}

		return (
			<button className={buttonClass}>
				{icon}
				{isLoading ? "Loading..." : children}
			</button>
		);
	}
}

module.exports = Button;
