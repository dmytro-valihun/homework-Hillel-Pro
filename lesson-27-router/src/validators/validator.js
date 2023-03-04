export const validName = (name) => {
    const pattern = /^[A-Z][a-z]{1,}$/;
    const result = pattern.test(name);
    if (!result) {
        return false
    }
    return true
}

export const validPhone = (phone) => {
    const pattern = /^\+\d{11}$/;
    const result = pattern.test(phone);
    if (!result) {
        return false
    }
    return true
}