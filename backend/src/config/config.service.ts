import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import * as Joi from 'joi';
import { join } from 'path';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(configPath = 'development.env') {
    const config = dotenv.parse(readFileSync(join(__dirname, configPath)));
    this.envConfig = this.validateInput(config);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production'])
        .default('development'),
      PORT: Joi.number().default(3000),
      PUBLIC_URL: Joi.string().required(),
      PUBLIC_PATH: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  getUploadPath(dir) {
    return join(process.cwd(), this.get('PUBLIC_PATH'), dir);
  }

  getUploadUrl(dir, file) {
    return join('/', this.get('PUBLIC_URL'), dir, file);
  }
}
