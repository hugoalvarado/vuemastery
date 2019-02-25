
Vue.component('product-label', {
    props: ['message'],
    template: `<div>
    <h1>{{ message }}</h1>
    </div>`,
    data() {
        return {}
    },
    methods: {
        onChange: function (v) {
            console.log(v);
        }
    }
});

Vue.component('product-input', {
    props: ['value'],
    template: `<div>
    <input @change="onChange">{{ value }}</input>
    </div>`,
    data() {
        return {}
    },
    methods: {
        onChange: function (evt) {
            console.log(evt.target.value);
            this.$emit('on-update-input', evt.target.value)

        }
    }
});


var app = new Vue({
    el: '#app',
    data: {
        product: 'Vue Socks',
        image: './VHAwmcm8.jpeg',
        inventory: 101,
        brand: "Crazy Bob's ",
        details: {
            sg:{
                id: 6544,
                color:'green',
                description: 'warm, fuzzy',
                img: './VHAwmcm8.jpeg'
            },
            bg:{
                id: 7378,
                color:'blue',
                description: 'warm, fuzzy, navy',
                img: './yTpl3Xuh.jpeg'
            },
        },
        cart: 0,
    },
    computed: {
        title: function () {
            return this.brand + ' ' + this.product
        },
        instock: function () {
            this.inventory > 0
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 23
        },
        setProductImage: function (img) {
            this.image = img
        },
        updateProductLabel : function(val) {
            console.log('Received: ' + val)
        }
    }
});

