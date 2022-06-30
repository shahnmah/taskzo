import React from 'react';
import { useQuery } from "react-query"
import Loading from '../../Loading/Loading';
import ToDo from '../ToDo/ToDo';


const ToDos = () => {
    const { data: toDos, isLoading } = useQuery(['toDos'], () => fetch('toDos.json')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
           {
            toDos.map(toDo => <ToDo toDo={toDo}/>)
           }
        </div>
    );
};

export default ToDos;