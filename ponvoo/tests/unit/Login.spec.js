import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

const wrapper = mount(Login)

test('submits a form', async () => {
    //given
    const wrapper = mount(Login)

    //expect(wrapper.contains(
    //    <button type="submit" disabled={true}>
    //        Sign up
    //    </button>
    //)).to.equal(true);
//
    ////when
    //await wrapper.find('input[type=email]').setValue('name@mail.com')
    //await wrapper.find('input[type=password]').setValue('waterWorld')
//
    ////then
    //expect(wrapper.contains(
    //    <button type="submit" disabled={false}>
    //        Sign up
    //    </button>
    //)).to.equal(true);
})
