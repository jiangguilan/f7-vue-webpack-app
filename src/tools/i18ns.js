import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages={
    'zh_CN': require('../i18n/zh'),
    'Arab_A': require('../i18n/Arab'),
    'en_US': require('../i18n/en'),
}

export default new VueI18n ({
    locale : 'en_US',   
    messages : messages
})