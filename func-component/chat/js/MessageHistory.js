'use strict';

const MessageHistory = ({ list }) => {
	const chat = list.map(item => {
		switch( item.type ) {
			case 'message' : return (<Message from={ item.from } message={ item }/>);
			break;
			case 'response' : return (<Response from={ item.from } message={ item }/>);
			break;
			case 'typing' : return (<Typing from={ item.from } message={ item }/>);
			default : return false;
		}
	})
	return <ul>{ chat }</ul>;
}