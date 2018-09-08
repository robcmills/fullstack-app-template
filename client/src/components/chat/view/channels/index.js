import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import List from './list'
import { fetchChannels } from '../../../../redux/action-creators'

class Channels extends Component {
	componentDidMount() {
		fetchChannels()
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.channels}>
				<ActionBar>
					Actions...
				</ActionBar>
				<List />
			</div>
		)
	}
}

const styles = theme => ({
	channels: {
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
	},
})

export default withStyles(styles)(Channels)
