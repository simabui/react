/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import placeholder from '../../../images/person-gray.jpg';

const actors = css`
  padding: 0;
  list-style-type: none;
  display: flex;
  overflow-x: auto;
`;

const image = css`
  width: 100%;
  height: 260px;
`;

const actorCharacte = css`
  display: block;
`;

const actorsList = css`
  display: block;
  margin-left: 20px;
  width: 168px;
`;

const actorText = css`
  text-align: center;
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
            <b>{actor.name}</b> as
            <span css={actorCharacte}>{actor.character}</span>
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
