import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import Welcome1 from "./Welcome1";
class Questions extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            //error:false,
            selectedPost: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios
        .get("http://localhost:8080/question/fetchQuestion")
        .then((res) => this.setState({posts:res.data}))
        .catch((err) => this.setState({err:true}));
        }
    handleDelete = (postId) => {
        axios.delete("http://localhost:8080/question/question/" + postId)
        .then((res) => this.setState({posts:res.data}))
            .then((res) => console.log(res));
        const updatedPost = this.state.posts.filter((post) => post.id !== postId)
        this.setState({ posts: updatedPost });
    };
    handleEdit = (postId) => {
        axios.get("http://localhost:8080/question/question/" + postId)
            .then((res) => {
                console.log(res)
                this.setState({ selectedPost: res.data })})
                .catch((err) => console.log(err))
    };
    // handleUpdate = (postId) => {
    //     axios.put("http://localhost:8080/question/question/" + postId)
    //         .then((res) => this.setState({ selectedPost: res.data }))
    // };
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            selectedPost: {
                ...this.state.selectedPost,
                [name]: value
            }
        })
    }
    handleUpdate = (id) => {
        axios.put("http://localhost:8080/question/question/" + id, this.state.selectedPost)
        .then((res) => this.setState({posts:res.data}))
            .then((res) => console.log(res));
    }
    render() {
        return (
        
            <div className="container">
                <Welcome1/>
                <div className="row">
                    <div className="col-sm-8">
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" className="col-1">q_id</th>
                                    <th scope="col" className="col-1">option_a</th>
                                    <th scope="col" className="col-1">option_b</th>
                                    <th scope="col" className="col-1">option_c</th>
                                    <th scope="col" className="col-1">option_d</th>
                                    <th scope="col" className="col-3">q_name</th>
                                    <th scope="col" className="col-1">course_id</th>
                                    <th scope="col" className="col-3">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.posts.map((post) => (
                                        <tr key={post.q_id}>
                                            <td className="col-1">{post.q_id}</td>
                                            <td className="col-1">{post.option_a}</td>
                                            <td className="col-1">{post.option_b}</td>
                                            <td className="col-1">{post.option_c}</td>
                                            <td className="col-1">{post.option_d}</td>
                                            <td className="col-3">{post.q_name}</td>
                                            <td className="col-1">{post.course_course_id}</td>
                                            <td className="col-3">{post.action}
                                                <button className="btn btn-primary"
                                                    onClick={() => this.handleEdit(post.q_id)}>Edit</button>
                                                <button className="btn btn-danger"
                                                    onClick={() => this.handleDelete(post.q_id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">q_id</span>
                            <input type="text" name="q_id" className="form-control"
                             value={this.state.selectedPost.q_id} onChange={this.handleChange}
                                placeholder="q_id" aria-label="q_id" aria-describedby="basic-addon1" />
                        </div>
                        
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">option_a</span>
                            <input type="text" name="option_a" className="form-control"
                            value={this.state.selectedPost.option_a} onChange={this.handleChange}
                                placeholder="option_a" aria-label="option_a" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">option_b</span>
                            <input type="text" name="option_b" className="form-control"
                            value={this.state.selectedPost.option_b} onChange={this.handleChange}
                                placeholder="option_b" aria-label="option_b" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">option_c</span>
                            <input type="text" name="option_c" className="form-control"
                            value={this.state.selectedPost.option_c} onChange={this.handleChange}
                                placeholder="option_c" aria-label="option_c" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">option_d</span>
                            <input type="text" name="option_d" className="form-control"
                            value={this.state.selectedPost.option_d} onChange={this.handleChange}
                                placeholder="option_d" aria-label="option_d" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">q_name</span>
                            <input type="text" name="q_name" className="form-control"
                             value={this.state.selectedPost.q_name} onChange={this.handleChange}
                                placeholder="q_name" aria-label="q_name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">course_course_id</span>
                            <input type="text" name="course_course_id" className="form-control"
                             value={this.state.selectedPost.course_course_id} onChange={this.handleChange}
                                placeholder="course_id" aria-label="course_id" aria-describedby="basic-addon1" />
                        </div>
                        <div>
                            <button className="btn btn-success"
                                onClick={() => this.handleUpdate(this.state.selectedPost.q_id)}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Questions;




// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import axios from "axios";
// class Formss extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             question_name: '',
//             question_id: '',
//             Option_a: '',
//             Option_b: '',
//             Option_c: '',
//             Option_d: '',
//             posts: [],
//             //error:false,
//             selectedPost: {}
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((postData) => this.setState({ posts: postData }))
//         // .catch((err)=>this.setState({error:err}));
//         // axios
//         //.get("https://jsonplaceholder.typicode.com/posts")
//         // .then((res)=>this.setState({posts:res.data}))
//         //.catch((err)=>this.setState({error:true}))
//     }
//     handleChange = (e) => {
//         this.setState(
//             {
//                 [e.target.name]: e.target.value
//             }
//         )
//     }
//     //onSubmit=(e)=>
//     //{
//     //  e.preventDefault();
//     // console.log(this.state);
//     // }
//     handleDelete = (postId) => {
//         axios.delete("https://jsonplaceholder.typicode.com/posts/" + postId)
//             .then((res) => console.log(res));
//         //  const updatedPost =this.state.posts.filter((post)=>post.id!==postId)
//         // this.setState({posts:updatedPost});
//     };
//     handleUpdate = (postId) => {
//         axios.put("https://jsonplaceholder.typicode.com/posts/" + postId)
//             .then((res) => this.setState({ selectedPost: res.data }))
//     };
//     handleUpdate = (id) => {
//         axios.put("https://jsonplaceholder.typicode.com/posts/" + id, this.state.selectedPost)
//             .then((res) => console.log(res));
//     }
//     render() {
//         const { question_name, question_id, Option_a, Option_b, Option_c, Option_d } = this.state
//         return (
//             <Container>
//                 <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Question</h1>
//                 <Row>
//                     <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg ">
//                         <form>
//                             <div className="mb-3 row">
//                                 <label>question_name</label>
//                                 <div className="col-sm-10">
//                                     <input type="numbers"
//                                         className="form-control"
//                                         id="question_name"
//                                         name="question_name"
//                                         value={question_name}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <div className="mb-3 row">
//                                 <label>question_id</label>
//                                 <div className="col-sm-10">
//                                     <input type="numbers"
//                                         className="form-control"
//                                         id="question_id"
//                                         name="question_id"
//                                         value={question_id}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <div className="mb-3 row">
//                                 <label> Option_a</label>
//                                 <div className="col-sm-10">
//                                     <input type="text"
//                                         className="form-control"
//                                         name="Option_a"
//                                         id="Option_a"
//                                         value={Option_a}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <div className="mb-3 row">
//                                 <label> Option_b</label>
//                                 <div className="col-sm-10">
//                                     <input type="text"
//                                         className="form-control"
//                                         id="Option_b"
//                                         name="Option_b"
//                                         value={Option_b}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <div className="mb-3 row">
//                                 <label> Option_c</label>
//                                 <div className="col-sm-10">
//                                     <input type="text"
//                                         className="form-control"
//                                         id="Option_c"
//                                         name="Option_c"
//                                         value={Option_c}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <div className="mb-3 row">
//                                 <label> Option_d</label>
//                                 <div className="col-sm-10">
//                                     <input type="text"
//                                         className="form-control"
//                                         id="Option_d"
//                                         name="Option_d"
//                                         value={Option_d}
//                                         onChange={this.handleChange} />
//                                 </div>
//                             </div>
//                             <button className="btn btn-success"
//                                 onClick={() => this.handleSubmit(this.post.id)}>Save</button>
//                             <button className="btn btn-danger"
//                                 onClick={() => this.handleDelete(this.post.id)}>Delete</button>
//                             <button className="btn btn-success"
//                                 onClick={() => this.handleUpdate(this.state.selectedPost.id)}>Update</button>
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }
// export default Formss;
// /*<button type="button" class="btn btn-primary" onClick={this.onSubmit}>Update</button>
//                        <button type="submit" class="btn btn-danger">Delete</button>*/
