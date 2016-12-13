module Components
  module Filing
    class Header < React::Component::Base

      param :company
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
        div(class: :mainHeader) do
          div(class: "small-12 columns") do
            h2 do
              b {params.company[:name]}
            end

            p do
              b {"Registered Company Number:" }
              span {params.company[:rc_number]}
            end

            p do
              A 
              span() {"Private Limited Company "} 
              text {"incorporated on "}
              span() {"4 July 2003"}
              br
            end
          end


        end
      end
    end
  end
end
