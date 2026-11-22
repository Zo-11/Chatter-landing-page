// Problem 1 — Deep Equal Easy
function deepEqual(objA, objB, seen = new WeakMap()) {
  if (Object.is(objA, objB)) return true;
  if (objA === null || objB === null) return false;
  if (typeof objA !== "object" || typeof objB !== "object") return false;
  if (Array.isArray(objA) !== Array.isArray(objB)) return false;
  if (Array.isArray(objA) && objA.length !== objB.length) return false;

  let matches = seen.get(objA);
  if (matches?.has(objB)) return true;
  if (!matches) {
    matches = new WeakSet();
    seen.set(objA, matches);
  }
  matches.add(objB);

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  return keysA.every((key) =>
    Object.hasOwn(objB, key) && deepEqual(objA[key], objB[key], seen)
  );
}

// Problem 2 — Object Diff Medium
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      added[key] = newObj[key];
    } else if (!Object.is(oldObj[key], newObj[key])) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) removed[key] = oldObj[key];
  }

  return { added, removed, changed };
}

// Problem 3 — Deep Freeze Medium
function deepFreeze(obj, seen = new WeakSet()) {
  const isObjectLike = obj !== null && (typeof obj === "object" || typeof obj === "function");
  if (!isObjectLike || seen.has(obj)) return obj;

  seen.add(obj);
  for (const value of Object.values(obj)) deepFreeze(value, seen);
  return Object.freeze(obj);
}

// Problem 4 — Private Counter Factory Easy
function createCounter() {
  let count = 0;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    get value() {
      return count;
    },
  };
}

// Problem 5 — Schema Validator Medium
function validateSchema(obj, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    if (obj === null || !Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
      continue;
    }

    const actualType = typeof obj[key];
    if (actualType !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
    }
  }

  return errors;
}