const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("../utils/jwt");

// Obtener todos los usuarios
router.get("/ObtenerUsuarios", async (req, res) => {
    try {
        const usuarios = await User.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

// Obtener un usuario por ID
router.get("/ObtenerUsuarios/:id", async (req, res) => {  
    try {
      const usuario = await User.findById(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  });

// Crear un nuevo usuario
router.post("/CrearUsuarios", async (req, res) => {
    try {
        const nuevoUsuario = await User.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

// Actualizar un usuario por ID
router.put("/ActualizarUsuarios/:id", async (req, res) => {  
    try {
      const usuarioActualizado = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!usuarioActualizado) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  });

// Eliminar un usuario por ID
router.delete("/EliminarUsuarios/:id", async (req, res) => {  
    try {
      const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
      if (!usuarioEliminado) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  });


  // login 
  router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
 
      const user = await User.findOne({ username });
       
      if (!user) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
     
      const token = jwt.createAccessToken(user);
      res.status(200).json({ message: "Login exitoso", user, token });
    } catch (error) {
      res.status(500).json({ error: "Error al iniciar sesión" });
    }
  });


module.exports = router;