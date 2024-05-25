# recoil

组件共享状态，其中atoms和selectors都表示状态数据

![image-20240525075052817](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240525075052817.png)



## 目录



## to do list

![image-20240525085222074](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240525085222074.png)

1. 添加事项
2. 完成、删除、编辑事项
3. 数据的过滤

### `#`

- recoil 依赖 `npm i recoil -s`

- atom 数据来源

  1. 声明atom

     ~~~tsx
     const uAtom = atom({
       key: 'your atom key',
       default: '',
     });
     ~~~

     

  2. 获取数据 useRecoilValue()

  3. 获取atom的setter函数 useSetRecoilState()

- selector 派生

  1. 声明selector

     ~~~tsx
     const uSelector = selector({
       key: 'your atom key',
       get: ({get}) => {
     		//...
       },
     });
     ~~~

  2. 使用get可以追踪依赖项 `get(your atom)`

  3. 获取数据 useRecoilValue()

### `#`

1. 在应用中导入recoil组件

   ~~~tsx
   import {
     RecoilRoot,
     atom,
     selector,
     useRecoilState,
     useRecoilValue,
     useSetRecoilState,
   } from "recoil";
   ~~~

2. 用RecoilRoot包裹你的应用

   ~~~tsx
   <RecoilRoot>
      <App />
   </RecoilRoot>
   ~~~

3. 使用atom

   ~~~tsx
   const todoListState = atom({
     key: "todoListState",
     default: [],
   });
   ~~~

4. dom结构。使用列表数据map展示数据

   ~~~tsx
   //demo
   const todoList = useRecoilValue(todoListState);
   
   {todoList.map((item: any) => {
           return <TodoItem key={item.id} item={item} />;
   })}
   ~~~

   

5. 实现功能：添加事项。新增时，获取input的值，并且提交todoListState。input设置为状态是因为将inputValue与输入框双向绑定，方便获取值和点击新增后清空值

   ~~~tsx
   //demo
   
   //声明状态
   const [inputValue, setInputValue] = useState("");
   const setTodoList = useSetRecoilState(todoListState);
   //点击保存后
   setTodoList((oldTodoList) => [
     ...oldTodoList,
     {
       id: uuid(),
       text: inputValue,
       isComplete: false,
     },
   ]);
   setInputValue("");
   ~~~

6. 实现功能：事项的完成、编辑、删除。使用useRecoilState获取列表数据和setter,其中`replaceItemAtIndex`与`removeItemAtIndex`只是一个获取更新后数据的方法，最后用setter更新atom。

   ~~~tsx
   //demo
   const [todoList, setTodoList] = useRecoilState(todoListState);
   
   const editItemText = ({ event }) => {
     const newList = replaceItemAtIndex(todoList);
     setTodoList(newList);
   };
   
   const toggleItemCompletion = () => {
     const newList = replaceItemAtIndex(todoList);
     setTodoList(newList);
   };
   
   const deleteItem = ({ event }) => {
     const newList = removeItemAtIndex(todoList, index);
     setTodoList(newList);
   };
   ~~~

7. 实现功能：筛选数据。声明atom用于筛选条件。使用selector，其中内部使用get追踪筛选条件以及列表数据

   ~~~tsx
   //demo
   const todoListFilterState = atom({
     key: "todoListFilterState",
     default: "Show All",
   });
   
   const filteredTodoListState = selector({
     key: "filteredTodoListState",
     get: ({ get }) => {
       const filter = get(todoListFilterState);
       const list = get(todoListState);
   
       switch (filter) {
         case "Show Completed":
           return list.filter((item) => item.isComplete);
         case "Show Uncompleted":
           return list.filter((item) => !item.isComplete);
         default:
           return list;
       }
     },
   });
   
   ~~~

   ⚠️此时渲染的数据要使用selector，参考开头的图就明白数据流了

   ~~~tsx
   //const todoList = useRecoilValue(todoListState);
   //使用包装后seletor
   const todoList = useRecoilValue(filteredTodoListState);
   ~~~

