// const {SignUpSchema,LoginSchema}=require('../validator/validator');
// const SignUpValidation=(req,res,next)=>{
//     const {error}=SignUpSchema.validate(req.body);
//     if(error){
//         return res.status(400).send('error').json({message:error.details[0].message});
//     }
//     next();
// }
// const LoginValidation=(req,res,next)=>{
//     const {error}=LoginSchema.validate(req.body);
//     if(error){
//         return res.status(400).json({message:error.details[0].message});
//     }
//     next(); 
// }
// module.exports={SignUpValidation,LoginValidation};



// module.exports=(req,res,next)=>{
//     console.log(`request received:${req.method}${req.url}`);
//     next();
// };