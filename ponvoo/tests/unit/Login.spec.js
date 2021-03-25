import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

// Try to get the input's content
test('Get inputs content', () => {
    const wrapper = mount(Login)

    //Get the username
    const username = wrapper.find('username').element.value
    console.log(username)
})