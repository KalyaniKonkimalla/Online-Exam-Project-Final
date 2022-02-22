import React  from 'react';

const Start =({onExamStart})=>{
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Start the exam</h1>
                    <p>Good luck</p>
                   <button className="button is-info is-medium" onClick={onExamStart}>Start</button>

                </div>
            </div>
        </div>
    );
}
export default Start;