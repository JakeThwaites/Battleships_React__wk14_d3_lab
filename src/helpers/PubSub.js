class PubSub {
 static publish(channel, payload) {
   const event = new CustomEvent(channel, {
     detail: payload
 });
  console.log("asdfasd");
   document.dispatchEvent(event);
 }

 static subscribe(channel, callback) {
   document.addEventListener(channel, callback);
 }
};


export default PubSub;
