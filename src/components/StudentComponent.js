import React from "react";
import StudentService from "../services/StudentService";


class StudentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            students: []
    }
    }


    componentDidMount(){
        StudentService.getStudents().then((response) => {
            this.setState({ students: response.data })
        });
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Students List</h1>

                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <td>Student Id</td>
                            <td>Student Name</td>
                            <td>Student Mark</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.students.map(
                                student =>
                                <tr key={student.id}>
                                    <td>{ student.id} </td>
                                    <td>{ student.name} </td>
                                    <td>{ student.mark} </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentComponent