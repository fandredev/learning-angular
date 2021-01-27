export type Env<T> = {
  production: T
}


export const environment: Env<boolean> = {
  production: true
};
