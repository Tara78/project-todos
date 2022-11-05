import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../reducers/task';

const CompletedTask = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const completeTask = items.filter((taskItem) => taskItem.isCaught);

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId));
  };

  const onDeleteTask = (taskId) => {
    dispatch(tasks.actions.deleteItem(taskId));
  };
  
  const onClickAllTaksDelete = (taskId) => {
    dispatch(tasks.actions.allTaskDelete(taskId));
  };

  const doneSummary = completeTask.length;

  return (
    <section>
      <p className="task-to-do">{doneSummary} done by now! </p>
      {completeTask.map((taskItem) => (
        <div className="taskConitainer" key={taskItem.id}>
          <div className="taskInput">
            <h2>{taskItem.text}</h2>
            <label>
              <input
                id="checkbox"
                type="checkbox"
                hidden
                checked={taskItem.isCaught}
                onChange={() => onTaskToggle(taskItem.id)}
              />
              <label for="checkbox" className="checkbox">
                <span>🗑</span>
              </label>
            </label>
          </div>
          <button
            className="deletbtn"
            onClick={() => onDeleteTask(taskItem.id)}
          >
            Done
          </button>
        </div>
      ))}
      <button className="delete-all-button" onClick={onClickAllTaksDelete}>
        Delete all
      </button>
    </section>
  );
};

export default CompletedTask;
