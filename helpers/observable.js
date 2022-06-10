const keys = {};

/**
 * A oberver pattern for key events
 * @param key a string event's key to observe
 * @param fn a callback function to be invocated when the event were trigered
 * @returns a callback function to be used to remove the listener
 */
export function observe(key, fn) {
  if (typeof fn !== 'function') {
    throw Error('fn must be a Function');
  }

  if (Array.isArray(key)) {
    const cb = key.map((k) => observe(k, fn));
    return () => cb.forEach((c) => c());
  }

  if (typeof key !== 'string') {
    throw Error('key must be a String');
  }

  const secureKey = key.toLowerCase();
  keys[secureKey] ??= [];

  if (keys[secureKey].indexOf(fn) < 0) {
    keys[secureKey].push(fn);
  }

  return () => {
    if (keys[secureKey].indexOf(fn) >= 0) {
      keys[secureKey].splice(keys[secureKey].indexOf(fn), 1);
    }
  };
}

/**
 * trigger a key event
 * @param key a string event's key to trigger
 * @param payload a payload to be passed to the listeners
 */
export function trigger(key, payload) {
  const secureKey = key.toLowerCase();
  if (keys[secureKey]) {
    keys[secureKey].forEach((fn) => {
      try {
        fn(payload);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Key listenner execution failed.');
      }
    });
  }
}
