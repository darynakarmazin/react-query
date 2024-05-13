/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <li className="post-item">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </li>
  );
};
