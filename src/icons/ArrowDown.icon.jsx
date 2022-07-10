import PropTypes from 'prop-types';

export function ArrowDown({ color }) {
  return (
    <svg
      id="arrow-down"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <path
        id="Vector"
        d="M11.22,0,6.6,4.618a1.407,1.407,0,0,1-1.983,0L0,0"
        transform="translate(2.89 6.34)"
        fill="none"
        stroke={color || '#096dd9'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        id="Vector-2"
        dataName="Vector"
        d="M0,0H17V17H0Z"
        transform="translate(17 17) rotate(180)"
        fill="none"
        opacity="0"
      />
    </svg>
  );
}

ArrowDown.propTypes = {
  color: PropTypes.string,
};

ArrowDown.defaultProps = {
  color: '#096dd9',
};
