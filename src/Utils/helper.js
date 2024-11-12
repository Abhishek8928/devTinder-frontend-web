

function timeAgo(date) {
    const now = new Date();
    const diffInMilliseconds = now - new Date(date); // Get the time difference in milliseconds
  
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000); // Convert milliseconds to seconds
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Convert seconds to minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // Convert minutes to hours
    const diffInDays = Math.floor(diffInHours / 24); // Convert hours to days
  
    // Check if the time is within the last minute
    if (diffInSeconds < 60) {
      return 'A few seconds ago';
    }
  
    // Check if the time is within the last hour
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }
  
    // Check if the time is within the last 24 hours
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }
  
    // Check if the time is within the last 30 days
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }
  
    // If it's older than a month, return the formatted date
    return new Date(date).toLocaleDateString();
  }

export default timeAgo;