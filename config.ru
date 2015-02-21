use Rack::Static,
  :urls => ["/assets"]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html'
    },
    File.open('index.html', File::RDONLY)
  ]
}
