import type { UserProps } from './user.interface'
export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }
}
