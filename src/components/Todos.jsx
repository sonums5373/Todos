import React from 'react'
import UseFetch from '../hooks/UseFetch';

function Todos() {
    const result=UseFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(result);
    return (
        <>
            <h1 className="text-center text-primary m-10"> Todos List</h1>
           <div className='container'>
                <table className="table shadow mt-5">
                    <thead>
                        <tr>
                            <th>USERID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        result?.length>0?result.map((todos,index)=>(
                          <tr key={index}>
                          <td>{todos.userId}</td>
                          <td>{todos.id}</td>
                          <td>{todos.title}</td>
                          <td>{todos.completed?"yes":"no"}</td>

                          </tr>
                        )): <tr className='text-danger fs-4 fw-bolder'>nothing to display</tr>
                        
                      }
    
                    </tbody>
                </table>
           </div>

        </>
    )
}

export default Todos
