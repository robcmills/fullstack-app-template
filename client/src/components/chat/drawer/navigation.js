import React from 'react'
import ForumIcon from '@material-ui/icons/Forum'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import NavLink from './nav-link'

const links = [{
	icon: <ForumIcon />,
	text: "Channels",
	to: "/chat/channels",
},{
	icon: <AccountCircleIcon />,
	text: "Users",
	to: "/chat/users",
}]

const Navigation = () => links.map(link =>
	<NavLink {...link} key={link.text} />)

export default Navigation
