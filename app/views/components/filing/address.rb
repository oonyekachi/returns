module Components
  module Filing
    class Address < React::Component::Base

      def valid_address_input?
        state.reg_address.present? && state.reg_city.present? && state.reg_state.present? && state.reg_zone.present?
      end

      param :company
      param :help
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method



      before_mount do
        state.address_update! 0
        state.reg_address! Store.retrieve_item("reg_address")
        state.reg_address_2! Store.retrieve_item("reg_address_2")
        state.reg_city! Store.retrieve_item("reg_city")
        state.reg_state! Store.retrieve_item("reg_state")
        state.reg_po! Store.retrieve_item("reg_po")
        state.reg_zone! Store.retrieve_item("reg_zone")
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
                if (state.address_update == 0) 
                  button(type: :button, class: "btn button action inner") { "Update Address" }.on(:click) do
                    state.address_update! 1
                  end
                end

                
                p do
                  span  {params.company[:name]}
                  br
                  span {params.company[:registered_office_address]}
                  if (params.company[:registered_office_address_2].present?)
                    br
                    span {params.company[:registered_office_address_2]}
                  end
                  br
                  span {params.company[:registered_office_city]}
                  if (params.company[:registered_office_po])
                    br
                    span {params.company[:registered_office_po]}
                  end
                  br
                  span {params.company[:registered_office_state]}
                  br
                  "Zonal Office - "
                  span {params.company[:zonal_office]}
                end
                if (state.address_update == 1 || state.reg_address.present?) 
                  hr
                  h5 {"New Registered Address"}
                  span  {params.company[:name]}
                  br
                  span {state.reg_address}
                  if (state.reg_address_2.present?)
                    br
                    span {state.reg_address_2}
                  end
                  br
                  span {state.reg_city}
                  if (state.reg_po.present?)
                    br
                    span {state.reg_po}
                  end
                  br
                  span {state.reg_state}
                  br
                  "Zonal Office - "
                  span {state.zonal_office}
                end
                hr class: :noborder
              end
              div(class: "small-12 large-4 medium-4 collapse columns") do
                if (state.address_update == 1) 
                  div do
                    text {"Registered Office Address *"}
                    input(class: :handle, id: :reg_address, type: :text, placeholder: "Registered Office Address", value: state.reg_address).on(:change) do |e|
                      state.reg_address! e.target.value
                    end
                    input(class: :handle, id: :reg_address_2, type: :text, placeholder: "Registered Office Address 2", value: state.reg_address_2).on(:change) do |e|
                      state.reg_address_2! e.target.value
                    end
                    text {"Registered Office City *"}
                    input(class: :handle, id: :reg_city, type: :text, placeholder: "Registered Office City", value: state.reg_city).on(:change) do |e|
                      state.reg_city! e.target.value
                    end
                    text {"Registered Office PO Box"}
                    input(class: :handle, id: :reg_po, type: :text, placeholder: "Registered Office PO Box", value: state.reg_po).on(:change) do |e|
                      state.reg_po! e.target.value
                    end
                    text {"Registered Office State *"}
                    input(class: :handle, id: :reg_state, type: :text, placeholder: "Registered Office State", value: state.reg_state).on(:change) do |e|
                      state.reg_state! e.target.value
                    end
                    text {"Zonal Office *"}
                    input(class: :handle, id: :reg_state, type: :text, placeholder: "CAC Zonal Office", value: state.reg_zone).on(:change) do |e|
                      state.reg_zone! e.target.value
                    end
                    div do
                      button(type: :button, class: "btn button action") { "Save" }.on(:click) do
                        Store.add_item("reg_address", state.reg_address)
                        Store.add_item("reg_address_2", state.reg_address_2)
                        Store.add_item("reg_po", state.reg_po)
                        Store.add_item("reg_city", state.reg_city)
                        Store.add_item("reg_state", state.reg_state)
                        Store.add_item("reg_zone", state.reg_zone)
                        state.address_update! 0
                      end if valid_address_input?
                      button(type: :button, class: "btn button action inner alert") { "Cancel" }.on(:click) do
                        state.address_update! 0
                      end
                    end                    
                  end
                end                
              end
              div(class: "small-12 large-4 medium-4 collapse columns") do 
                div(style: {background: "#4caf50", color: "#fff", padding: "0.5rem"}) do
                  h5 {"Help"}
                  p {params.help[:description]}
                end
              end             
             
            end
          end
        end
      end
    end
  end
end
