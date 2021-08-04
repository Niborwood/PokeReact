import React from 'react';
import PropTypes from 'prop-types';
import './attackInfos.scss';

function AttackInfo({ type, maxPP, currentPP }) {
  return (
    <div className="attackInfo">
      <div className="attackInfo__string">TYPE/</div>
      {' '}
      <div className="attackInfo__type">{type}</div>
      <div className="attackInfo__pp">
        {maxPP}
        /
        {currentPP}
      </div>
    </div>
  );
}

AttackInfo.propTypes = {
  type: PropTypes.string.isRequired,
  maxPP: PropTypes.number.isRequired,
  currentPP: PropTypes.number.isRequired,
};

export default AttackInfo;
