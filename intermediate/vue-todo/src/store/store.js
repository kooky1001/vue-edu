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
        completeOneItem(store, payload) {
            store.todoItems[payload.index].completed = !store.todoItems[payload.index].completed; // 안티패턴 제거
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(store) {
            localStorage.clear();
            store.todoItems = [];
        },
        showHeader(store) {
            const header = store.headerText;
            alert(header);
        }
    },
    actions: {
        showHeaderText(context) {
            setTimeout(() => context.commit('showHeader'), 500);
        }
    }
})