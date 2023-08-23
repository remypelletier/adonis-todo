import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    console.log('register')
  }

  public async boot() {
    // IoC container is ready
    console.log('boot')
  }

  public async ready() {
    // App is ready
    console.log('ready')
  }

  public async shutdown() {
    // Cleanup, since app is going down
    console.log('down')
  }
}
