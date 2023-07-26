// Require the os and http modules
const os = require('os');
const http = require('http');

// Define a function to format the uptime in days, hours, minutes, and seconds
function formatUptime(seconds) {
  let days = Math.floor(seconds / (24 * 60 * 60));
  let hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((seconds % (60 * 60)) / 60);
  let remainingSeconds = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

// Create a server that responds with an HTML page
http.createServer((req, res) => {
  // Get the system uptime in seconds
  let uptime = os.uptime();
  // Format the uptime using the function
  let formattedUptime = formatUptime(uptime);
  // Write the HTML header and body
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><head><title>PC Uptime</title></head>');
  res.write('<body><h1>PC Uptime</h1>');
  res.write(`<p>The PC has been running for ${formattedUptime}</p>`);
  res.write('</body></html>');
  // End the response
  res.end();
}).listen(8080); // Listen on port 8080

// Log a message to the console
console.log('Server running at http://localhost:8080/');
