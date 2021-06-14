import {Request, Response, NextFunction} from 'express';
import logging from '../config/logging';
const queries= require('../traklabs/query');
const pool=require('../db')

const Namespace='Controller'
const samplehealthcheck=(req: Request,res: Response,next: NextFunction)=>{
    logging.infolog(Namespace,`Sample health check route called..`);
    return res.status(200).json({
        message:'pong'
    });
};

/** Getting All User Values from DB */
const getUsers=(req: Request,res: Response)=>{
    logging.infolog(Namespace,`All Users API Called`);
    pool.query(queries.getAllUsers,(error: Error,results: any)=>{
        if(error){
            logging.errorlog(Namespace,error.message);
        }
        res.status(200).json(results.rows);
    });
};

const getUserWithID=(req: Request,res: Response)=>{
    logging.infolog(Namespace,`All Users API Called`);
    const id= parseInt(req.params.id);
    pool.query(queries.getUserWithID,[id],(error: Error,results: any)=>{
        if(error){
            logging.errorlog(Namespace,error.message);
        }
        res.status(200).json(results.rows);
    });
};

const postAddUser=(req: Request,res: Response)=>{
    logging.infolog(Namespace,'Data Entry to Users table');
    const {uname,upass,uemail,uphone,udob}=req.body;
    pool.query(queries.EmailCheck,[uemail],(error:Error, results: any)=>{
        if(error){
            logging.errorlog(Namespace,error.message);
        }
        if(results.rows.length){
            res.send("Email Already Exists...");
        }
        else{
            pool.query(queries.AddUser,[uname,upass,uemail,uphone,udob],(error1: Error,results1: any)=>{
                if(error1) logging.errorlog(Namespace,error1.message);
                res.status(201).send('Student Added Successfully...');
                logging.infolog(Namespace,`${uname} account created successfully on ${new Date().toISOString}`);
            });
        }
    });
};

const DeleteUserwithID=(req: Request,res: Response)=>{
    logging.infolog(Namespace,`Delete User using id`);
    const id= parseInt(req.params.id);
    pool.query(queries.getUserWithID,[id],(error:Error,results:any)=>{
        if(error) logging.errorlog(Namespace,error.message);
        const NoRecordfound= !results.rows.length;
        if(NoRecordfound){
            res.send(`User with ${id} doesnt exist in our users database, So it is not possible to delete user...`);
        }
    });
    pool.query(queries.DeleteUser,[id],(error: Error,results: any)=>{
        if(error) logging.errorlog(Namespace,error.message);
        res.status(200).send(`User with ID: ${id}, deletd from users Database...`);
    });
};

const UpdateUserPasswithID=(req: Request,res: Response)=>{
    const [upass]=req.body;
    const id=parseInt(req.params.id);
    pool.query(queries.getUserWithID,[id],(error:Error,results: any)=>{
        if(error)   logging.errorlog(Namespace,error.message);
        if(!results.rows.length)    res.send(`No Data found with ID: ${id}. Check with correct ID..`);
    });
    pool.query(queries.UpdateUserPass,[upass,id],(error: Error,results: any)=>{
        if(error)   logging.errorlog(Namespace,error.message);
        res.status(200).send(`Data Updated Successfully for ID: ${id}.`);
    });
};

export default {
    samplehealthcheck,
    getUsers,
    getUserWithID,
    postAddUser,
    DeleteUserwithID,
    UpdateUserPasswithID,
}
