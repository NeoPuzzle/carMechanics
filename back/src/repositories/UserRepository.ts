import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
    getUserByIdWhithAppointments: async function (id:number): Promise<User> {
        const user = await this
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.appointments', 'appointments')
        .where('user.id = :id', { id })
        .getOne();

    if (!user) throw new Error('User not found');

    return user;

    }
});


export default UserRepository;