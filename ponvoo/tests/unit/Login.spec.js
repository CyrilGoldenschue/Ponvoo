import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

const wrapper = mount(Login)

test('sayHello', () => {
    console.log("hello there");
})

// Try to get the input's content
test('Get inputs content', () => {
    const wrapper = mount(Login)
})
