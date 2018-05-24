import React, { PropTypes } from 'react';

const TeamListItem = ( {team, selectedTeam, handleTeamSelect} ) => {
  const value = JSON.stringify({team: team.teamcode, group: team.poulecode});
  return (
    <div className="team-list__option radio">
      <label className="radio__label">
        <input
          type="radio"
          name="optionsRadios"
          id={`optionRadio_${team.teamcode}`}
          value={value}
          onChange={handleTeamSelect}
          checked={selectedTeam === team.teamcode}
          className="radio__input"
        />
          <span className="radio__text">{team.teamnaam} &mdash; {team.spelsoort}</span>
      </label>
    </div>
  );
};

TeamListItem.propTypes = {
  team: PropTypes.object.isRequired,
  selectedTeam: PropTypes.number.isRequired,
  handleTeamSelect: PropTypes.func.isRequired
};

export default TeamListItem;
