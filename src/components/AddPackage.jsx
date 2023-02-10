import axios from "axios";
import { useEffect, useState } from "react";
import Textarea from "../comman/Textarea";
import RadioButton from "../comman/RadioButton";
import Debounce from "../comman/Debounce";
import { useNavigate } from 'react-router-dom';
const AddPackage = (props) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || null);
  const [textValue, setTextValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState({package:{name:""}});
  const [search, setSearch] = useState("reactjs");
  const [errors,setError]= useState("");
  const navigate = useNavigate();
  const fetchApi = () => {
    axios.get('https://api.npms.io/v2/search?q='+search)
      .then((response) => {
        const result =response.data.results;
          setOptions(result)
      })
      .catch(error => setError(error));
  };
  useEffect(() => {
    fetchApi();
  }, [search]);
  const handleSubmit =()=>{
   
    if(selectedValue.package.name==""){
      alert("Please select Package from list");
      return; 
    }
    if(textValue===""){
      alert("Please add description");
      return;
    }
    if (!data) {
      setData([{
        fav:selectedValue,
        des:textValue
      }]);
    } else {
      setData([...data, {  fav:selectedValue,
        des:textValue
      }]);
    }
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(data));
      navigate('/');
  
  };
  
 
  const handleSearch = (value) => {
    setSearch(value);
  };

  

  return (

    <>
        <div>
          <div>
          <Debounce delay={1000} onChange={handleSearch} />
          
          </div>
            <div>
                 
                <RadioButton options={options} selectedValue={selectedValue} setSelectedValue={setSelectedValue} localData={data}/>
            </div>
            <div>
                <Textarea setTextValue={setTextValue} textValue={textValue} />
            </div>
            <div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </>
  );
};
export default AddPackage;
