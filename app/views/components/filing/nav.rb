module Components
  module Filing
    class Nav < React::Component::Base

      def component_class(level)
        c = (Store.retrieve_item("step") == level )? "active-step" : ""
        d = (Store.retrieve_item("step") > level ) ?  "completed-step" : ""
        e = c + " " + d
      end

      # param :my_param
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method

      before_mount do
        # any initialization particularly of state variables goes here.
        # this will execute on server (prerendering) and client.
      end

      after_mount do
        # any client only post rendering initialization goes here.
        # i.e. start timers, HTTP requests, and low level jquery operations etc.
      end

      before_update do
        # called whenever a component will be re-rerendered
      end

      before_unmount do
        # cleanup any thing (i.e. timers) before component is destroyed
      end

      def render
        div(class: :nav) do
          div do
            div(class: "wizard-steps") do
              div(class: component_class(0)) do
                a(class: :nothing) do
                  span{"1"}
                  text { "Registered Address" }
                end
              end 
              div(class: component_class(1)) do
                a(class: :nothing) do
                  span{"2"}
                  text { "Situation" }
                end
              end  
              div(class: component_class(2)) do
                a(class: :nothing) do
                  span{"3"}
                  text { "Officers" }
                end
              end 
              div(class: component_class(3)) do
                a(class: :nothing) do
                  span{"4"}
                  text { "Capital" }
                end
              end 
              div(class: component_class(4)) do
                a(class: :nothing) do
                  span{"5"}
                  text { "Shareholders" }
                end
              end 
              div(class: component_class(5)) do
                a(class: :nothing) do
                  span{"6"}
                  text { "Submit" }
                end
              end             
            end
          end
          div(class: :row)
        end
      end
    end
  end
end
