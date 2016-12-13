module Components
  module Filing
    class Shareholders < React::Component::Base

      param :company
      param :shareholders
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method

      before_mount do
        state.add_shareholder! 0
        state.shareholders! Store.retrieve_item("shareholders") || []
        state.tmp_surname! ""
        state.tmp_fname! ""
        state.tmp_oname! ""
        state.tmp_address! ""
        state.tmp_address2! ""
        state.tmp_nationality! ""
        state.tmp_city! ""
        state.tmp_state! ""
        state.tmp_country! ""
        state.tmp_holding! ""
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
              div(class: "small-12 columns end") do
                div do
                  if (state.add_shareholder == 0)
                    button(type: :button, class: "btn button action inner") { "Add New Shareholder" }.on(:click) do
                      state.add_shareholder! 1
                    end
                    br
                  end
                  hr class: :noborder
                end
              end
              div(class: "small-12 columns end") do
                div(class: "large-6 medium-6 small-12") do
                  if (state.add_shareholder == 1)
                    h5 {"New Shareholder"}
                    hr class: :noborder
                    div(class: :row) do
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"Surname"}
                        input(class: "handle small-12", type: :text, placeholder: "Surname").on(:change) do |e|
                          state.tmp_surname! e.target.value
                        end
                      end
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"First Name"}
                        input(class: "handle small-12", type: :text, placeholder: "First Name").on(:change) do |e|
                          state.tmp_fname! e.target.value
                        end
                      end                     
                    end
                    div(class: :row) do
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"Other Names"}
                        input(class: "handle small-12", type: :text, placeholder: "Other Names").on(:change) do |e|
                          state.tmp_oname! e.target.value
                        end
                      end                     
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"Shareholding"}
                        input(class: "handle small-12", type: :text, placeholder: "Holding").on(:change) do |e|
                          state.tmp_holding! e.target.value
                        end
                      end 
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Nationality"}
                        input(class: "handle small-12", type: :text, placeholder: "Nationality").on(:change) do |e|
                          state.tmp_nationality! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        span {"Residential Address"}
                        input(class: "handle small-12", type: :text, placeholder: "Residential Address").on(:change) do |e|
                          state.tmp_address! e.target.value
                        end
                      end                     
                      div(class: "handle small-12 columns") do
                        input(class: "handle small-12", type: :text, placeholder: "Residential Address 2").on(:change) do |e|
                          state.tmp_address2! e.target.value
                        end
                      end 
                    end

                    div(class: :row) do
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"City"}
                        input(class: "handle small-12", type: :text, placeholder: "City").on(:change) do |e|
                          state.tmp_city! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Country"}
                        input(class: "handle small-12", type: :text, placeholder: "Country").on(:change) do |e|
                          state.tmp_country! e.target.value
                        end
                      end 
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"State"}
                        input(class: "handle small-12", type: :text, placeholder: "State").on(:change) do |e|
                          state.tmp_state! e.target.value
                        end
                      end                     
                    end


                    div do
                      button(type: :button, class: "btn button action") { "Add" }.on(:click) do
                        shareholder = Shareholder.new(surname: state.tmp_surname, first_name: state.tmp_fname, other_names: state.tmp_oname, nationality: state.tmp_nationality, residential_address: state.tmp_address, residential_address_city: state.tmp_city, residential_address_state: state.tmp_state, residential_address_country: state.tmp_country, holding: state.tmp_holding)
                        state.shareholders! << shareholder
                        Store.add_item("shareholders", state.shareholders)
                        state.add_shareholder! 0
                      end
                      button(type: :button, class: "btn button action inner") { "Cancel" }.on(:click) do
                        state.add_shareholder! 0
                      end
                    end 
                    hr 
                  end                   
                end
              end


              div(class: "small-12 large-6 medium-6 collapse columns") do
                h5 {"Existing Shareholders"}
                ol do
                  params.shareholders.each do |shareholder|
                    li do
                      span {shareholder.surname.upcase}
                      span {", "}
                      span {shareholder.first_name}
                      span {" "}
                      span {shareholder.other_names}

                      br
                      text(style: {fontWeight: :bold})  {"Nationality: "}
                      span {shareholder.nationality}
                      br  
                      text(style: {fontWeight: :bold}) {"Address"}
                      br                
                      span {shareholder.residential_address}
                      br
                      span {shareholder.residential_address_city}
                      span {", "}

                      br
                      span {shareholder.residential_address_state}
                      br
                      span {shareholder.residential_address_country}
                      br
                      span {shareholder.holding}
                      br


                      div do
                        button(type: :button, style: {fontWeight: :bold}, class: "btn button action smaller") { "Edit" }.on(:click) do
                          #Actions to Store records in a temporary Hash or Objec
                        end
                        button(type: :button, class: "btn button action smaller alert") { "Delete" }.on(:click) do
                          #Actions to Store records in a temporary Hash or Objec
                        end
                        br
                      end
              
                    end
                  end
                end
                hr class: :noborder
              end
              div(class: "small-12 large-6 medium-6 collapse columns") do
                if (state.add_shareholder == 1 || !state.shareholders.empty?)                   
                  h5 {"New Shareholders Added"} 
                  ol do
                    state.shareholders.each do |shareholder|
                      li do
                        span {shareholder.surname.upcase}
                        span {", "}
                        span {shareholder.first_name}
                        span {" "}
                        span {shareholder.other_names}

                        br
                        text(style: {fontWeight: :bold})  {"Shareholding: "}
                        span {shareholder.holding}
                        br
                        text(style: {fontWeight: :bold})  {"Nationality: "}
                        span {shareholder.nationality}
                        br  
                        text(style: {fontWeight: :bold}) {"Address"}
                        br                
                        span {shareholder.residential_address}
                        br
                        if(shareholder.residential_address_2.present?)
                          span {shareholder.residential_address_2}
                          br
                        end
                        span {shareholder.residential_address_city}
                        
                        if (shareholder.residential_address_pob.present?)
                          span {", "}
                          br
                          text {"POB "}
                          span {shareholder.residential_address_pob}
                          span {", "}
                        end
                        br
                        span {shareholder.residential_address_state}
                        br
                        span {shareholder.residential_address_country}
                        br
                        hr class: :noborder


                        div do
                          button(type: :button, style: {fontWeight: :bold}, class: "btn button action smaller") { "Edit" }.on(:click) do
                            #Actions to Store records in a temporary Hash or Objec
                          end
                          button(type: :button, class: "btn button action smaller alert") { "Delete" }.on(:click) do
                            #Actions to Store records in a temporary Hash or Objec
                          end
                          br
                        end
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end
