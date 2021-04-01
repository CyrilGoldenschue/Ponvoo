import { mount } from '@vue/test-utils'
import Login from '../../src/views/Login.vue'

const wrapper = mount(Login)

test('submits a form', async () => {
    //given
    const wrapper = mount(Login)

    expect(wrapper.contains(
        <input type="submit" value="Log In" id="button" class="btn btn-block btn-primary muted"/>
    )).to.equal(true);

    //when
    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('input[type=password]').setValue('waterWorld')

    //then
    expect(wrapper.contains(
        <input type="submit" value="Log In" id="button" class="btn btn-block btn-primary"/>
    )).to.equal(true);
})
