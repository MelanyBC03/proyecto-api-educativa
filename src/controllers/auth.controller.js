const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const usuarioDemo = {
    id: 1,
    email: "demo@demo.com",
    password: bcrypt.hashSync("1234", 10)
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (email !== usuarioDemo.email)
        return res.status(400).json({ msg: "Usuario no existe" });

    const esCorrecta = await bcrypt.compare(password, usuarioDemo.password);
    if (!esCorrecta)
        return res.status(400).json({ msg: "Credenciales incorrectas" });

    const token = jwt.sign(
        { id: usuarioDemo.id, email: usuarioDemo.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
};
