# useReducer

集中进行状态管理，降低通过 useState 方式管理状态的复杂度

## **目录**

- state
- action
- dispatch
- reducer
- useReducer

- To Do List 功能

## state

状态

1. 与 useState 获取的 state 一样，是**不变的**,只能通过唯一的 dispatch 来更新状态

## action

单一的交互行为，即使会引发很多数据的更新

1. {type:string}

## dispatch

更新 state，派发行为

1. dispatch(action:IActionProps):void
   - 传入 action
   - dispatch 是为了下次渲染更新 state
   - 对**与当前 state 相同值**的行为跳过重新渲染

## reducer

纯函数

1. const reducer = (state:IStateProps,action):State = > { return state}
   - 传入的参数必须有 state 和 aciton
   - 返回值必须是 state

## useReducer

react hook

1. const [state, dispatch] = useReducer(reducer, initialArg, init?)
   - initialArg 表示 state 的初始值
   - init，计算初始值的函数，当传入值初始值为 init(initiArg)

## To Do List 功能

使用子传父，在组件内使用 set 更新状态.

useState 处理逻辑：

1. 根组件中，使用 useState 存储列表状态
2. Grocery 根组件中，新增添加，编辑（修改，删除）状态处理函数，每个函数中通过不同的更新逻辑调用 set 来更新列表信息
3. AddTask 新增组件中，使用 useState 存储当前新增输入框的值，触发新增时，将状态传递给父组件并且 set 清空状态值
4. TaskList 组件中，渲染列表数据，并且 map 循环为每一项添加编辑函数，函数触发时，将选中数据的 id 传递给父组件

```tsx
const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="添加任务"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        添加
      </button>
    </>
  );
};

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>保存</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>编辑</button>
      </>
    );
  }
  return (
    <label>
      {taskContent}
      <button onClick={() => onDelete(task.id)}>✅</button>
    </label>
  );
};

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

let nextId = 0;
const initialTasks = [];

export const Grocery = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>To do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
```

## `#`

1. 功能的实现可以使用 useState 或 useReducer，它们都可以用来管理状态

1. dispatch 派发 action 来指定**单一的**行为
1. reducer 函数集中管理 actions 处理行为
1. reducer 为纯函数，在组件外定义

## `#`

1. 声明 dispatch 方法，每个 dispatch 都接收一个 action

   ```tsx
   const handleAddTask = (text) => {
     dispatch({
       type: "added",
       id: nextId++,
       text: text,
     });
   };

   const handleChangeTask = (task) => {
     dispatch({
       type: "changed",
       task: task,
     });
   };

   const handleDeleteTask = (taskId) => {
     dispatch({
       type: "deleted",
       id: taskId,
     });
   };
   ```

2. 声明 reducer 函数，接收 state 和 action，返回 state

   ```tsx
   const tasksReducer = (tasks, action) => {
     switch (action.type) {
       case "added": {
         return [
           ...tasks,
           {
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "changed": {
         return [
           ...tasks,
           {
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "deleted": {
         return tasks.filter((t) => t.id !== action.id);
       }
       default:
         return tasks;
     }
   ```

3. 使用 useReducer，替换 useState

   ```
   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
   ```

4. 完整代码

   ```tsx
   // @ts-nocheck
   import { useReducer, useState } from "react";
   
   const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
     return (
       <ul>
         {tasks.map((task) => (
           <li key={task.id}>
             <Task
               task={task}
               onChange={onChangeTask}
               onDelete={onDeleteTask}
             />
           </li>
         ))}
       </ul>
     );
   };
   
   const Task = ({ task, onChange, onDelete }) => {
     const [isEditing, setIsEditing] = useState(false);
     let taskContent;
     if (isEditing) {
       taskContent = (
         <>
           <input
             value={task.text}
             onChange={(e) => {
               onChange({
                 ...task,
                 text: e.target.value,
               });
             }}
           />
           <button onClick={() => setIsEditing(false)}>保存</button>
         </>
       );
     } else {
       taskContent = (
         <>
           {task.text}
           <button onClick={() => setIsEditing(true)}>编辑</button>
         </>
       );
     }
     return (
       <label>
         {taskContent}
         <button onClick={() => onDelete(task.id)}>✅</button>
       </label>
     );
   };
   
   const AddTask = ({ onAddTask }) => {
     const [text, setText] = useState("");
     return (
       <>
         <input
           placeholder="添加任务"
           value={text}
           onChange={(e) => setText(e.target.value)}
         />
         <button
           onClick={() => {
             setText("");
             onAddTask(text);
           }}
         >
           添加
         </button>
       </>
     );
   };
   
   let nextId = 0;
   const initialTasks = [];
   
   const tasksReducer = (tasks, action) => {
     switch (action.type) {
       case "added": {
         return [
           ...tasks,
           {
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "changed": {
         return [
           ...tasks,
           {
             id: action.id,
             text: action.text,
             done: false,
           },
         ];
       }
       case "deleted": {
         return tasks.filter((t) => t.id !== action.id);
       }
       default:
         return tasks;
     }
   };
   
   export const Grocery = () => {
     const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
   
     const handleAddTask = (text) => {
       dispatch({
         type: "added",
         id: nextId++,
         text: text,
       });
     };
   
     const handleChangeTask = (task) => {
       dispatch({
         type: "changed",
         task: task,
       });
     };
   
     const handleDeleteTask = (taskId) => {
       dispatch({
         type: "deleted",
         id: taskId,
       });
     };
   
     return (
       <>
         <h1>To do List</h1>
         <AddTask onAddTask={handleAddTask} />
         <TaskList
           tasks={tasks}
           onChangeTask={handleChangeTask}
           onDeleteTask={handleDeleteTask}
         />
       </>
     );
   };
   ```
