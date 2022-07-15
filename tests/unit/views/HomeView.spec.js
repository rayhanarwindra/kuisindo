import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("renders text", () => {
    const msg = "Uji pengetahuan kamu tentang Indonesia!";
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toMatch(msg);
  });
  it("renders button", () => {
    const wrapper = mount(HomeView);
    const btn = wrapper.find("el-button");
    expect(btn.exists()).toBe(true);
  });
  it("renders image if large screen", async () => {
    const wrapper = mount(HomeView);
    global.innerWidth = 1080;
    const img = wrapper.find("img");
    expect(img.isVisible()).toBe(true);
  });
  it("don't render image if small screen", async () => {
    const wrapper = mount(HomeView);
    wrapper.setData({ width: 0 });
    global.innerWidth = 0;
    await nextTick();
    const img = wrapper.find("img");
    expect(img.isVisible()).toBe(false);
  });
});
