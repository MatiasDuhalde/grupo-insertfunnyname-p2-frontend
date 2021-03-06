import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MeetingList.scss';

import BaseCard from '../Cards/BaseCard/BaseCard';
import BaseButton from '../BaseButton/BaseButton';

const MeetingList = (props) => {
  const { meetings, title } = props;

  if (meetings.length === 0) {
    return null;
  }

  return (
    <BaseCard>
      <div className="MeetingList">
        <h4>{title}</h4>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <p className="summary">
                {`${new Date(meeting.date).toLocaleString()} - ${meeting.type}`}
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
  title: PropTypes.string,
  meetings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MeetingList.defaultProps = {
  title: 'Meetings',
};

export default MeetingList;
