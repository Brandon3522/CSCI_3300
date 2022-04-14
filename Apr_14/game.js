const app = {
    data() {
        return {
            score: 0,
        };
    },
    methods: {
        subtract(value) {
            this.score -= value;
        },
        add(value) {
            this.score += value;
        },
        reset(value) {
            this.score = value;
        },
    },
    template: `<input type='text'>
    
            <button v-on:click='subtract(100)'>-100</button>
            <button v-on:click='subtract(10)'>-10</button>
            <button v-on:click='subtract(1)'>-</button>
            {{ score }}
            <button v-on:click='add(1)'>+</button>
            <button v-on:click='add(10)'>+10</button>
            <button v-on:click='add(100)'>+100</button>
    
            <button v-on:click='reset(0)'>Reset</button>`,
};

Vue.createApp(app).mount("#scoreA");
Vue.createApp(app).mount("#scoreB");
Vue.createApp(app).mount("#scoreC");
Vue.createApp(app).mount("#scoreD");
