<template>
  <div id="editor">
    <textarea readonly :value="computeLineCountString" id="line-space"></textarea>

    <textarea
      id="editor-space"
      ref="editorRef"
      @keyup="updateLineNumber"
      @keydown="updateLineNumber"
    ></textarea>
  </div>
</template>

<script lang="ts">
import {
  createNumberLineString,
  lineCounter,
} from "../controllers/codeEditorController";

export default {
  data() {
    return {
      lineNumber: 1,
    };
  },
  methods: {
    updateLineNumber() {
      this.lineNumber = lineCounter(this.$refs.editorRef);
    },
  },
  computed: {
    computeLineCountString() {
      return createNumberLineString(this.lineNumber);
    },
  },
};
</script>
<style scoped>
#editor {
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
}
#editor-space,
#line-space {
  width: 100%;
  height: 75vh;
  outline: none;
  resize: none;
  line-height: 1;
  border-top: none;
}

#editor-space {
  border-left: none;
}

#line-space {
  width: 2rem;
}
</style>
