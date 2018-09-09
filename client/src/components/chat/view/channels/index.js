import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import ActionBar from '../action-bar'
import CreateButton from './create-button'
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
						<CreateButton />
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
		padding: theme.spacing.unit,
	},
})

export default withStyles(styles)(Channels)
