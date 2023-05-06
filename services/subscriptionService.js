import Subscription  from '../models/subscription';
import {getTripById} from "./tripService";


async function subscribeToTrip(userId, tripId) {
  try {
    const trip = getTripById(tripId)
    const countUser = countSubscribedUsers(tripId)
    if (countUser >= trip.registrations){
      return {"error": "Subscription is not allowed"};
    }
    const subscription = await Subscription.findOneAndUpdate(
      { user: userId, trip: tripId },
      { user: userId, trip: tripId },
      { upsert: true, new: true }
    );
    return subscription;
  } catch (error) {
    console.error(error);
    throw new Error('Error subscribing to trip');
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
