const express = require('express');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://localhost';
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react/dist/')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react-dom/dist/')));

app.listen(port, () => {
  console.log(`Express server listening on ${host}:${port}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJIT1NUIiwicGF0aCIsImZzIiwiYXBwIiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLE1BQU1DLE9BQU9DLFFBQVFDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQztBQUNBLE1BQU1DLE9BQU9ILFFBQVFDLEdBQVIsQ0FBWUcsSUFBWixJQUFvQixrQkFBakM7QUFDQSxNQUFNQyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLE1BQU1RLEtBQUtSLFFBQVMsSUFBVCxDQUFYOztBQUdBLE1BQU1TLE1BQU1WLFNBQVo7O0FBR0FVLElBQUlDLEdBQUosQ0FBUVgsUUFBUVksTUFBUixDQUFlSixLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsZ0JBQXJCLENBQWYsQ0FBUjtBQUNBSixJQUFJQyxHQUFKLENBQVEsVUFBUixFQUFvQlgsUUFBUVksTUFBUixDQUFlSixLQUFLSyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsMkJBQXJCLENBQWYsQ0FBcEI7QUFDQUosSUFBSUMsR0FBSixDQUFRLFVBQVIsRUFBb0JYLFFBQVFZLE1BQVIsQ0FBZUosS0FBS0ssSUFBTCxDQUFVQyxTQUFWLEVBQXFCLCtCQUFyQixDQUFmLENBQXBCOztBQWFBSixJQUFJSyxNQUFKLENBQVdiLElBQVgsRUFBaUIsTUFBTTtBQUNyQmMsVUFBUUMsR0FBUixDQUFhLCtCQUE4QlgsSUFBSyxJQUFHSixJQUFLLEVBQXhEO0FBQ0QsQ0FGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlICgnZXhwcmVzcycpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0J1xuY29uc3QgcGF0aCA9IHJlcXVpcmUgKCdwYXRoJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUgKCdmcycpO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvZGlzdCcpKSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvbm9kZV9tb2R1bGVzL3JlYWN0L2Rpc3QvJykpKTtcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Rpc3QvJykpKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uICR7aG9zdH06JHtwb3J0fWApXG59KSJdfQ==