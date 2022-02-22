import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Welcome1 from "./Welcome1";
import { useHistory } from "react-router-dom";

const defaultData = {
    q_id: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    q_name: "",
    course_course_id: "",
};

function Question12() {
    let history=useHistory();
    const [userData, setUserData] = useState(defaultData);
    const [userList, setUserList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
        setUserList([...userList, userData]);
        setUserData(defaultData);
        axios.post("http://localhost:8080/question/createQuestion", userData)
            .then((res) => console.log(res));
        history.push("/Questions");
    };
    const handleUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData, [name]: value
        });
    };

    return (
        
        <Container>
            <Welcome1/>
            <h1 className="shadow-sm text-success text-center rounded">Question</h1>
            <Row className="mx-5 mt-2 mb-5 border-3" style={{border: '1px solid rgba(0, 0, 0)'}}>
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg ">
                    <form>
                        <div className="mb-3 row">
                            <label>q_id</label>
                            <div className="col-sm-10">
                                <input type="numbers"
                                    className="form-control"
                                    id="q_id"
                                    name="q_id"
                                    value={userData.q_id}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label> option_a</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    name="option_a"
                                    id="option_a"
                                    value={userData.option_a}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label> option_b</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="option_b"
                                    name="option_b"
                                    value={userData.option_b}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label> option_c</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="option_c"
                                    name="option_c"
                                    value={userData.option_c}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label> option_d</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="option_d"
                                    name="option_d"
                                    value={userData.option_d}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label>q_name</label>
                            <div className="col-sm-10">
                                <input type="numbers"
                                    className="form-control"
                                    id="q_name"
                                    name="q_name"
                                    value={userData.q_name}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label>course_id</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="course_course_id"
                                    name="course_course_id"
                                    value={userData.course_course_id}
                                    onChange={handleUser} />
                            </div>
                        </div>
                        <button className="btn btn-success"
                            onClick={handleSubmit}>Save</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
export default Question12;