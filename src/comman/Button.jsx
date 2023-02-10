const Button = (props) => {
  const label = props.label;
  const buttonType = props.buttonType;
  const buttonId = props.buttonId;

  return (
    <>
      <div>
        <button type={buttonType} id={buttonId}>
          {label}
        </button>
      </div>
    </>
  );
};
export default Button;
