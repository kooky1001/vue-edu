import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    }
})