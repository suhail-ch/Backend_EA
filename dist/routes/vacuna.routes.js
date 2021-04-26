"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vacuna_controller_1 = __importDefault(require("../controllers/vacuna.controller"));
//Router nos permite gestionar rutas de la API
const router = express_1.Router();
/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/
router.get('/all', vacuna_controller_1.default.getVacunas);
router.get('/:id', vacuna_controller_1.default.getVacuna);
router.post('/new', vacuna_controller_1.default.newVacuna);
router.put('/update/:id', vacuna_controller_1.default.updateVacuna);
//Exportamos router para usar rutas en app.ts
exports.default = router;
