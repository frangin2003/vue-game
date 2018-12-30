let iterateOnKeys = (window.iterateOnKeys = (object, keys, callback) => {
  for (var key in object) {
    // check if the property/key is defined in the object itself, not in parent
    if (object.hasOwnProperty(key)) {
      let keysCopy = keys.slice();
      keysCopy.push(key);
      if (!Array.isArray(object[key]) && object[key] instanceof Object) {
        iterateOnKeys(object[key], keysCopy, callback);
      } else {
        console.log(keysCopy);
        callback(object, keysCopy);
      }
    }
  }
});

const createStoreObject = state => {
  let store = { state: state, mutations: {}, getters: {} };

  iterateOnKeys(state, [], (object, keys) => {
    let name = "";
    keys.forEach(v => {
      name += v.charAt(0).toUpperCase() + v.substring(1);
    });
    store.mutations[`set${name}`] = (state, value) => {
      object[keys.slice(-1).pop()] = value;
    };
  });

  iterateOnKeys(state, [], (object, keys) => {
    let name = "";
    keys.forEach(v => {
      name += v.charAt(0).toUpperCase() + v.substring(1);
    });
    name = name.charAt(0).toLowerCase() + name.substring(1);
    //store.getters[name] = state => eval(`state.${keys.slice().join(".")}`);
    store.getters[name] = state => {
      console.log(state);
      let script = `state.${keys.slice().join(".")}`;
      console.log(script);
      return eval(script);
    };
  });

  return store;
};

export { createStoreObject };
