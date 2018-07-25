'use strict';

const Accordion = (props) => {
	const {title, items} = props
	return (
		<main className="main">
			<h2 className="title">{title.title}</h2>
			{items.map(item => <CreatSection item={item}/>)}
		</main>
	)
}


class CreatSection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open:false
		}
	}

	isOpen = () => {
		this.setState({open: !this.state.open})
	}

	render() {
		const {title, description} = this.props.item;
		return (
			<section className={this.state.open ? 'section open' : 'section'}>
				<button>toggle</button>
				<h3 className="sectionhead" onClick={this.isOpen}>{title}</h3>
				<div className="articlewrap">
					<div className="article">{description}</div>
				</div>
			</section>
		)
	}
}