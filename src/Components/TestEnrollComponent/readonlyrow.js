import React from "react";
import { Link } from "react-router-dom";
const ReadOnlyRow=({user,handleEditClick})=>{

    return(
                    <tr>
                    <td>{user.name}</td>
                   <td>{user.course_id}</td>
                   <td>{user.test_id}</td>
                   <td>{user.courseType}</td>
                   <td>{user.statusCheck}</td>
                   <td>
                       <button type="button" className="btn btn-primary badge rounded-pill btn-lg" 
                            
                        onClick={(event)=>handleEditClick(event,user)}>EDIT</button>
                   </td>
                   </tr>
    )
}
export default ReadOnlyRow;