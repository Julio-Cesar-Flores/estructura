import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const isAuth = async (req, res, next) => {
  try {
    /* ver si tiene el token si no 400
           se decodifica si no 401
           si el no existe 401
           next()
        */

    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        msg: "Cabecera faltante",
      });
    }
    const payload = jwt.decode(token, config.jwt.secret);

    const user = await User.findById(payload.userId);

    if (!user) {
      return res.status(401).json({
        msg: "token inválido",
      });
    }

    /*
    const expirationDate = new Date(payload.expirationDate)
    if(payload.expirationDate < new){

    }*/
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token inválido",
    });
  }
};

export default isAuth;