8. 完整代码

   ~~~tsx
   // @ts-nocheck
   import { useState } from "react";
   import {
     RecoilRoot,
     atom,
     selector,
     useRecoilState,
     useRecoilValue,
     useSetRecoilState,
   } from "recoil";
   
   const todoListState = atom({
     key: "todoListState",
     default: [],
   });
   
   const todoListFilterState = atom({
     key: "todoListFilterState",
     default: "Show All",
   });
   
   const filteredTodoListState = selector({
     key: "filteredTodoListState",
     get: ({ get }) => {
       const filter = get(todoListFilterState);
       const list = get(todoListState);
   
       switch (filter) {
         case "Show Completed":
           return list.filter((item) => item.isComplete);
         case "Show Uncompleted":
           return list.filter((item) => !item.isComplete);
         default:
           return list;
       }
     },
   });
   
   const todoListStatsState = selector({
     key: "todoListStatsState",
     get: ({ get }) => {
       const todoList = get(todoListState);
       const totalNum = todoList.length;
       const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
       const totalUncompletedNum = totalNum - totalCompletedNum;
       const percentCompleted =
         totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;
   
       return {
         totalNum,
         totalCompletedNum,
         totalUncompletedNum,
         percentCompleted,
       };
     },
   });
   
   // 数据行
   const TodoItem = ({ item }: any) => {
     const [todoList, setTodoList] = useRecoilState(todoListState);
     const index = todoList.findIndex((listItem) => listItem === item);
   
     const editItemText = ({ event }) => {
       const newList = replaceItemAtIndex(todoList, index, {
         ...item,
         text: event.target.value,
         isComplete: false,
       });
   
       setTodoList(newList);
     };
   
     const toggleItemCompletion = () => {
       const newList = replaceItemAtIndex(todoList, index, {
         ...item,
         isComplete: !item.isComplete,
       });
   
       setTodoList(newList);
     };
   
     const deleteItem = ({ event }) => {
       const newList = removeItemAtIndex(todoList, index);
   
       setTodoList(newList);
     };
   
     return (
       <div>
         <span onClick={toggleItemCompletion}>
           {item.isComplete ? "✅" : "❌"}
         </span>
         <input type="text" value={item.text} onChange={editItemText} />
         <button onClick={deleteItem}>删除</button>
       </div>
     );
   };
   
   // 新增
   const TodoItemCreator = () => {
     const [inputValue, setInputValue] = useState("");
     const setTodoList = useSetRecoilState(todoListState);
   
     const onChange = (event: Event) => {
       setInputValue(event.target.value);
     };
   
     const addItem = () => {
       setTodoList((oldTodoList) => [
         ...oldTodoList,
         {
           id: uuid(),
           text: inputValue,
           isComplete: false,
         },
       ]);
       setInputValue("");
     };
   
     return (
       <>
         <input type="text" value={inputValue} onChange={onChange} />
         <button onClick={addItem}>Add</button>
       </>
     );
   };
   
   // 过滤器
   const TodoListFilters = () => {
     const [filter, setFilter] = useRecoilState(todoListFilterState);
   
     const updateFilter = (event) => {
       setFilter(event.target.value);
     };
   
     return (
       <>
         <select value={filter} onChange={updateFilter}>
           <option value="Show All">全部</option>
           <option value="Show Completed">已完成</option>
           <option value="Show Uncompleted">未完成</option>
         </select>
       </>
     );
   };
   
   // 数据统计
   function TodoListStats() {
     const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
       useRecoilValue(todoListStatsState);
   
     const formattedPercentCompleted = Math.round(percentCompleted);
   
     return (
       <>
         <p>Total items: {totalNum}</p>
         <p>✅: {totalCompletedNum}</p>
         <p>❌: {totalUncompletedNum}</p>
         <p>%: {formattedPercentCompleted}%</p>
       </>
     );
   }
   
   // 列表
   const TodoList = () => {
     // const todoList = useRecoilValue(todoListState);
     //包装后seletor
     const todoList = useRecoilValue(filteredTodoListState);
   
     return (
       <>
         <TodoListFilters />
         <TodoItemCreator />
         {todoList.map((item: any) => {
           return <TodoItem key={item.id} item={item} />;
         })}
         <TodoListStats />
       </>
     );
   };
   
   function uuid() {
     var temp_url = URL.createObjectURL(new Blob());
     var uuid = temp_url.toString();
     URL.revokeObjectURL(temp_url);
     return uuid.substr(uuid.lastIndexOf("/") + 1);
   }
   
   function replaceItemAtIndex(arr, index, newValue) {
     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
   }
   
   function removeItemAtIndex(arr, index) {
     return [...arr.slice(0, index), ...arr.slice(index + 1)];
   }
   
   // root
   export const Message = () => {
     return (
         <div style={{margin:"50px"}}>
           <RecoilRoot>
             <TodoList />
           </RecoilRoot>
         </div>
     );
   };
   ~~~

   



