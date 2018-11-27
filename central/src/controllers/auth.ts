import { Get } from "./index";


export class AuthController {
  @Get('user')
  someFunction() {
    console.log('here')
  }
}