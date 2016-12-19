module Components
  module Filing
    class Officers < React::Component::Base

      def handleChange!(date)
        state.tmp_dob! date
      end

      param :company
      param :officers
      param :countries
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method

      before_mount do
        state.add_officer! 0
        state.officers! Store.retrieve_item("officers") || []
        state.tmp_surname! ""
        state.tmp_fname! ""
        state.tmp_oname! ""
        state.tmp_address! ""
        state.tmp_address2! ""
        state.tmp_nationality! ""
        state.tmp_city! ""
        state.tmp_state! ""
        state.tmp_country! ""
        state.tmp_email! ""
        state.tmp_pod! ""
        state.tmp_dob! `moment()` 
        state.tmp_tel_number! ""
        state.tmp_occupation! ""
        state.tmp_role! ""
        state.tmp_state_array! []
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
                  if (state.add_officer == 0)
                    button(type: :button, class: "btn button action inner") { "Add New Officer" }.on(:click) do
                      state.add_officer! 1
                    end
                    br
                  end
                  hr class: :noborder
                end
              end
              div(class: "small-12 columns end") do
                div(class: "large-8 medium-8 small-12") do
                  if (state.add_officer == 1)
                    h5 {"New Company Officer"}
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
                        span {"Role"}
                        select() do
                          option(value: "") {"Select Role"}
                          option(value: "Director") {"Director"}
                          option(value: "Secretary") {"Secretary"}
                        end.on(:change) do |e|
                          state.tmp_role! e.target.value
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
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Date of Birth"}
                        br
                        DatePicker(selected: state.tmp_dob, showMonthDropdown: true, showYearDropdown: true, dropdownMode: "select")
                      end
                    end

                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        span {"Residential Address"}
                        input(class: "handle small-12", type: :text, placeholder: "Residential Address").on(:change) do |e|
                          state.tmp_address! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        input(class: "handle small-12", type: :text, placeholder: "Residential Address").on(:change) do |e|
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
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"POB"}
                        input(class: "handle small-12", type: :text, placeholder: "POB").on(:change) do |e|
                          state.tmp_pob! e.target.value
                        end
                      end 
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Country"}
                        #input(class: "handle small-12", type: :text, placeholder: "Country").on(:change) do |e|
                          #state.tmp_country! e.target.value
                        #end
                        select() do
                          option(value: "") {"Select Country"}
                          # puts params.countries
                          params.countries.each do |c|
                            option(value: c) {c}
                          end
                        end.on(:change) do |e|
                          state.tmp_country!(e.target.value)
                          data = {}
                          data[:country] = e.target.value
                          HTTP.post('/platform/country_states', payload: data) do |res|
                            state.tmp_state_array! []
                            state.tmp_state_array! res.json
                          end

                        end


                        # select(class: "handle small-12", value: @countries)  do |country|
                        #   option(value: country) { country }
                        # end.on(:change) 
                      end 
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"State"}
                        state.tmp_state_array

                        select() do
                          option(value: "") {"Select State"}
                          state.tmp_state_array.each do |s|
                            option(value: s) {s}
                          end
                        end.on(:change) do |e|
                          state.tmp_state! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Email"}
                        input(class: "handle small-12", type: :text, placeholder: "Email").on(:change) do |e|
                          state.tmp_email! e.target.value
                        end
                      end                     
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Occupation"}
                        input(class: "handle small-12", type: :text, placeholder: "Occupation").on(:change) do |e|
                          state.tmp_occupation! e.target.value
                        end
                      end 
                    end

                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        span {"Particulars of Other Directorship"}
                        textarea(class: "handle small-12", type: :text, placeholder: "Particulars of Other Directorship").on(:change) do |e|
                          state.tmp_pod! e.target.value
                        end
                      end                     
                    end

                    div do
                      button(type: :button, class: "btn button action") { "Add" }.on(:click) do

                        officer = Officer.new(surname: state.tmp_surname, first_name: state.tmp_fname, other_names: state.tmp_oname, nationality: state.tmp_nationality, dob: state.tmp_dob, tel_number: state.tmp_tel_number, residential_address: state.tmp_address, residential_address_city: state.tmp_city, residential_address_state: state.tmp_state, residential_address_country: state.tmp_country, email: state.tmp_email, occupation: state.tmp_occupation, particulars_of_other_directorship: state.tmp_pod, role: state.tmp_role)
                        state.officers! << officer
                        Store.add_item("officers", state.officers)
                        state.add_officer! 0

                      end
                      button(type: :button, class: "btn button action inner") { "Cancel" }.on(:click) do
                        state.add_officer! 0
                      end
                    end 
                    hr 
                  end                   
                end
              end


              div(class: "small-12 large-6 medium-6 collapse columns") do
                h5 {"Existing Company Officers"}
                ol do
                  params.officers.each do |officer|
                    li do
                      span {officer["surname"].upcase}
                      span {", "}
                      span {officer["first_name"]}
                      span {" "}
                      span {officer["other_names"]}

                      br
                      text(style: {fontWeight: :bold})  {"Role: "}
                      span {officer["role"]}
                      br
                      text(style: {fontWeight: :bold})  {"Nationality: "}
                      span {officer["nationality"]}
                      br
                      text(style: {fontWeight: :bold}) {"Date of Birth: "}
                      span {officer["dob"]}
                      br  
                      text(style: {fontWeight: :bold}) {"Address"}
                      br                
                      span {officer["residential_address"]}
                      br
                      if(officer["residential_address_2"].present?)
                        span {officer["residential_address_2"]}
                        br
                      end
                      span {officer["residential_address_city"]}
                      span {", "}
                      if (officer["residential_address_pob"].present?)
                        br
                        span {"POB "}
                        span {officer["residential_address_pob"]}
                        span {", "}
                      end
                      br
                      span {officer["residential_address_state"]}
                      br
                      span {officer["residential_address_country"]}
                      br

                      span(style: {fontWeight: :bold}) {"Email Address: "}
                      span {officer["email"]}
                      br
                      span(style: {fontWeight: :bold}) {"Occupation: "}
                      span {officer["occupation"]}
                      br
                      span(style: {fontWeight: :bold}) {"Tel Number: "}
                      span {officer["tel_number"]}
                      br
                      span(style: {fontWeight: :bold}) {"Particulars of Other Directorship "}
                      if (officer["particulars_of_other_directorship"].present?)
                        br
                        span {officer["particulars_of_other_directorship"]}
                      end
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
                hr class: :noborder
              end
              div(class: "small-12 large-6 medium-6 collapse columns") do
                if (state.address_update == 1 || !state.officers.empty?)                   
                  h5 {"New Officers Added"}
                  ol do
                    state.officers.each do |officer|
                      li do
                        span {officer.surname.upcase}
                        span {", "}
                        span {officer.first_name}
                        span {" "}
                        span {officer.other_names}

                        br
                        text(style: {fontWeight: :bold})  {"Role: "}
                        span {officer.role}
                        br
                        text(style: {fontWeight: :bold})  {"Nationality: "}
                        span {officer.nationality}
                        br
                        text(style: {fontWeight: :bold}) {"Date of Birth: "}
                        span {officer.dob}
                        br  
                        text(style: {fontWeight: :bold}) {"Address"}
                        br                
                        span {officer.residential_address}
                        br
                        if(officer.residential_address_2.present?)
                          span {officer.residential_address_2}
                          br
                        end
                        span {officer.residential_address_city}
                        span {", "}
                        if (officer.residential_address_pob.present?)
                          br
                          text {"POB "}
                          span {officer.residential_address_pob}
                          span {", "}
                        end
                        br
                        span {officer.residential_address_state}
                        br
                        span {officer.residential_address_country}
                        br

                        span(style: {fontWeight: :bold}) {"Email Address: "}
                        span {officer.email}
                        br
                        span(style: {fontWeight: :bold}) {"Occupation: "}
                        span {officer.occupation}
                        br
                        span(style: {fontWeight: :bold}) {"Tel Number: "}
                        span {officer.tel_number}
                        br
                        span(style: {fontWeight: :bold}) {"Particulars of Other Directorship: "}
                        br
                        if (officer.particulars_of_other_directorship.present?)
                          span {officer.particulars_of_other_directorship}
                          br
                        end
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
              hr class: :noborder              
             
            end
          end
        end
      end
    end
  end
end
