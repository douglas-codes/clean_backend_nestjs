import { UserEntity } from '../../user.entity'
import type { UserInterface } from '../../user.interface'
import { fakerPT_BR as faker } from '@faker-js/faker'
describe('UserEntity unit tests', () => {
  it('Constructor method', () => {
    const props: UserInterface = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    const sut = new UserEntity(props)

    expect(sut.props.name).toEqual(props.name)
  })
})
