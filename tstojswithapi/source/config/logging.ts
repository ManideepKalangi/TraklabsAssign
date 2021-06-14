const getTimeStamp=():string=>{
    return new Date().toISOString();
};


const infolog=(namespace: string,message: string,object?: any)=>{
    if(object){
        console.log(`[${getTimeStamp}] [INFO] [${namespace}] ${message}`,object);
    }
    else{
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const errorlog=(namespace: string,message: string,object?: any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,object);
    }
    else{
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

const warnlog=(namespace: string,message: string,object?: any)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,object);
    }
    else{
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const debuglog=(namespace: string,message: string,object?: object)=>{
    if(object){
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,object);
    }
    else{
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default{
    infolog,
    errorlog,
    warnlog,
    debuglog
}