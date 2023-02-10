import "../css/Radio.css";

const RadioButton = (props) => {
  const options = props.options;
  const handleChange = (event) => {
   const selectedRadioValue= options.filter((items)=>{return event.target.value=== items.package.name});
    props.setSelectedValue(selectedRadioValue[0]);
  };
  const atLocal = props.localData.map(el=>(el.fav.package.name))
  return (
    <>
      <div
        className="container-fluid overflow-auto"
        style={{ maxHeight: "300px" }}
      >
        {options.map((option, index) => (
          <div key={index} className="d-flex justify-content-start"> 
            <input
              className="form-check-input"
              type="radio"
              id={"radio_" + index}
              value={option.package.name}
              disabled={atLocal.includes(option.package.name)}
              checked={props.selectedValue.package.name === option.package.name}
              onChange={handleChange}
            />
            <label className="form-check-label label" htmlFor={"radio_" + index}>
              {option.package.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
export default RadioButton;
