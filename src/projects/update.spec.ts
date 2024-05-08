import { updateProject } from "./update";

it("updates the version", () => {
  const project = { name: "Test", version: 1 };
  const updated = updateProject(project);

  expect(updated.version).toBe(2);
});
