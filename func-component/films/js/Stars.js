'use strict';

function Stars({count}) {
  let checkCount;
  let stars= [];

  if(typeof(count) == 'number' && count >= 1 && count <= 5) {
    checkCount = true;
  } else {
    checkCount = false;
  }

  for(let i = 0; i<count; i++) {
    stars.push(<li><Star /></li>);
  }

  return (checkCount && <ul className="card-body-stars u-clearfix">{stars}</ul>);
};

Stars.defaultProps = {
  count: 0
}