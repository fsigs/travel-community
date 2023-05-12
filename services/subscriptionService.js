import Subscription  from '../models/subscription';
import {getTripById} from "./tripService";


async function subscribeToTrip(userId, tripId) {
  try {
    const trip = await getTripById(tripId)
    const countUsers = await countSubscribedUsers(tripId)
    if (countUsers >= trip.registrations){
      return {"error": "Subscription is not allowed since this trip is full."};
    }
    const subscriptionUpdated = await Subscription.findOneAndUpdate(
      { user: userId, trip: tripId },
      { user: userId, trip: tripId },
      { upsert: true, new: true }
    ).populate('trip');
    if (!subscriptionUpdated) {
      try {
        const subscriptionCreated = await Subscription.create({
          user: userId,
          trip: tripId,
        }).populate('trip');
        return subscriptionCreated;
      } catch (error) {
        console.error(error);
        throw new Error('Error creating subscription');
      }
    } else {
      return subscriptionUpdated;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error updating subscription');
  }
}

async function unsubscribeFromTrip(userId, tripId) {
  try {
    const subscription = await Subscription.findOneAndDelete({ user: userId, trip: tripId });
    return subscription;
  } catch (error) {
    console.error(error);
    throw new Error('Error unsubscribing from trip');
  }
}

async function countSubscribedUsers(tripId) {
  try {
    const count = await Subscription.countDocuments({ trip: tripId });
    return count;
  } catch (error) {
    console.error(error);
    throw new Error('Error counting subscribed users');
  }
}

module.exports = { subscribeToTrip, unsubscribeFromTrip, countSubscribedUsers};
