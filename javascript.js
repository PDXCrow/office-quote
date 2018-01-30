// Array of quotes and authors
var quotes = [
  ["Do you think doing alcohol is cool?", "Michael Scott"],
  ["Just pretend like we're talking until the cops leave.", "Creed Bratton"],
  ["But on Pretzel Day? I like Pretzel Day.", "Stanley Hudson"],
  ["I am Beyonce, always.", "Michael Scott"],
  ["Dwight doesn't blow anything up and I wear a costume.", "Jim Halpert"],
  ["He said, 'If I'm dead, you guys have been dead for weeks.", "Pam Beesly"],
  ["I hooked up with her on February 13th.", "Ryan Howard"],
  ["I don't talk trash, I talk smack. They're totally different.", "Kelly Kapoor"],
  ["RYAN STARTED THE FIRE!", "Dwight Schrute"],
  ["Dwight, you ignorant slut!", "Michael Scott"],
  ["The worst thing about prison was the dementors.", "Michael Scott"],
  ["I'm hot, you're hot. Let's get it poppin.", "Darryl Philbin"],
  ["Identity theft is not a joke Jim. Millions of families suffer every year!", "Dwight Schrute"],
  ["I'm not superstitious, but I am a little stitious.", "Michael Scott"]
]

function newQuote() {
  // Selects random quote and assigns to quoteDisplay HTML element. Same for authorDisplay
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //var tweetQuote = quotes[randomNumber][0].split(' ').join('%20');
  var tweetQuote = "https://twitter.com/intent/tweet?text=" + '"' + quotes[randomNumber][0] + '"' + " - "
  + quotes[randomNumber][1];
  document.getElementById('quoteDisplay').innerHTML = '"' + quotes[randomNumber][0] + '"';
  document.getElementById('authorDisplay').innerHTML = "- " + quotes[randomNumber][1];
  document.getElementById('link').href = tweetQuote;
  // Build url version of quote to send to twitter
  //document.getElementById("link").href = "this is a new link";
}
//quotes[randomNumber].split(' ').join('%20');
