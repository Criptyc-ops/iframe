local lapis = require("lapis")
local app = lapis.Application()

app:get("/", function()
  return [[
  <!DOCTYPE html>
  <html>
  <head>
    <title>Lua with HTML</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple Lua script generating an HTML page.</p>
  </body>
  </html>
  ]]
end)

return app
lapis server