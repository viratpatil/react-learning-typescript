import React from "react";
import { ITask } from "../../App";

interface Props {
    task: ITask;
    completeTask(taskName: string):void;
}

export const TodoTask = ({task, completeTask}: Props) => {
    return <div className="task">
                <div className="content">
                    <span>{task.taskName}</span>
                    <span>{task.deadline}</span>
                </div>
                <button onClick={() => {
                    completeTask(task.taskName);
                }}>X</button>
        </div>
}