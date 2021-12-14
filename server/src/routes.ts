import {UserController} from "./controller/UserController";
import {CreateUserPostRequest} from "./request/CreateUserPostRequest";
import {isAuth} from "./middleware/IsAuth";
import {AuthController} from "./controller/AuthController";
import {UpdateUserPutRequest} from "./request/UpdateUserPutRequest";
import {BeersController} from "./controller/BeersController";

export const Routes = [
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "create",
        middleware: [
            new CreateUserPostRequest().IsValid,
        ]
    },
    {
        method: "post",
        route: "/login",
        controller: AuthController,
        action: "login",
    },
    {
        method: "put",
        route: "/users",
        controller: UserController,
        action: "update",
        middleware: [
            isAuth,
            new UpdateUserPutRequest().IsValid,
        ]
    },
    {
        method: "delete",
        route: "/users",
        controller: UserController,
        action: "remove",
        middleware: [
            isAuth
        ]
    },
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "profile",
        middleware: [
            isAuth
        ]
    },
    {
        method: "get",
        route: "/beers",
        controller: BeersController,
        action: "beers",
        middleware: [
            isAuth
        ]
    },
];
