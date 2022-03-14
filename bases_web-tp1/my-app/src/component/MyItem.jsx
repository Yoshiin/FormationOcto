import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteForever from '@mui/icons-material/DeleteForever';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

class MyItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		const val = this.props.children;
		const count = this.state.count;
		return (
				<li>
					{ count }
					<IconButton color="primary" aria-label="upload picture" component="span" onClick={() => this.setState({count: count + 1})}>
						<Add />
					</IconButton>
					<IconButton color="primary" aria-label="upload picture" component="span" onClick={() => this.setState({count: count - 1})}>
						<Remove />
					</IconButton>
					{ val }
					&nbsp;
					<IconButton color="primary" aria-label="upload picture" component="span" onClick={() => this.props.delete(val)}>
						<DeleteForever />
					</IconButton>
				</li>
		)
	}
}
export default MyItem;
