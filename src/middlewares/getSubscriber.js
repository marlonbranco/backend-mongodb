const Subscriber = require("../schemas/Subscriber");

async function getSubscriber(request, response, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(request.params.id);
    if (subscriber === null) {
      return response.status(404).json({ message: "Cannot find subscriber." });
    }
  } catch (err) {
    response.status(500).json({ message: err.message });
  }

  response.subscriber = subscriber;
  next();
}

module.exports = { getSubscriber };
