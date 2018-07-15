'use strict';
const loading = document.querySelector('.loading'),
	  root = document.querySelector('#root');

let items;
loading.style.display = 'none';

const xhr = new XMLHttpRequest();

xhr.addEventListener('loadstart', ev => {
	loading.style.display = 'block';
});

xhr.addEventListener('loadend', ev => {
	loading.style.display = 'none';
});

xhr.addEventListener('load', ev => {
	items = JSON.parse(xhr.responseText);
	ReactDOM.render(<Listing items={items}/>, root);
});

xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.send();

const Listing = function ({ items }) {
	let currency;
	let level;
	const result = items.map(item => {
		if(item.currency_code === 'USD' || item.currency_code === 'EUR') {
			currency = true;
		} else {
			currency = false;
		}

		if(item.quantity <= 10) {
			level = 'item-quantity level-low'
		} else if(item.quantity >= 11 && item.quantity <= 20) {
			level = 'item-quantity level-medium'
		} else {
			level = 'item-quantity level-high'
		}

		return (
			<div className="item" key={ item.listing_id }>
				<div className="item-image">
					<a href={ item.url }>
					<img src={ item.MainImage.url_570xN } />
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{ item.title }</p>
					<p className="item-price">{ currency ? `${ item.currency_code } ${ item.price }` : `${ item.price } ${ item.currency_code }`}</p>
					<p className={ level }>{ item.quantity } left</p>
				</div>
			</div>
		)
	})
	return <div className="item-list">{ result }</div>;
};

Listing.defaultProps = {};

