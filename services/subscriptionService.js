import Subscription  from '../models/subscription';

async function subscribeToTrip(userId, tripId) {
  try {
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

module.exports = { subscribeToTrip, unsubscribeFromTrip };
