<template>
  <ul>
    <li>
      <code>"core/*"</code>
      <div style="padding-left:1em">
        Select the Java sources defined in <code>core</code> package. The
        subpackages are <strong>not</strong> included.
      </div>
    </li>
    <li>
      <code>"core/**"</code>
      <div style="padding-left:1em">
        Select the Java sources defined in <code>core</code> package and in
        <strong>all</strong> subpackages recursively.
      </div>
    </li>
    <li>
      <code>"core/Application.java"</code>
      <div style="padding-left:1em">Select a single Java source.</div>
    </li>
    <li>
      <code>"core/Application.java \n service/Order.java"</code>
      <div style="padding-left:1em">
        Select individual Java sources separated by line breaks.
      </div>
    </li>
    <li>
      <code>"$(git diff-tree --no-commit-id --name-only -r HEAD)"</code>
      <div style="padding-left:1em">
        Select the sources modified in the last git commit.
      </div>
    </li>
    <li>
      <code>""</code>
      <div style="padding-left:1em">
        No source is selected. No refactoring takes place.
      </div>
    </li>
  </ul>
</template>
