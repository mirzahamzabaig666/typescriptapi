//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);
export class ContactController{

    //public contactController: ContactController = new ContactController();
    

public addNewContact (req: Request, res: Response) {                
        let newContact = new Contact(req.body);
    
        newContact.save((err, contact) => {

            //console.log(contact);
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }

    public getcontacts(req:Request,res:Response){
        Contact.find({},(err,contact)=>{
            if(err){
                res.send(err);
            }
            else{
                res.json(contact);
            }
        });
    }
}