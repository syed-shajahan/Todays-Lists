import React, { useState } from "react";

const ToDoList = () => {
  const [query, setQuey] = useState("");
  const [items, setItems] = useState([]);

  // ---------Adding Todos-----------//
  const handleSubmit = () => {
    if (!query) {
    } else {
      setItems((prev) => {
        return [...prev, query];
      });
      setQuey(" ");
    }
  };

  console.log(items, " heres is your added list will be");

  // --------Deleting the Task -----/

  const handleDeleteList = (removingItems) => {
    const updatedList = items.filter((elem, ids) => {
      return ids !== removingItems;
    });
    return setItems(updatedList);
  };

  const delAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="todo_list_container">
        <h3>Today's List 🕖</h3>

        <div className="formWarp">
          <input
            type="text"
            placeholder="Set task for the day"
            value={query}
            onChange={(e) => setQuey(e.target.value)}
          />
          <button type="submit" className="addBtn" onClick={handleSubmit}>
            Add ➕
          </button>
        </div>

        <div className=" cardwarp">
          {items.map((elem, id) => {
            return (
              <div
                className={
                  handleSubmit ? `listcardWarp active` : `listcardWarp remove`
                }
                key={id}
              >
                <div className="listcard">{elem}</div>
                <button className="delBtn" onClick={() => handleDeleteList(id)}>
                  {" "}
                  🗑️{" "}
                </button>
              </div>
            );
          })}
          
        </div>
        <span className="ca" onClick={delAll}>
            Clear All
          </span>
      </div>
    </div>
  );
};

export default ToDoList;
