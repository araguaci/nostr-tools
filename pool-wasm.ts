import { verifyEvent } from './wasm.ts'
import { TrustedSimplePool } from './trusted-pool.ts'

export class SimplePool extends TrustedSimplePool {
  constructor() {
    super({ verifyEvent })
  }
}

export * from './trusted-pool.ts'