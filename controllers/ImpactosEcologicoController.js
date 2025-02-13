const express = require("express");
const router = express.Router();
const ImpactoEcologico = require("../models/ImpactoEcologicoModels");

// Obtener todos los impactos ecológicos
router.get("/ObtenerImpactosEcologicos", async (req, res) => {
  try {
    const impactosE = await ImpactoEcologico.find();
    res.status(200).json(impactosE);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los impactos ecológicos" });
  }
});

// Obtener un impacto ecológico por ID
router.get("/ObtenerImpactosEcologicos/:id", async (req, res) => {  
    try {
      const impactoE = await ImpactoEcologico.findById(req.params.id);
      if (!impactoE) {
        return res.status(404).json({ error: "Impacto ecológico no encontrado" });
      }
      res.status(200).json(impactoE);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el impacto ecológico" });
    }
  });

// Crear un nuevo impacto ecológico
router.post("/CrearImpactosEcologicos", async (req, res) => {
    try {
      console.log("📩 Datos recibidos en el backend:", req.body); // 🔍 Verifica qué llega
  
      if (!req.body.Impacto || !req.body.TipoDeMedida) {
        return res.status(400).json({ error: "Faltan campos requeridos" });
      }
  
      const nuevoImpactoE = new ImpactoEcologico(req.body);
      await nuevoImpactoE.save();
      res.status(201).json(nuevoImpactoE);
    } catch (error) {
      console.error("🔴 Error al crear el impacto ecológico:", error);
      res.status(500).json({ error: "Error al crear el impacto ecológico" });
    }
  });

  
// Actualizar un impacto ecológico por ID
router.put("/ActualizarImpactosEcologicos/:id", async (req, res) => {  
    try {
      const impactoEActualizado = await ImpactoEcologico.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!impactoEActualizado) {
        return res.status(404).json({ error: "Impacto ecológico no encontrado" });
      }
      res.status(200).json(impactoEActualizado);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el impacto ecológico" });
    }
  });


  
// Eliminar un impacto ecológico por ID
router.delete("/EliminarImpactosEcologicos/:id", async (req, res) => {  
    try {
      const impactoEEliminado = await ImpactoEcologico.findByIdAndDelete(req.params.id);
      if (!impactoEEliminado) {
        return res.status(404).json({ error: "Impacto ecológico no encontrado" });
      }
      res.status(200).json({ message: "Impacto ecológico eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el impacto ecológico" });
    }
  });

module.exports = router;
