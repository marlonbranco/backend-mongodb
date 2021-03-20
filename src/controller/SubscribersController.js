const Subscriber = require("../schemas/Subscriber");

class SubscribersController {
  async index(request, response) {
    try {
      const subscribers = await Subscriber.find();
      response.status(200).json(subscribers);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  }

  async show(request, response) {
    response.json(response.subscriber);
  }
  async create(request, response) {
    console.log(request.body);
    const { name, subscribedToChannel } = request.body;
    const subscriber = new Subscriber({
      name,
      subscribedToChannel,
    });
    try {
      const newSubscriber = await subscriber.save();
      response.status(201).json(newSubscriber);
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }
  async update(request, response) {
    if (request.body.name != null) {
      response.subscriber.name = request.body.name;
    }
    if (request.body.subscribedToChannel != null) {
      response.subscriber.subscribedToChannel =
        request.body.subscribedToChannel;
    }
    try {
      const updatedSubscriber = await response.subscriber.save();
      response.status(200).json(updatedSubscriber);
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }
  async delete(request, response) {
    try {
      response.subscriber.remove();
      response.json({ message: "Deleted subscriber" });
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  }
}

const subscribersController = new SubscribersController();

module.exports = subscribersController;
