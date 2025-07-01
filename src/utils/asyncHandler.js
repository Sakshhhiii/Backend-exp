 const asyncHandler =(requestHandler)=>{
    (req, res , next)=>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>next(err))
    }
 }

export {asyncHandler}


// higher Order Functions =====> that can accept function as an argument also can return the function 

// passing function into a function
// const asyncHandler =(fn)=> async(req, res, next) =>{
//     try {
//           await fn(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }