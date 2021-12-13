import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

export default tsx.component({
  name: "App",
  data: {
    x: 0,
    y: 0
  },
  render(): VNode {
    return (
      <div>
        <input v-model={this.x} />
        <input vModel={this.y} />
      </div>
    );
  }
});
