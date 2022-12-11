import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Docs from '../src/components/Docs.vue'
import flushPromises from 'flush-promises'


describe('Docs.vue getDocs Test', () => {

  it('tests that method getDocs is functioning correctly', async () => {
    
    // Mock fetch results
    global.fetch = vi.fn().mockResolvedValue({
      json: () => ({
        data: [
          { _id: '1', name: 'TestNameOne', docContent: '<b>Test Content One</b>' },
          { _id: '2', name: 'TestNameTwo', docContent: '<b>Test Content Two</b>' }
        ]
      })
    })
    
    // render the component
    const wrapper = mount(Docs, {
    })

    const getDocsSpy = vi.spyOn(wrapper.vm, 'getDocs')
    expect(getDocsSpy).not.toHaveBeenCalled()

    // check that the component is rendered correctly
    wrapper.vm.getDocs();
    await flushPromises();

    expect(getDocsSpy).toHaveBeenCalled();

    expect(wrapper.vm.docs[0].name).toMatch('TestNameOne');
    expect(wrapper.vm.docs[1].name).toMatch('TestNameTwo');
    expect(wrapper.vm.docs[0].docContent).toMatch('<b>Test Content One</b>');
    expect(wrapper.vm.docs[1].docContent).toMatch('<b>Test Content Two</b>');
    
  })
})