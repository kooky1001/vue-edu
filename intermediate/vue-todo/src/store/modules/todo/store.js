import * as mutation from './mutations.js';

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

const state = {
    headerText: 'TODO it~~~!',
    todoItems: storage.fetch()
}

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    ...mutation,
    showHeader(store) {
        const header = store.headerText;
        alert(header);
    }
}

const actions = {
    showHeaderText(context) {
        setTimeout(() => context.commit('showHeader'), 500);
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}