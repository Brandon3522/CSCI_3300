const app = {
    data() {
        return {    
            title: '',
            author: '',
            subject: '',
            userTitle: '',
            userAuthor: '',
            userSubject: '',
        };
    },
    methods: {
        submitBook() {
            if (this.userTitle == '' || this.userAuthor == '' || this.userSubject == '') {
                alert('Please enter a value into all fields.')
                return;
            }
            else {
                this.title = this.userTitle;
                this.author = this.userAuthor;  
                this.subject = this.userSubject;
                this.userTitle = '';
                this.userAuthor = '';
                this.userSubject = '';
            }
            
        },
    },
};

Vue.createApp(app).mount("#bookApp");