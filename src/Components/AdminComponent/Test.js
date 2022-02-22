import { useState } from "react";
import axios from "axios";
import header2 from "./images/header2.png";
import { useHistory } from "react-router-dom";
import Welcome1 from "./Welcome1";
import Question12 from "../AdminComponent/Question12";

const defaultData = {
  test_id: "",
  course_id: "",
};
function Test() {
  let history=useHistory();
  const [userData, setUserData] = useState(defaultData);
  const [userList, setUserList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
    setUserList([...userList, userData]);
    setUserData(defaultData);
    axios.post("http://localhost:8080/test", userData)
      .then((res) => console.log(res));
    history.push("/Question12");
  };
  const handleUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData, [name]: value
    });
  };
  return (
    <>
    <Welcome1/>
      <form className="mx-5 ml-5">
        <div className="border-3" style={{ border: '1px solid rgba(0, 0, 0)' }}>
          <div className="mb-3 mx-3 ">
            <h1 className="text-center text-primary">Create Test</h1>
            <label htmlFor="test_id  " className="col-sm-2 col-form-label mx-4">Test Id</label>
            <div className="col-sm-10">
              <input type="text" className="form-control mx-4" id="test_id" name="test_id"
                value={userData.test_id}
                onChange={handleUser} />
            </div>
          </div>
          <div className="mb-3 mx-3">
            <label htmlFor="course_id" className="col-sm-2 col-form-label mx-4">Course Id</label>
            <div className="col-sm-10 my-3">
              <input type="text" className="form-control mx-4 " id="course_id" name="course_id"
                value={userData.course_id}
                onChange={handleUser} />
            </div>
          </div>
          <div className="mb-2 mx-4">
            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Create</button>
          </div>

        </div>
      </form>
    </>
  )
}
export default Test;