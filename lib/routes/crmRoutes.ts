import {Request, Response} from "express";
import {ContactController} from "../controller/crmController";

export class Routes { 
    
    public contactController: ContactController = new ContactController();
    
    public routes(app): void {   
        
       // app.route('/')
        //.get((req: Request, res: Response) => {            
          //  res.status(200).send({
            //    message: 'GET request successfulll!!!!'
            //})
        //})
        
        // Contact 
       // app.route('/contact') 
        // GET endpoint 
       // .get((req: Request, res: Response) => {
        // Get all contacts            
         //   res.status(200).send({
                message: 'GET request successfulll!!!!'
           // })
        //}) 
          // Contact 
          app.route('/contact')
          .get(this.contactController.getcontacts);       
        // POST endpoint
        app.route('/contact')
        .post(this.contactController.addNewContact);
        
    }
}