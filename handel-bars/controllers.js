const axios = require("axios");

const getRoute = async (req, res) => {
  // http://localhost:8080/
  // http://localhost:8080/id
  // http://localhost:8080/id?phone=value

  const { id } = req.params;
  const { phone, fullName } = req.query;
  try {
    const { data: demoData } = await axios.get(
      "https://www.boredapi.com/api/activity"
    );

    const sendBody = {
      routeName: "GET",
      params: {
        fullName: fullName,
        phone: phone,
        id: id ? id : "Without Params",
        demoData,
      },
    };
    // res.send(sendBody);
    res.render("handel-bar.hbs", {
      result: fullName + " " + phone + " " + demoData,
    });
  } catch (err) {
    console.log(err);
  }
};

const postRoute = (req, res) => {
  const { data } = req.body;

  // {
  // 	"routeName": "POST",
  // 	"body": {
  // 		"data": {
  // 			"fullName": "toam cohen"
  // 		}
  // 	}
  // }

  const sendBody = {
    routeName: "POST",
    body: {
      data: data,
    },
  };

  // res.send(sendBody);
  res.render("handel-bar.hbs", { result: data });
};

const putRoute = (req, res) => {
  const { data, id } = req.body;

  const sendBody = {
    routeName: "PUT",
    body: {
      data: data,
      id: id,
    },
  };

  res.render("handel-bar.hbs", { result: data });
  // res.send(sendBody);
};

const deleteRoute = (req, res) => {
  const { data } = req.body;

  const sendBody = {
    routeName: "DELETE",
    body: {
      data: data,
    },
  };

  res.render("handel-bar.hbs", { result: data });
  // res.send(sendBody);
};

module.exports = {
  getRoute,
  postRoute,
  putRoute,
  deleteRoute,
};
