import React,{ Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from 'react-router-dom';

class ListEmployeeComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
        employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount()
    {
        EmployeeService.getEmployees().then((res) => {
            console.log(res.data)
            this.setState({employees:res.data})
        });
    }
    addEmployee() {
        this.props.history.push('/add-employee');
      }
    render()
    {
        return (
            <div className="div">
                <h2 className="text-center">Employees List</h2>
                <div className='row'>
                <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>

                </div>
                <div className='row'>
                <table class="table">
                    <thead>
                        <tr>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email id</th>
                               
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=><tr key={employee.id}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.emailid}</td>
 
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>

                </div>


            </div>
        )
    }

}
export default withRouter(ListEmployeeComponent);