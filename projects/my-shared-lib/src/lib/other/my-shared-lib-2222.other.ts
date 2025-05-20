// noinspection JSUnusedGlobalSymbols
export const remoteObj2222A = { a: 1 }

// noinspection JSUnusedGlobalSymbols
export const remoteObj2222B = { b: 2 }

// consuming host cannot see this since interfaces are a compile time only construct
export interface ModMyRemote2222Service {
  hello: (msg?: string | null) => void
}
