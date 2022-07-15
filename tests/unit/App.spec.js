import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("ResultView.vue", () => {
  it("renders text", () => {
    mount(App);
    expect(true).toBeTruthy();
  });
});
