import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations.js';

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
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        ...mutations,
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