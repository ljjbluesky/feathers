import { FeathersKoaContext } from './utils';

export const errorHandler = () => async (ctx: FeathersKoaContext, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.response.status = error.code || 500;

    ctx.body = {
      message: error.message
    };
  }
};