import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'

import setPictureSize from 'utils/set-picture-size'

const UserAvatar = ({ alt, classes, src }) => src ?
	<Avatar
		alt={alt}
		className={classes.avatar}
		src={setPictureSize(src, 256)}
	/> :
	<AccountCircleIcon color="secondary" className={classes.avatar} />

const styles = theme => ({
	avatar: {
		height: 128,
		marginBottom: theme.spacing.unit * 3,
		width: 128,
	},
})

export default withStyles(styles)(UserAvatar)

