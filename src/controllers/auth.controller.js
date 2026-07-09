import { generateToken } from '../data/token.js';

export const login = async (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {

        const token = generateToken({
            id: 1,
            email
        });

        return res.status(200).json({
            token
        });

    }

    return res.status(401).json({
        error: "Credenciales inválidas"
    });

};