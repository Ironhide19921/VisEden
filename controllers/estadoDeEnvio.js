const { response, request } = require("express");
// const { peticiones } = require("../models/peticiones");
const axios = require("axios");

const estadoDeEnvio = async (req = request, res = response) => {
    const { chatbot_code } = req.query;
    const { destinations } = req.body;
    try {
        const instance = axios.create({
          baseURL: `http://190.210.88.30/neoapi/webservice.asmx/ExecuteTask01?idTask=${chatbot_code}&param1=${JSON.stringify(
            req.body
          )}`,
        });
        // console.log(
        //   "url:",
        //   `http://190.210.88.30/neoapi/webservice.asmx/ExecuteTask01?idTask=${JSON.stringify(
        //     chatbot_code
        //   )}&param1=${JSON.stringify(destinations)}`
        // );
        const resp = await instance.get();
        const {data} = resp;
        console.log("data", data);
        console.log("param jon id", req.params.job_id);
        res.json({ data });
      } catch (error) {
        // console.log(error);
        // const {data} = error;
        console.log("error", error);
        res.json({
            error,
        });
      }
};



module.exports = {
    estadoDeEnvio,
};
