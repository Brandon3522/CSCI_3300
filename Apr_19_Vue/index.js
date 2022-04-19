// const app = {
//     data() {
//         return {
//             newtask: '',
//             tasks: [
//                 {name: 'Walk Dog'},
//                 {name: 'Buy Milk'},

//             ],
//             methods: {
//                 addTask() {
//                     if (this.newtask == '') {
//                         return;
//                     }
//                     let task = {
//                         name: this.newtask,
//                     };

//                     this.tasks.push(task);
//                     this.newtask = '';
//                 }
//             },
//         }
//     }
// };

// Vue.createApp(app).mount('#todolist');

const app = {
    data() {
        return {
            newtask: "",
            priority: 0,
            tasks: [],
        };
    },
    methods: {
        addTask() {
            if (this.newtask == "") {
                return;
            }
            let task = {
                name: this.newtask,
                priority: parseFloat(this.priority),
                done: false,
            };

            this.tasks.push(task);
            this.newtask = "";

            this.tasks.sort((a, b) => {
                if (a.priority < b.priority) return 1;
                return -1;
            });
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        done(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    },
};

Vue.createApp(app).mount("#todolist");
