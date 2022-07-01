import React from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import { useQuery } from "react-query"
import Loading from '../Loading/Loading';

const CompletedTasks = () => {
    const { data: completedTasks, isLoading, refetch } = useQuery(['toDos'], () => fetch('http://localhost:5000/completedTasks')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container'>
            {
                completedTasks.map(completedTask => <CompletedTask completedTask={completedTask} key={completedTask._id} refetch={refetch} />)
            }
        </div>
    );
};

export default CompletedTasks;