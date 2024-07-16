# 页面设计



## 初始页面数据的获取

1. 带搜索功能的

   hook.ts

   ~~~ts
   // 接口
   import {GetList} = "@/services/api/list"
   
   // 数据data
   const [listData, setListData] = useState<IListDataProps>([]);
   
   // 请求
   const Mounted = async (): Promise<IListMountedProps[]> => {
     const [...data] = await Promise.all([
       GetList({
         ...parmasObj
       }),
     ]);
   
     return new Promise((resolve) => resolve(data));
   };
   
   // 页面刷新、获取数据
   useEffect(() => {
   	Mounted()
     .then(([listList]:IGetListResponseProps)=>{
       const {content} = listList as IGetListResponseProps[]
       
       const list = content.filter(...).map(...)
       
       setListData(()=>list)
     })
   }, [InputValue]);
   ~~~

   props.ts

   ~~~ts
   import {IGetListResponseProps} form "@/services/dtos/list"
   
   export interface IListDataProps {
     key:"",
     title:"",
   }
   
   export type IListMountedProps = 
     IGetListResponseProps[]
   ~~~

   @/services/dtos/list

   ~~~js
   export interface IGetListContentProps {
     id:"",
     name:"",
   }
   
   export interface IGetListResponseProps {
     content:IGetListContentProps[]
   }
   ~~~

   



2. 前端过滤的



## 对于列表的分页设计