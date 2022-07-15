import { mount } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";

describe("ResultView.vue", () => {
  it("renders text", () => {
    const msg = "KuisIndo";
    const wrapper = mount(NavigationBar);
    expect(wrapper.text()).toContain(msg);
  });
});
