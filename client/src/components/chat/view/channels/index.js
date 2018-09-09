import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import Search from './search'
import Create from './create'
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
					<div className={classes.actions}>
						<Search />
						<Create />
					</div>
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
	actions: {
		display: 'flex',
		flex: '1 1 auto',
		justifyContent: 'flex-end',
		padding: `0 ${theme.spacing.unit}px`,
	},
})

export default withStyles(styles)(Channels)
