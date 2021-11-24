const { response, request } = require("express");
// const { peticiones } = require("../models/peticiones");
const axios = require("axios");

const obtener = async (req = request, res = response) => {
    const { chatbot_code } = req.query;
    const { destinations } = req.body;
    try {
        const instance = axios.create({
          baseURL: `http://190.210.88.30/neoapi/webservice.asmx/ExecuteTask01?idTask=${chatbot_code}&param1=${JSON.stringify(
            req.body
          )}`,
        });

        const resp = await instance.get();
        const {data} = resp;
        console.log("data", data);
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
    obtener,
};
