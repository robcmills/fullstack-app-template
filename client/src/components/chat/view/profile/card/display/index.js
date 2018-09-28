import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Card from 'components/shared/card'
import Avatar from './avatar'
import Field from './field'
import EditButton from './edit-button'
import ChatButton from './chat-button'

const DisplayCard = ({ classes, handleEditClick, isMe, user }) => {
	const { profile: { name, picture }, username } = user
	return (
		<Card className={classes.card}>
			<Avatar alt={username || name} src={picture} />
			<Field name="Username" value={username} />
			<Field name="Name" value={name} />
			{isMe ?
				<EditButton onClick={handleEditClick} /> :
				<ChatButton userId={user.id} />
			}
		</Card>
	)
}

const styles = theme => ({
	card: {
		alignItems: 'center',
		display: 'flex',
		flex: '0 0 auto',
		flexDirection: 'column',
		padding: theme.spacing.unit * 2,
	},
})

export default withStyles(styles)(DisplayCard)