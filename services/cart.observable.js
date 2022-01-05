const onCartChangeListeners = [];
const onCartItemPushedListeners = [];

export const onCartItemPushed = (fn) => {
  if (typeof fn != "function") {
    throw Error("fn must be a Function");
  }

  if (onCartItemPushedListeners.indexOf(fn) < 0) {
    onCartItemPushedListeners.push(fn);
  }
}

export const offCartItemPushed = (fn) => {
  if (typeof fn != "function") {
    throw Error("fn must be a Function");
  }

  if (onCartItemPushedListeners.indexOf(fn) >= 0) {
    onCartItemPushedListeners.splice(onCartItemPushedListeners.indexOf(fn), 1);
  }
}

export const triggerCartItemPushed = async (payload) => {
  onCartItemPushedListeners.forEach(fn => {
    try {
      fn(payload);
    }
    catch (err) {
      console.error("Cart listenner execution failed.");
    }
  });
}


export const onCartChange = (fn) => {
  if (typeof fn != "function") {
    throw Error("fn must be a Function");
  }

  if (onCartChangeListeners.indexOf(fn) < 0) {
    onCartChangeListeners.push(fn);
  }
}

export const offCartChange = (fn) => {
  if (typeof fn != "function") {
    throw Error("fn must be a Function");
  }

  if (onCartChangeListeners.indexOf(fn) >= 0) {
    onCartChangeListeners.splice(onCartChangeListeners.indexOf(fn), 1);
  }
}

export const triggerCartChange = async (payload) => {
  onCartChangeListeners.forEach(fn => {
    try {
      fn(payload);
    }
    catch (err) {
      console.error("Cart listenner execution failed.");
    }
  });
}
