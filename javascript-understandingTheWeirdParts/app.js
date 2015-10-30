// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');


// BE SURE TO CLICK IN BROWSER WHEN WAITING THE THREE SECOND PAGE TO LOAD
//the click console.logs the click last......it's explained in the video. 
// the page does everything in it's stack....and then looks to the EVENT QUEUE to see 
 // if anything happened....a click happenend...so it tells us that after