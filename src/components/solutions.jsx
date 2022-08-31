import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Solution extends Component {
    state = { 
        solutions : [
            {key: 10, number:1164, title:"加工零件1", views:3265},
            {key: 11, number:1165, title:"加工零件2", views:3266},
            {key: 12, number:1166, title:"加工零件3", views:3267},
            {key: 13, number:1167, title:"加工零件4", views:3268},
            {key: 14, number:1168, title:"加工零件5", views:3269},
            {key: 15, number:1169, title:"加工零件6", views:3270},
            {key: 16, number:1170, title:"加工零件7", views:3271},
        ],
     } 
    handleDelete(solution) {
        const solutions = this.state.solutions.filter(s => {return s !== solution});
        this.setState({
            solutions: solutions
        });
    }

    render() { 
        return (
           <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>标题</th>
                    <th>阅读</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {this.state.solutions.map(solution => (
                    <tr key={solution.key}>
                        <td>{solution.number}</td>
                        <td>{solution.title}</td>
                        <td>{solution.views}</td>
                        <td><button onClick={() => this.handleDelete(solution)} class="btn btn-danger">删除</button></td>
                    </tr>
                ))
                }
            </tbody>
           </table>
        );
    }
}
 
export default Solution;