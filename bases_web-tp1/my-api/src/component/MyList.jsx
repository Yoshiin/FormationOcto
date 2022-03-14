import React  from 'react'
import Hostname from "./Hostname";

class MyList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		}
		this.generateHostname = this.generateHostname.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({data: this.props.data});
		}
	}

	generateHostname() {
		const d = this.state.data;
		if (d.message) {
			return null;
		}
		if (d.domains) {
			const domains = d.domains;
			return domains.map(d => {
				return <Hostname data={d}/>;
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<ul style={{listStyleType: "none", width: "1200px"}}>
					{this.generateHostname()}
				</ul>
			</React.Fragment>
		)
	}
}

export default MyList;
