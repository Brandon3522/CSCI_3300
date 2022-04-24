<<<<<<< HEAD
=======

>>>>>>> 0ec9ba4fa6d2857c08f3d0cf445674de5cb03410
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
                if (a.priority > b.priority) return 1;
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
