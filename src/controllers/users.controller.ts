import { Controller, Delete, Get, Post, Put, Req, Param, Res, HttpStatus, Body } from "@nestjs/common";
// import { Request, Response } from "express";
import { UserServices } from "../services/users.services";
import { userInterface } from "src/dto/users.dto";
@Controller("user")
export class UsersController {
    constructor(private userServices: UserServices) {}
    //add new user
    @Post("/addUser")
    addNewUser(@Body() body: userInterface): string {
        return this.userServices.addNewUser(body);
    }

    //update new user
    @Put("/update")
    updateUser(@Body() body: userInterface): string {
        return this.userServices.updateUser(body);
    }

    //delete new user
    @Delete("/delete/:id")
    deleteUser(@Param('id') id: number): string {
        return this.userServices.deleteUser(id);
    }

    //fetch new user
    @Get("/fetchUsers")
    fetchUsers(): userInterface[] {
        return this.userServices.fetchUsers();
    }

//     @Get(':id')
//     findOne(@Param() params): string {
//         console.log(params.id);
//         return `This action returns a #${params.id} users`;
//     }

//     @Post()
//         create(@Res() res: Response) {
//         res.status(HttpStatus.CREATED).send();
//   }
}
