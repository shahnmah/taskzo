import React from 'react';
import { useQuery } from "react-query"
import Loading from '../../Loading/Loading';
import ToDo from '../ToDo/ToDo';


const ToDos = () => {
    const { data: toDos, isLoading, refetch } = useQuery(['toDos'], () => fetch('http://localhost:5000/task')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
           {
            toDos.map(toDo => <ToDo toDo={toDo} key={toDo._id} refetch={refetch}/>)
           }
        </div>
    );
};

export default ToDos;