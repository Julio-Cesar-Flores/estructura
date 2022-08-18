import Client from "../models/Client.js";

const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    return res.json({
      msg: "Cliente creado",
      Client: newClient,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el Cliente",
      error,
    });
  }
};

const getAllClients = async (req, res) => {
  try {
    const Clients = await Client.find({});
    return res.json({
      msg: "Clientes encontrados",
      data: Clients,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Clientes",
      error,
    });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const Client = await Client.findById(id);
    return res.json({
      msg: "Cliente encontrado",
      data: Client,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar Cliente por id",
      error,
    });
  }
};
const updateClientById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body)
    //const Client = await Client.updateOne({ _id: id }, req.body);
    const Client = await Client.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Cliente actualizado",
      data: Client,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar el Cliente por id",
      error,
    });
  }
};

const deleteClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const Client = await Client.findByIdAndDelete(id);
    if (!Client) {
      return res.status(404).json({
        msg: "No existe el Cliente",
      });
    }
    return res.json({
      msg: "Cliente borrado",
      data: Client,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar el Cliente por id",
      error,
    });
  }
};

export { getAllClients, createClient, getClientById, updateClientById, deleteClientById };
