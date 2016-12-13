module Components
  module Filing
    class Main < React::Component::Base

      param :company
      param :officers
      param :shareholders

      def stepper(val)
        state.step! val
      end
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method

      before_mount do
        state.step! 1
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
        div do
          hr class: :noborder
          if (state.step < 6) 
            button(type: :button, class: "btn button action right") { "Next" }.on(:click) do
              state.step! state.step + 1
              Store.add_item("step", (Store.retrieve_item("step") + 1))             
            end
          end
          if (state.step > 1 ) 
            button(type: :button, class: "btn button action right") { "Back" }.on(:click) do
              state.step! state.step - 1
              Store.add_item("step", (Store.retrieve_item("step") - 1))
            end
          end  
          button(type: :button, class: "btn button alert right") { "Cancel" }.on(:click) do
            alert("take back to home")
          end


          hr class: :noborder
          case state.step

          when 1
            Address(company: params.company)
          when 2
            Location(company: params.company)
          when 3
            Officers(company: params.company, officers: params.officers)
          when 4
            Capital(company: params.company)           
          when 5
            Shareholders(company: params.company, shareholders: params.shareholders)
          when 6
            Submit(stepper: method(:stepper).to_proc, company: params.company)
          when 7
            Remita()
          else 
            Address()
          end 
        end
      end
    end
  end
end
