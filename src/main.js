import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser)

createApp(App).use(router).mount('#app')
