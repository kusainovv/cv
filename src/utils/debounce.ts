export const debounce = (callback: CallableFunction, delay: number) => {
   let timeout : ReturnType<typeof setTimeout>

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(args), delay);
    }
}