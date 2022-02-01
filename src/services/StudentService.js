import axios from "axios";


const STUDENTS_REST_API_URL = "http://localhost:9191/students";

class StudentService{
    getStudents(){
        return axios.get(STUDENTS_REST_API_URL);
    }
}

export default new StudentService();

