// export const debounceFn = <T extends (...args: any[]) => ReturnType<T>>(
//     callback: T,
//     timeout: number
//   ): ((...args: Parameters<T>) => void) => {
//     let timer: ReturnType<typeof setTimeout>
  
//     return (...args: Parameters<T>) => {
//       clearTimeout(timer)
//       timer = setTimeout(() => {
//         callback(...args)
//       }, timeout)
//     }
// }


// export function add(a: number, b: number): number {
//     return a + b;
// }

// export function add(a: string, b: string): string {
//     return a + b;
// }

export {}