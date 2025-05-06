import todoListViewModel from "./todoListViewModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function todoList() {
  const {
    addTodo,
    removeTodo,
    useTodoList,
    setInput,
    editTodo,
    setTodoList,
    LOCAL_STORAGE_KEY,
  } = todoListViewModel();
  return (
    <div>
      <h1 className="text-2xl">เพิ่มรายการ</h1>

      <div className="grid grid-cols-2 gap-2 w-80 m-auto my-5">
        <input
          className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text"
          placeholder="เพิ่มรายการ..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
          onClick={addTodo}
        >
          เพิ่ม
        </button>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        รายการที่เพิ่มทั้งหมด
      </h2>
      <ul className="max-w-md m-auto divide-y divide-gray-200">
        {useTodoList.map((todo, index) => (
          <li key={index} className="py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0 mr-2">
                  <div className="w-10 h-10 text-gray-500 rounded-full border flex items-center justify-center text-3xl">
                    {todo.charAt(0).toUpperCase()}
                  </div>
                </div>
                <span>{todo}</span>
              </div>
              <div className="space-x-3">
                <button
                  className="hover:text-orange-700 text-orange-500 cursor-pointer"
                  onClick={() => editTodo(index)}
                >
                  <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                </button>
                <button
                  className="hover:text-red-700 text-red-500 cursor-pointer"
                  onClick={() => removeTodo(index)}
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-transparent hover:bg-amber-300 transition duration-200 text-amber-500 hover:text-amber-700 border border-slate-700 rounded-md focus:border-slate-400 px-3 py-2 m-3"
        onClick={() => {
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          setTodoList([]); // ล้าง state ด้วย
        }}
      >
        ล้างทั้งหมด
      </button>
    </div>
  );
}

export default todoList;
