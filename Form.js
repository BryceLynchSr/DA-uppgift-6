import {useState} from 'react';
import './Form.css';

function SubmitForm({onSubmit}){
const [name, setName] = useState("");
const [textarea, setTextarea] = useState(""); 

const handleSubmit = (e) => {
e.preventDefault();
const form = [name] +", " +[textarea];
onSubmit(form);
}

return (<form onSubmit = {handleSubmit}>
    <div className="nameInput">
    <label >Name:</label>
    <br></br>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
    <br></br>
    <div className="textInput">
    <label>Message:</label>
    <br></br>
    <textarea cols="20" rows="7" type="text" value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
    </div>
    <br></br>
    <button type="submit">Submit</button>
</form>);
}

export default SubmitForm;