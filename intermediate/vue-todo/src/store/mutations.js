const addOneItem = (store, todoItem) => {
    const data = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(data));
    store.todoItems.push(data);
}

const removeOneItem = (store, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    store.todoItems.splice(payload.index, 1);
}

const completeOneItem = (store, payload) => {
    store.todoItems[payload.index].completed = !store.todoItems[payload.index].completed; // 안티패턴 제거
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (store) => {
    localStorage.clear();
    store.todoItems = [];
}

// const showHeader = (store) => {
//     const header = store.headerText;
//     alert(header);
// }

export {addOneItem, removeOneItem, completeOneItem, clearAllItems}