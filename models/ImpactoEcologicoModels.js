const mongoose = require("mongoose");

const impactoEcologicoSchema = new mongoose.Schema(
    {
        Impacto: { type: String, required: true},
        TipoDeMedida: {type: String, required: true},
        FaseConstruccion: {type: String, required: true},
        FaseOperacion: {type: String, required: true},
        FaseDesmantelamiento: {type: String, required: true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

module.exports = mongoose.model("ImpactoEcologico", impactoEcologicoSchema);