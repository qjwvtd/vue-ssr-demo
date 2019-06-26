// const axios = require("axios");
const express = require("express");
const router = express.Router();
// let baseURL = "http://www.b91.com:4101";
// if (process.env.NODE_ENV === "development") {
//     baseURL = "http://172.16.0.248:4106";
// } else if (process.env.NODE_ENV === "production") {
//     baseURL = "http://www.b91.com:4101";
// }
/**
 ** 移动设备拦截，
 */
router.get('/',function(req, res,next){
	console.log('welcome to my app');
	const deviceAgent = req.headers["user-agent"].toLowerCase();
	const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID){
		res.redirect(302,'/mobile');
		return;
	}
	next();
});

// router.post("/mylogin", (req, res) => {
//   axios({
//     url: baseURL + "/customer/login/loginUser",
//     method: "POST",
//     data: {
//       cellphone: req.body.cellphone,
//       password: req.body.password,
//       typeCode: req.body.typeCode,
//       origin:'3'
//     }
//   })
//     .then(function(data) {
//       if (data && !data.status) {
//         req.session.userData = data.data;
//       }
//       res.send(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

// router.post("/myfastLogin", (req, res) => {
//   axios({
//     url: baseURL + "/customer/login/quickLogin",
//     method: "POST",
//     data: {
//       cellphone: req.body.cellphone,
//       validateCode: req.body.authCode,
//       typeCode: req.body.typeCode,
//       origin: "3"
//     }
//   })
//     .then(function(data) {
//       console.log(data);
//       if (data && !data.status) {
//         req.session.userData = data.data;
//       }
//       res.send(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

module.exports = router;
