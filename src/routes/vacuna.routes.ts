import {Router} from "express"; 
import VacunaController from '../controllers/vacuna.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', VacunaController.getVacunas);
router.get('/:id', VacunaController.getVacuna);
router.post('/new',VacunaController.newVacuna);
router.put('/update/:id',VacunaController.updateVacuna);

//Exportamos router para usar rutas en app.ts
export default router;