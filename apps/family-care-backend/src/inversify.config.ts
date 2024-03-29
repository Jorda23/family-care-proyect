import { Container } from "inversify";
import { PhotoController, TodoController, UserController } from "./controllers";
import {
  IJSONPlaceholderGateway,
  IJSONPlaceholderGatewayType,
  JSONPlaceholderGateway
} from "./integrations/JSONPlaceholderIntegration/Gateway";
import {
  IJSONPlaceholderPhotos,
  IJSONPlaceholderPhotosType,
  JSONPlaceholderPhotos
} from "./integrations/JSONPlaceholderIntegration/Photos";
import {
  IJSONPlaceholderPosts,
  IJSONPlaceholderPostsType,
  JSONPlaceholderPosts
} from "./integrations/JSONPlaceholderIntegration/Posts";
import {
  IReqResIn,
  IReqResInType,
  ReqResIn
} from "./integrations/ReqResIn/ReqResIn";
import { ApiAccessCheck, ErrorHandler } from "./middlewares";
import {
  ITodoRepository,
  ITodoRepositoryType,
  TodoRepository
} from "./repositories";
import { ITodoService, ITodoServiceType, TodoService } from "./services";
import {
  ILoggerFactory,
  ILoggerFactoryType,
  LoggerFactory
} from "./utils/LoggerFactory";
import { ITaskRepository, ITaskRepositoryType, TaskRepository } from "./repositories/TaskRepository";

const container = new Container();
container.bind<ITaskRepository>(ITaskRepositoryType).to(TaskRepository);
container.bind<ITodoRepository>(ITodoRepositoryType).to(TodoRepository);
container.bind<ITodoService>(ITodoServiceType).to(TodoService);
container
  .bind<IJSONPlaceholderGateway>(IJSONPlaceholderGatewayType)
  .to(JSONPlaceholderGateway);
container
  .bind<IJSONPlaceholderPhotos>(IJSONPlaceholderPhotosType)
  .to(JSONPlaceholderPhotos);
container
  .bind<IJSONPlaceholderPosts>(IJSONPlaceholderPostsType)
  .to(JSONPlaceholderPosts);
container.bind<PhotoController>(PhotoController).toSelf();
container.bind<TodoController>(TodoController).toSelf();
container.bind<UserController>(UserController).toSelf();
container.bind<IReqResIn>(IReqResInType).to(ReqResIn);
container
  .bind<ILoggerFactory>(ILoggerFactoryType)
  .to(LoggerFactory)
  .inSingletonScope();
container.bind<ApiAccessCheck>(ApiAccessCheck).toSelf();
container.bind<ErrorHandler>(ErrorHandler).toSelf();

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // container.applyMiddleware(makeLoggerMiddleware());
}

export default container;
