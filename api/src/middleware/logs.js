const logRequest = (req,res,next)=>{
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.getHeader('Content-Type','application/json');
    console.log('Terjadi request ke PATH: ',req.path);
    console.log(`Terjadi request ke PATH: ${req.path} | HTTP METHOD: ${req.method}`);
    next()
}

module.exports = {logRequest}