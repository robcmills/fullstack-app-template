import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'

import setPictureSize from 'utils/set-picture-size'

const UserAvatar = ({ alt, classes, src, userId }) =>
	<IconButton
		component={Link}
		title="View profile"
		to={`/chat/users/${userId}/profile`}
	>
		{src ?
			<Avatar alt={alt} src={setPictureSize(src, 128)} /> :
			<AccountCircle color="secondary" className={classes.accountCircle} />
		}
	</IconButton>

const styles = theme => ({
	accountCircle: {
		height: 32,
		width: 32,
	},
})

export default withStyles(styles)(UserAvatar)