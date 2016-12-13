class DisplayItem < React::Component::Base 
  param :name 
  param :value
  def render
puts "rerendering #{params.name}, #{params.value}"
    div do 
      "#{params.name}: #{params.value}".span
      button { "delete!"}.on(:click) { Store.delete_item(params.name) }
    end
  end
end