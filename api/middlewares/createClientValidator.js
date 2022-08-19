import joi from "joi";

const createClientSchema = joi.object({
  name: joi.string().required(),
  birthday: joi.date(),
  age: joi.number().integer().positive(),
  adresses: joi.array().items(joi.string()),
  references: joi.array().items(
    joi.object({
      name: joi.string(),
      phone: joi.string(),
    })
  ),
  email: joi.string(),
  phone: joi.string(),
});

export default async (req, res, next) => {
  try {
    await createClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validación",
      error,
    });
  }
};
