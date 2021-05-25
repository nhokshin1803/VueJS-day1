var vm1 = new Vue({
    el: '#app',
    data: {
        a: 1,
        name: 'Truong',
        rawHtml: '<span style="color: red">This is v-html span</span>',
        seen: true,
        showLink: true,
        amazon: 'https://amazon.com',
        isGreen: true,
        myColor: 'blue',
        heroes: [
            { name: 'Nevermore', age: 23 },
            { name: 'Ember Spirit', age: 25 },
            { name: 'Dragon Knight', age: 40 },
        ],
        yourName: '',
        checked: false,
        selected: ''
    },

    methods: {
        //.....
        hideThisLink: function() {
            this.showLink = false;
        },

        changeColor: function() {
            this.isGreen = !this.isGreen;
        }
    },

    computed: {
        //......
    }

});

var vm2 = new Vue({
    el: '#app2',
    data: {
        a: 0,
        name: 'Trang',
    },

    methods: {
        //.....
    },

    computed: {
        //......
    }

});