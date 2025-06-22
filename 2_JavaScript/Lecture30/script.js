let product={
  company:'Nike',
  price:2500,
  avgRating:4.5,
  numberOfRatings:38,
  rating:{
    fiveStar: 10,
    fourStar: 5,
    threeStar:3,
    twoStar:12,
    oneStar:8,
    showRating: function(){
      let totalRating= this.fiveStar+this.fourStar+this.threeStar+this.twoStar+this.oneStar;
      let avarageRating=(5*this.fiveStar+4*this.fourStar+3*this.threeStar+2*this.twoStar+1*this.oneStar)/totalRating;
  console.log('Total Ratings:', totalRating);
  console.log('Avarage Rating', avarageRating);
    }
  }
};

// function showRating(rating){
//   let totalRating= rating.fiveStar+rating.fourStar+ rating.threeStar+rating.twoStar+rating.oneStar;
//   let avarageRating=(5*rating.fiveStar+4*rating.fourStar+3*rating.threeStar+2*rating.twoStar+1*rating.oneStar)/totalRating;
//   console.log('Total Ratings:', totalRating);
//   console.log('Avarage Rating', avarageRating);
// }

// showRating(product.rating);
product.rating.showRating();