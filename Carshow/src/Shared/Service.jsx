const FormatResult=(resp)=>{
    let result=[];
    resp.forEach((item)=>{
        const listingId=item.carListing?.id;
        if(!result[listingId]){
            result[listingId]={
                car:item.carListing,
            }
        }
    }) 
}