import React  from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

class Hostname extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			isOpen: false,
		}
		this.handleModal = this.handleModal.bind(this)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({data: this.props.data});
		}
	}

	handleModal() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		const style = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
		};
		const data = this.state.data;
		const date = new Date(data.create_date);
		const uDate = new Date(data.update_date);
		return (
			<li style={{border: "2px solid darkgrey", marginBottom: "10px", width: "100%", position: "relative", height: "35px", paddingTop: "10px"}}>
				<span style={{position: "absolute", left: "10px"}}>{data.domain}</span>
				{ date && <span style={{position: "absolute", right: "60px"}}>Created on : {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear().toString()}</span> }
				<IconButton color="primary" component="span" onClick={this.handleModal} style={{position: "absolute", right: "10px", top: "5px"}}>
					<SearchIcon />
				</IconButton>
				<Modal
					open={this.state.isOpen}
					onClose={this.handleModal}
				>
					<Box sx={style}>
						<div><span>Domain : &nbsp;</span><span>{ data.domain }</span></div>
						<div><span>Created ad : &nbsp;</span><span>{ date.toString() }</span></div>
						<div><span>Updated ad : &nbsp;</span><span>{ uDate.toString() }</span></div>
						<div><span>Country : &nbsp;</span><span>{ data.country }</span></div>
					</Box>
				</Modal>
			</li>
		)
	}
}

export default Hostname;
