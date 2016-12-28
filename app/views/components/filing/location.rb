module Components
  module Filing
    class Location < React::Component::Base

      def valid_situation_input?
        state.sit_address.present? && state.sit_city.present? && state.sit_state.present?
      end

      def reset_situation_state
        state.location_update! 0
        state.sit_address! ""
        state.sit_address_2! ""
        state.sit_city! ""
        state.sit_state! ""
      end

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
        state.location_update! 0
        state.sit_address! Store.retrieve_item("sit_address")
        state.sit_address_2! Store.retrieve_item("sit_address_2")
        state.sit_city! Store.retrieve_item("sit_city")
        state.sit_state! Store.retrieve_item("sit_state")        
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
          div(class: "small-12 ") do
            div(id: "section-pane", class: "small-12 columns") do
              div(class: "small-12 large-4 medium-4 collapse columns") do
                if (state.location_update == 0) 
                  button(type: :button, class: "btn button action inner") { "Update Situation" }.on(:click) do
                    state.location_update! 1
                  end
                end


                p {"Situation of Registers of Members & Debenture Holders (or any part of such registers) if other than the registered
office of the company"}

                
                p do
                  
                  if (params.company[:situation_address].present?)
                    span  {params.company[:name]}
                    br
                    span {params.company[:situation_address]}
                    if (params.company[:situation_address_2].present?)
                      br
                      span {params.company[:situation_address_2]}
                    end
                    br
                    span {params.company[:situation_city]}
                    br
                    span {params.company[:situation_state]}                   
                  else
                    span  {params.company[:name]}
                    br
                    span {params.company[:registered_office_address]}
                    if (params.company[:registered_office_address_2].present?)
                      br
                      span {params.company[:registered_office_address_2]}
                    end
                    br
                    span {params.company[:registered_office_city]}
                    br
                    span {params.company[:registered_office_state]}
                  end
                end
                if (state.location_update == 1 || state.sit_address.present?) 
                  hr
                  b {"New Situation Address"}
                  br
                  span {state.sit_address}
                  if (state.sit_address_2.present?)
                    br
                    span {state.sit_address_2}
                  end
                  br
                  span {state.sit_city}
                  br
                  span {state.sit_state}
                elsif (Store.retrieve_item("reg_address").present?)
                  hr
                  b {"UPDATED TO NEW REGISTERED ADDRESS"}
                  br
                  span  {params.company[:name]}
                  br
                  span {Store.retrieve_item("reg_address")}
                  if (Store.retrieve_item("reg_address_2").present?)
                    br
                    span {Store.retrieve_item("reg_address_2")}
                  end
                  br
                  span {Store.retrieve_item("reg_city")}
                  br
                  span {Store.retrieve_item("reg_state")} 
                end


                hr class: :noborder
              end
              div(class: "small-12 large-4 medium-4 collapse columns") do
                if (state.location_update == 1) 
                  div do
                    text {"Situation Address *"}
                    input(class: :handle, type: :text, placeholder: "Situation Address", value: state.sit_address).on(:change) do |e|
                      state.sit_address! e.target.value
                    end
                    input(class: :handle, type: :text, placeholder: "Situation Address 2", value: state.sit_address_2).on(:change) do |e|
                      state.sit_address_2! e.target.value
                    end
                    text {"Situation City *"}
                    input(class: :handle, type: :text, placeholder: "Situation City", value: state.sit_city).on(:change) do |e|
                      state.sit_city! e.target.value
                    end
                    text {"Situation State *"}
                    input(class: :handle, type: :text, placeholder: "Situation State", value: state.sit_state).on(:change) do |e|
                      state.sit_state! e.target.value
                    end

                    div do
                      button(type: :button, class: "btn button action") { "Save" }.on(:click) do
                        Store.add_item("sit_address", state.sit_address)
                        Store.add_item("sit_address_2", state.sit_address_2)
                        Store.add_item("sit_city", state.sit_city)
                        Store.add_item("sit_state", state.sit_state)
                        state.location_update! 0
                      end if valid_situation_input?
                      button(type: :button, class: "btn button action inner") { "Discard" }.on(:click) do
                        reset_situation_state
                      end
                    end                    
                  end
                end                
              end
              div(class: "small-12 large-4 medium-4 collapse columns") do 
                div(style: {background: :orange}) do
                  h3 {"Help"}.b
                end
              end               
             
            end
          end
        end
      end
    end
  end
end
