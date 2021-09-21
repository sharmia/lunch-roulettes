import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../NotificationContent.scss';

const VotePosted = ({
  loggedIn, user, restaurantName, showMapAndInfoWindow
}) => {
  const restaurantEl = (
    <button className={s.clickable} onClick={showMapAndInfoWindow} type="button">
      {restaurantName}
    </button>
  );
  if (loggedIn) {
    return (
      <span>
        <b>{user}</b>
        {' '}
voted for
        {restaurantEl}
.
      </span>
    );
  }
  return (
    <span>
      {restaurantEl}
      {' '}
was upvoted.
    </span>
  );
};

VotePosted.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.string,
  restaurantName: PropTypes.string.isRequired,
  showMapAndInfoWindow: PropTypes.func.isRequired
};

VotePosted.defaultProps = {
  user: ''
};

export default withStyles(s)(VotePosted);
