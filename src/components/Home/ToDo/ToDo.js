import React from 'react';
import { useQuery } from "react-query"
import Loading from '../../Loading/Loading';

const ToDo = () => {
    const { data: toDos, isLoading } = useQuery(['toDos'], () => fetch('toDos.json')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    console.log(toDos)
    return (
        <div>
            <h1>ToDos</h1>
        </div>
    );
};

export default ToDo;