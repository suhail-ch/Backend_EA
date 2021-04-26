import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const VacunaSchema = new Schema({
    /* _id: {
        type: String
    }, */
    name: {
        type: String
    },
    description: {
        type: String
    },
    technology: {
        type: String
    },
    date: {
        type: String
    },
});

//Interfaz para tratar respuesta como documento
export interface IVacuna extends Document {
    name: string;
    description: string;
    technology: string;
    date: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IVacuna>('vacuna', VacunaSchema);