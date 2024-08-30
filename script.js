var arr = [
    {dp: "https://media.istockphoto.com/id/1182740923/photo/beautiful-woman.jpg?s=612x612&w=0&k=20&c=JT_lpgBKknFmL31PMTtQgeQFi5gytCVSV2XRsNlZHzM=",story:"https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://media.istockphoto.com/id/1273427567/photo/young-girl-in-white-dress-enjoying-the-beautiful-waterfall-view-freedom-and-travel.jpg?s=612x612&w=0&k=20&c=QohtZa28IF4RpfQA0FPdnCYqyo94SlIrcqRAUprnBos=",story: "https://media.istockphoto.com/id/1220990350/photo/travel-image-traveler-look-on-the-mountain-lake-travel-and-active-life-concept-adventure-and.jpg?s=612x612&w=0&k=20&c=j24lYeD6FOokWG1gRsYWr2k5U-_uaIH_6V8VQUpkvPY="},
    {dp: "https://media.istockphoto.com/id/1352070942/photo/caucasian-mature-middle-aged-businesswoman-architect-engineer-working-on-laptop-holding.jpg?s=612x612&w=0&k=20&c=44-ymuRKVD06rC9q3nVBNDs7Qcbc4_slocCpvCuhLB4=",story: "https://media.istockphoto.com/id/1473866188/photo/sunny-office-and-a-tidy-desk-with-open-laptop.jpg?s=612x612&w=0&k=20&c=sZ-8LigHbXleH9KlyDsO5x9JVVwdGoGZisMfTR3gEUQ="},
    {dp: "https://media.istockphoto.com/id/619265078/photo/fashionable-woman-texting-outdoors.jpg?s=612x612&w=0&k=20&c=wVmiCOD-aLz8dZVj_ZsyK3MQjzOgqXw9KBxgdC5mNnQ=",story: "https://media.istockphoto.com/id/497038029/photo/travel.jpg?s=612x612&w=0&k=20&c=CtRm5lsQ7kKb-83_2xI-HUg9XKMJG6MzZHIhWtPnWuE="}
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function(elem, idx) {
    clutter += `
        <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="" >
        </div>
    `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    var fullScreen = document.querySelector("#full-screen");
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function() {
        fullScreen.style.display = "none";
    }, 3000);
});
