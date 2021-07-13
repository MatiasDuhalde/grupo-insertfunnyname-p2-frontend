import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MeetingList.scss';

import BaseCard from '../Cards/BaseCard/BaseCard';
import BaseButton from '../BaseButton/BaseButton';

const MeetingList = (props) => {
  const { meetings } = props;

  const tempUser = {
    email: 'some@email.com',
    firstName: 'Test',
    lastName: 'User',
    avatarLink: 'https://api.time.com/wp-content/uploads/2020/01/smudge-the-cat-interview.jpg',
  };

  if (meetings.length === 0) {
    return null;
  }

  return (
    <BaseCard>
      <div className="MeetingList">
        <h4>Meetings</h4>
        <ul>
          {meetings.map((meeting) => (
            <li>
              <p className="summary">
                {`${new Date(meeting.date).toLocaleString()} - ${meeting.type} - ${tempUser.email}`}
              </p>
              <div className="link">
                <Link to={`/meetings/${meeting.id}`}>
                  <BaseButton>Details</BaseButton>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BaseCard>
  );
};

MeetingList.propTypes = {
  meetings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MeetingList;
