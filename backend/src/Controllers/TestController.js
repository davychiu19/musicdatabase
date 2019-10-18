import DemoSchema from "../Models/TestModel";

export default {
  CreateDemoSchema: async (req, res, next) => {
    try {
      console.log("I AM A HIT");
      const success = await DemoSchema.create(req.body);
      if (!success)
        return res.send({ status: false, msg: "USER REGISTRATION FAILED" });
      else
        return res.send({ status: true, msg: "USER REGISTERED SUCCESSFULLY" });
    } catch (err) {
      return res.send({ status: false, msg: err.message });
    }
  },
  GetAll: async (req, res, next) => {
    try {
      console.log("I AM GET HIT");
      DemoSchema.find((err, docs) => {
        if (err) next(err);
        else res.send(docs);
      });
    } catch (error) {
      return res.send({ status: false, msg: err.message });
    }
  }
};
