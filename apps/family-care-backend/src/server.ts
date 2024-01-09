import 'reflect-metadata';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import {
  createExpressServer,
  useContainer,
  getMetadataArgsStorage,
} from 'routing-controllers';
import { PhotoController, TodoController, UserController } from './controllers';
import iocContainer from './inversify.config';
import { ApiAccessCheck, ErrorHandler } from './middlewares';
import createAuthorizationChecker from './utils/auth/createAuthorizationChecker';
import sequelize from './sequelize';

dotenv.config();

const PORT = process.env.PORT || 3001;

useContainer(iocContainer);

const app = createExpressServer({
  controllers: [TodoController, PhotoController, UserController],
  middlewares: [ApiAccessCheck, ErrorHandler],
  authorizationChecker: createAuthorizationChecker(iocContainer),
  defaultErrorHandler: false,
});

app.use(morgan('dev'));

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });

export default app;
