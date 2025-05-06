import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "test-kk-todo-list";

function todoListViewModel() {
  const [useTodoList, setTodoList] = useState<string[]>([]);
  const [useInput, setInput] = useState<string>("");
  const [useLoaded, setLoading] = useState(false);

  const addTodo = () => {
    setTodoList([...useTodoList, useInput]);
  };

  const removeTodo = (index: number) => {
    const newTodoList = [...useTodoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const editTodo = (index: number) => {
    const newTodoList = [...useTodoList];
    const item = newTodoList[index];
    console.log("item", item);
    let newItem = prompt("ต้องการแก้ไขเป็นอะไร กรอกเลย -> ", item);
    if (newItem?.trim()) {
      newTodoList[index] = newItem;
      setTodoList(newTodoList);
    }
    console.log("newItem", newItem);
    console.log("newTodoList", newTodoList);
  };

  useEffect(() => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("storage", storage);
    if (storage && storage != "[]") {
      console.log("เข้า userEffect load data from localStorage");
      setTodoList(JSON.parse(storage));
    }
    setLoading(true);
  }, []);

  useEffect(() => {
    console.log("เข้า userEffect save localStorage");
    if (useLoaded && useTodoList.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(useTodoList));
      console.log("Saved to localStorage : ", useTodoList);
    }
  }, [useTodoList, useLoaded]);

  // test log
  // useEffect(() => {
  //   console.log("useTodoList เปลี่ยน", useTodoList);

  //   return () => {
  //     console.log("useTodoList ปิด");
  //   };
  // }, [useTodoList]);
  // useEffect(() => {
  //   console.log("useInputเปลี่ยน ", useInput);
  // }, [useInput]);

  return {
    addTodo,
    removeTodo,
    useTodoList,
    useInput,
    setTodoList,
    setInput,
    editTodo,
    LOCAL_STORAGE_KEY,
  };
}

export default todoListViewModel;
