// Microtask queue kya hoti hai?
// => Microtask queue ek special queue hoti hai jisme promises ke callbacks (then/catch/finally) aur process.nextTick() ke callbacks store hote hain. Jab JavaScript event loop run karta hai, to wo pehle microtask queue ko check karta hai aur usme jitne bhi tasks hain unhe execute karta hai, phir macrotask queue ke tasks ko execute karta hai. Iska matlab hai ki microtasks macrotasks se pehle execute hote hain, chahe wo promises ke callbacks ho ya process.nextTick() ke callbacks.

// Macrotask queue kya hoti hai?
// => Macrotask queue ek special queue hoti hai jisme setTimeout, setInterval, setImmediate, I/O operations ke callbacks store hote hain. Jab JavaScript event loop run karta hai, to wo pehle microtask queue ko check karta hai aur usme jitne bhi tasks hain unhe execute karta hai, phir macrotask queue ke tasks ko execute karta hai. Iska matlab hai ki macrotasks microtasks ke baad execute hote hain.
