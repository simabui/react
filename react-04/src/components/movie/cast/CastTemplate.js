/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import placeholder from '../../../images/person-gray.jpg';

const actors = css`
  padding: 0;
  list-style-type: none;
`;

const image = css`
  width: 70px;
  height: auto;
`;

const actorName = css`
  font-weight: 700;
`;

const actorsList = css`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const actorText = css`
  margin-left: 10px;
`;

const CastTemplate = ({ cast }) => (
  <ul css={actors}>
    {cast.map(actor => (
      <li key={actor.id}>
        <div css={actorsList}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : placeholder
            }
            alt="actor"
            css={image}
          ></img>
          <p css={actorText}>
            {actor.character} / <span css={actorName}>{actor.name}</span>
          </p>
        </div>
      </li>
    ))}
  </ul>
);

CastTemplate.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CastTemplate;
