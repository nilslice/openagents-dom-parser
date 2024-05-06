import { Test } from "@dylibso/xtp-test";

export function test() {
  let dom = JSON.parse(Test.callString("run", "<div>hello world</div>"));
  Test.assertEqual(
    "parser provides correct output type",
    dom.treeType,
    "documentFragments",
  );
  Test.assertEqual(
    "parser identifies correct number of children",
    dom.children.length,
    1,
  );
  let div = dom.children[0];
  Test.assert(
    "matches expected element name and children content",
    div.name === "div" && div.children[0] === "hello world",
    `expected "div" with children "hello world", got "${div.name}" with children "${
      div.children.join("")
    }"`,
  );
}
