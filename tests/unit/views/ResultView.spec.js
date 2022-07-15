import { mount, createLocalVue } from "@vue/test-utils";
import ResultView from "@/views/ResultView.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ResultView.vue", () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      getPoints: () => 0,
    };
    store = new Vuex.Store({
      getters,
    });
  });
  it("renders text", () => {
    const msg = "Nilai:";
    const wrapper = mount(ResultView, {
      store,
      localVue,
    });
    expect(wrapper.text()).toContain(msg);
  });
});
