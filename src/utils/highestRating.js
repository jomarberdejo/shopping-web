
export const highestRating= (data) => {
   const highest = Math.max(...data.map(item => item.rating.rate));
   
   return highest;
}