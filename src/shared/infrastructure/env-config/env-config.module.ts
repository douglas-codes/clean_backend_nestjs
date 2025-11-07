import { DynamicModule, Module } from '@nestjs/common'
import { EnvConfigService } from './env-config.service'
import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config'
import { join } from 'node:path'
@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    const envFilePath = [
      join(
        __dirname,
        `../../../../.env.${process?.env?.NODE_ENV ?? 'development'}`,
      ),
    ]

    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          isGlobal: true,
          envFilePath,
        }),
      ],
      providers: [EnvConfigService],
      exports: [EnvConfigService],
    }
  }
}
