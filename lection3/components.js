
Vue.component('change-one', {

    template: `
    <div>
    <p>Счетчик:</p>
    <button >+++++++++</button>
    <button >--------</button>
    </div>
    `
})
Vue.component('change-two', {

    data() {
        return {
            counter: 0
        }
    },
    template: `
    <div>
    <h1>Привет</h1>
   <p>Lorem</p>
    </div>
    `
})
Vue.component('change-three', {

    template: `
    <div>
    <h1>Привет</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sint nihil natus, nobis molestias aliquam. Ab ullam a odio eligendi voluptates iste aspernatur cupiditate doloribus sapiente. Doloremque dolores amet soluta.</p>
   <h1>Привет</h1>
    </div>
    `
})
Vue.component('change-none', {
    template: `
    <div>
    <p>Счетчик:</p>
    <button >+++++++++</button>
    <button >--------</button>
   
    <h1>Привет</h1>
   <p>Lorem</p>
    
    <h1>Привет</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sint nihil natus, nobis molestias aliquam. Ab ullam a odio eligendi voluptates iste aspernatur cupiditate doloribus sapiente. Doloremque dolores amet soluta.</p>
   <h1>Привет</h1>
    </div>
    `
})
