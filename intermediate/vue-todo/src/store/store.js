import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 초기 데이터 localStorage에서 읽기
const storage = {
    fetch() {
        const items = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                items.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        return items;
    }
}

export const store =  new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(store, todoItem) {
            const data = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(data));
            store.todoItems.push(data);
        },
        removeOneItem(store, payload) {
            localStorage.removeItem(payload.todoItem.item);
            store.todoItems.splice(payload.index, 1);
        },
        completeOneItem(store, todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems(store) {
            localStorage.clear();
            store.todoItems = [];
        }
    }
})