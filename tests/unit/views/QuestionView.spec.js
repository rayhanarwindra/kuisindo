import { mount, createLocalVue } from "@vue/test-utils";
import QuestionView from "@/views/QuestionView.vue";
import { nextTick } from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const $route = {
  path: "/question/1",
};

describe("QuestionView.vue", () => {
  let getters;
  let state;
  let store;
  let actions;
  beforeEach(() => {
    state = {
      questions: [
        {
          question: "Siapa presiden pertama Indonesia?",
          options: [
            {
              letter: "A",
              answer: "Habibie",
            },
            {
              letter: "B",
              answer: "Joko Widodo",
            },
            {
              letter: "C",
              answer: "Soeharto",
            },
            {
              letter: "D",
              answer: "Soekarno",
            },
          ],
          correctAnswer: "D",
        },
      ],
    };
    getters = {
      getNumberofQuestion: () => 5,
      getPoints: () => 0,
      getQuestion: () => () => state.questions[0],
    };
    actions = {
      incrementPoint: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
      state,
      actions,
    });
  });

  it("renders text", () => {
    const msg = "Pertanyaan";
    const wrapper = mount(QuestionView, {
      store,
      router,
      localVue,
      mocks: {
        $route,
      },
    });
    expect(wrapper.text()).toContain(msg);
  });
  it("button disabled if no answer chosen", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: { $route },
    });
    wrapper.setData({ pickedAnswer: "" });
    const btn = wrapper.find("el-button");
    expect(btn.attributes().disabled).toBe("true");
  });
  it("button enabled if answer chosen", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: { $route },
    });
    wrapper.setData({ pickedAnswer: "Test" });
    await nextTick();
    const btn = wrapper.find("el-button");

    expect(btn.attributes().disabled).toBeUndefined();
  });

  it("increment point if answer correct", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: { $route },
    });
    wrapper.setData({ pickedAnswer: "D" });
    await nextTick();
    const btn = wrapper.find("el-button");
    await btn.trigger("click");
    console.log(getters.getQuestion(1));

    expect(actions.incrementPoint).toHaveBeenCalled();
  });

  it("don't increment point if answer incorrect", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: { $route },
    });
    wrapper.setData({ pickedAnswer: "A" });
    await nextTick();
    const btn = wrapper.find("el-button");
    await btn.trigger("click");
    expect(actions.incrementPoint).toBeCalledTimes(0);
  });

  it("button says next if not last question", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: { $route },
    });
    const btn = wrapper.find("el-button");
    expect(btn.text()).toBe("Next");
  });

  it("button says finish if last question", async () => {
    const wrapper = mount(QuestionView, {
      store,
      localVue,
      router,
      mocks: {
        $route,
      },
    });
    await nextTick();
    wrapper.setData({ questionNo: 5 });
    const btn = wrapper.find("el-button");
    expect(btn.text()).toBe("Finish");
  });
});
