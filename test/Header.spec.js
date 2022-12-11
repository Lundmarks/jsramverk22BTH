import { describe, it, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Header from '../src/components/Header.vue'
import flushPromises from 'flush-promises'


describe('Header.vue Rendering Test', () => {
  it('renders titles and texts when component is created', () => {
    // render the component
    const wrapper = shallowMount(Header, {
      propsData: {
        titleText: 'Header Test Mount'
      }
    })

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Header Test Mount')
    
    // check that the title is rendered
    expect(wrapper.text()).toMatch('Username')
  })
})

describe('Header.vue setUsername Test', () => {
  it('tests that method setUsername is functioning correctly', () => {
    // render the component
    const wrapper = shallowMount(Header, {
      propsData: {
        titleText: 'Header Test Mount / setUsername'
      }
    })
    
    // check that the component is rendered correctly
    expect(wrapper.text()).toMatch('Header Test Mount / setUsername')
    
    // check that the username is empty
    expect(wrapper.vm.$refs.nameField.value).toMatch('')
    // Setting a username in the username field
    wrapper.vm.setUsername("testUsername333")
    // check that the username is updated
    expect(wrapper.vm.$refs.nameField.value).toMatch('testUsername333')
  })
})


describe('Header.vue saveText Test', () => {
  // afterEach(() => {
  //   vi.restoreAllMocks()
  // })

  it('tests that method saveText is functioning correctly', async () => {
    // Mock fetch
    global.fetch = vi.fn();
    // Remove to push to database

    // render the component
    const wrapper = mount(Header, {
      propsData: {
        titleText: 'Header Test Mount / saveText'
      }
    })
    
    // Set variables
    const randomId = Math.ceil(Math.random()*100000);
    const username = "test-username-" + randomId;
    const document = "test-document-content-" + randomId;
    
    wrapper.vm.$root.dottxtComponent = vi.fn();
    wrapper.vm.$root.dottxtComponent.getEditorContent = vi.fn().mockReturnValue(document);
    wrapper.vm.$root.dottxtComponent.getDocs = vi.fn();
    const getEditorContentSpy = vi.spyOn(wrapper.vm.$root.dottxtComponent, 'getEditorContent')
    const getDocsSpy = vi.spyOn(wrapper.vm.$root.dottxtComponent, 'getDocs')
    
    expect(getEditorContentSpy).not.toHaveBeenCalled()
    expect(getDocsSpy).not.toHaveBeenCalled()

    // check that the component is rendered correctly
    expect(wrapper.text()).toMatch('Header Test Mount / saveText');
    wrapper.vm.setUsername(username);
    await wrapper.vm.saveText();
    await flushPromises();

    expect(getEditorContentSpy).toHaveBeenCalled();
    expect(getDocsSpy).toHaveBeenCalled();
    expect(wrapper.vm.loadingText).toBe('<p style="color:green">Saved!</p>');
  })
})