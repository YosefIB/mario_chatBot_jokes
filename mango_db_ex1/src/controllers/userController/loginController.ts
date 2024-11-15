import { Request, Response } from 'express';
import { UserModel } from '../../model/users/usersModel';   

export const loginUser = async (req: any, res: any) => {
    try{
        const { email, password } = req.body;
        if (!email || !password){
            throw new Error(`Request failed with status ${res.status}`);
            console.log("email or password is required");
        }

        const user = await UserModel.findOne({ email });
        if (!user)
            return res.status(400).json({ error: 'User not found' });

        res.status(200).json({ message: 'Login successful' });
}catch
        {
            console.error('Error in loginController: ');
            res.status(500).json({ error: 'Internal server error' });
        }
}