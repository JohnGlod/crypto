import { NavLink } from 'react-router-dom';

const STYLES = [
  {
    type: 'btn--primary',
    style: 'color-accent rounded-lg hover:mb-0.5 hover:opacity-80',
  },
  {
    type: 'btn--outline',
    style:
      'rounded-lg text-red border  border-red  hover:mb-0.5 hover:opacity-80',
  },
];

const SIZE = [
  {
    type: 'btn--medium',
    style: 'py-2 px-5',
  },
  {
    type: 'btn--large',
    style: 'py-2 px-10 ',
  },
];

/* export const Button = (props) => {
  const { children, title, path, type, cName, buttonStyle } = props;
  const checkButtonStyle = STYLES.filter((item) => item.type === buttonStyle); // STYLES.type[buttonStyle]

  return type === 'submit' ? (
    <button type={type} className={cName}>
      {title}
    </button>
  ) : (
    <button type='button' className={cName}>
      <NavLink to={path}>{title}</NavLink>
    </button>
  );
};
 */

export const Button = ({ type, cName = '', url, title }) => {
  return type === 'submit' ? (
    <button
      type={type}
      className={`rounded-lg hover:opacity-80 duration-500 py-2 px-5 ${cName}`}
    >
      {title}
    </button>
  ) : (
    <button
      type='button'
      className={`rounded-lg hover:opacity-80 duration-500 py-2 px-5 ${cName}`}
    >
      <NavLink to={url}>{title}</NavLink>
    </button>
  );
};
