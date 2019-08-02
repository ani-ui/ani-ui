import Vue from "vue";
import MessageComponent from "./Message";

let MessageConstructor = Vue.extend(MessageComponent);
let instance;
let instances = [];
let seed = 0;
const AniMessage = function() {
  instance = new MessageConstructor();
  instance.id = seed;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instances.push(instance.$el);
  let temp = seed;
  setTimeout(() => {
    document.body.removeChild(instances[temp]);
  }, 3000);
  seed++;
};

export default AniMessage;
