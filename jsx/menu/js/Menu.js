function getLink(item) {
	return (
		<li><a href={item.href}>{item.title}</a></li>
	)
}

const Menu = function(items) {
	console.log(items)
	if(!items.opened){
		return (
			<div className="menu">
  				<div className="menu-toggle"><span></span></div>
			</div>
		)
	} else {
		return (
			<div className="menu menu-open">
				<div className="menu-toggle"><span></span></div>
				<nav>
					<ul>
						{ items.items.map(getLink) }
					</ul>
				</nav>
			</div>
		)
	}
}