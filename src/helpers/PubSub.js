class PubSub {
 static publish(channel, payload) {
   const event = new CustomEvent(channel, {
     detail: payload
 });
   document.dispatchEvent(event);
 }

 static subscribe(channel, callback) {
   document.addEventListener(channel, callback);
 }
};


module.exports = PubSub;
