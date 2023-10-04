export const renderStars = (rating) => {
  let stars= [];
  
  for (let i= 0; i < rating; i++){
    if (i < rating){
      stars.push(i);
    }
  }
  
  return stars;
}