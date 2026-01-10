declare function uuid(): string;

declare const officemate: {
    uuid: typeof uuid;
};

export { officemate as default, uuid };
