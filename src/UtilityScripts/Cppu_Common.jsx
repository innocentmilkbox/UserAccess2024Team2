import { useState } from "react";

export const useModal = () => {
   const [bolShow, SetShow] = useState(false);
   const Show = () => {
      SetShow(true);
   }
   const Hide = () => {
      SetShow(false);
   }
   return [bolShow, Show, Hide];
}

export const fetchTodo = (callback = () => { }) => {
   fetch('https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => callback(json.map((item,index)=>({...item, email: `${index} ${item.email}`})) || []))
}