import React,{ Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

class FooterComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
        employees:[]
        }
    }

    render()
    {
        return (
            <div className="div">
                <header>
                    <nav className='navbar navbar-expanded-md navbar-dark-bg-dark'>
                        <h1>Employee Management App</h1>

                    </nav>
                </header>
                <Link to='/payment'>
                    Go to payment
                </Link>


            </div>
        )
    }

}
export default FooterComponent;