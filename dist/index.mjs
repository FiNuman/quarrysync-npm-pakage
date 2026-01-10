// src/uuid.ts
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// src/index.ts
var officemate = {
  uuid
};
var index_default = officemate;
export {
  index_default as default,
  uuid
};
