import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slot: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slot: {
        default: "",
      },
      props: {
        color: "gary",
      },
    });
    expect(wrapper.classes().map(v => v.replace('\n','')).includes('bg-gary-500')).toBe(true)
  });
});
