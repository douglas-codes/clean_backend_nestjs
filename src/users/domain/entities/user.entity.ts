import type { UserInterface } from './user.interface'

export class UserEntity {
  constructor(public readonly props: UserInterface) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }
}
