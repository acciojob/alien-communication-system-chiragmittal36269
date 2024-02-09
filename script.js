//your JS code here. If required.
console.log("Aliens have arrived on Earth!");

// Function to simulate a microtask
function processMicrotask(task) {
  console.log(`Processing microtask: ${task}`);
}

// Function to simulate a macrotask
function processMacrotask(task) {
  console.log(`Processing macrotask: ${task}`);
}

// Queue for microtasks
const microtaskQueue = [];

// Queue for macrotasks
const macrotaskQueue = [];

// Function to add a microtask to the queue
function addMicrotask(task) {
  microtaskQueue.push(task);
}

// Function to add a macrotask to the queue
function addMacrotask(task) {
  macrotaskQueue.push(task);
}

// Event loop simulation
function eventLoop() {
  // Process microtasks first
  while (microtaskQueue.length > 0) {
    const microtask = microtaskQueue.shift();
    processMicrotask(microtask);
  }

  // Process one macrotask in each iteration
  if (macrotaskQueue.length > 0) {
    const macrotask = macrotaskQueue.shift();
    processMacrotask(macrotask);
  }

  // Continue the event loop
  if (microtaskQueue.length > 0 || macrotaskQueue.length > 0) {
    setTimeout(eventLoop, 0);
  } else {
    console.log("Communication with aliens complete!");
  }
}

// Example tasks sent by aliens
addMicrotask("Microtask 1");
addMicrotask("Microtask 2");
addMacrotask("Macrotask 1");
addMicrotask("Microtask 3");
addMacrotask("Macrotask 2");
addMicrotask("Microtask 4");
addMacrotask("Macrotask 3");

// Start the event loop
eventLoop();