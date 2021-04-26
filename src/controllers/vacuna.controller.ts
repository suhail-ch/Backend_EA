import { Request, Response} from "express";
import Vacuna from "../models/vacuna"

const getVacunas = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Vacuna.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getVacuna = async (req: Request, res: Response) => {
    try{
        const results = await Vacuna.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const newVacuna = async (req: Request, res: Response) => {
    try{
    let vacuna = new Vacuna({
        "name" : req.body.name,
        "description" : req.body.description,
        "technology" : req.body.technology,
        "date" : req.body.date
    });
    vacuna.save().then((data) => {
        return res.status(201).json(data);
    });
    } catch(err) {
        return res.status(500).json(err);
    }
}

//Actualizar name/address student segun id
function updateVacuna (req: Request, res: Response){
    const id: string = req.params.id;
    const name: string = req.body.name;
    const address: string = req.body.address;
    const phones: number = req.body.phones;

    Vacuna.update({"_id": id}, {$set: {"name": name, "address": address}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default {getVacunas, getVacuna, newVacuna, updateVacuna};