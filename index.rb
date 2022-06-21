require 'sinatra'
require 'todo'
require "json"

configure do
  set :bind, '0.0.0.0'
end

todos = [
  Todo.new("7時に起床する", 3),
  Todo.new("学校に行く", 3),
  Todo.new("開発をする", 2),
  Todo.new("22時に就寝する", 1),
]

get '/todos' do
  JSON.parse(todos)
end