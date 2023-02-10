import { useState } from "react";

const Textarea = (props)=>{

    const handleChange = event => {
        props.setTextValue(event.target.value);
    };
  
    return (
        <><div>
            <label htmlFor="description">Discription</label>
        </div><div>
        <textarea
        id="description"
        value={props.textValue}
        onChange={handleChange}
        />
        </div>
        </>
    );
}
export default Textarea;