import Vue from "vue";
import Vuex from "vuex";
import { createStoreObject } from "./utils";
import state from "../game/state";

Vue.use(Vuex);

window.state = state;

export const store = new Vuex.Store(createStoreObject(state));
