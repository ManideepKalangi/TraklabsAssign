import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/routes'

const Namespace='Server';
const router=express();

router.use(express.json());
/** Logging the request */

router.use((req,res,next)=>{
    logging.infolog(Namespace,`Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', ()=>{
        logging.infolog(Namespace,`Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], Status - [${res.statusCode}]`);
    });
    next();
});


/** Routes nothing but API Calls */
router.get('/',(req,res)=>{
    res.send("Hello World......")
});
router.use('/api/v1/traklabs',sampleRoutes);

/** Error Handling */
router.use((req,res,next)=>{
    const error=new Error('Not found');
    
    return res.status(404).json({
        message:error.message
    });
    
});

/** Creating Server */
router.listen(config.server.port,()=>{
    logging.infolog(Namespace,`Server running on ${config.server.hostname}:${config.server.port}`);
});