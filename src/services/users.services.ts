import { Injectable } from "@nestjs/common";
import { userInterface } from "src/dto/users.dto";
// This service will be responsible for data storage and retrieval, and is designed to be used by the UsersController
@Injectable()// marks UserServices class as a provider
export class UserServices {
    public users : userInterface[] = [];
    addNewUser(user: userInterface): string {
        this.users.push(user);
        return "user added successfully";
    }

    updateUser(user: userInterface): string {
        const index = this.users.findIndex(element => {
            return element.id == user.id;
        })
        this.users[index] = user;
        return "user updated successfully";
    }

    deleteUser(id: number): string {
        this.users = this.users.filter((element) => {
            return element.id != id;
        })
        return "user deleted successfully";
    }

    fetchUsers(): userInterface[] {
        return this.users;
    }
}