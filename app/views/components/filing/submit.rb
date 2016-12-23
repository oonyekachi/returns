module Components
  module Filing
    class Submit < React::Component::Base

      def valid_filer_input?
        result = state.filer_surname.present? && state.filer_fname.present? && state.filer_accr.present?
        result = result && state.filer_address.present? && state.filer_city.present? && state.filer_state.present? 
        result && is_a_valid_email?(state.filer_email) && state.filer_tel_number.present?
      end
      def is_a_valid_email?(email)
        VALID_EMAIL_REGEX = /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i
        email.present? && ((email =~ VALID_EMAIL_REGEX) == 0)
      end

      param :stepper, type: Proc
      param :company

      # param :my_param
      # param param_with_default: "default value"
      # param :param_with_default2, default: "default value" # alternative syntax
      # param :param_with_type, type: Hash
      # param :array_of_hashes, type: [Hash]
      # collect_all_other_params_as :attributes  #collects all other params into a hash

      # The following are the most common lifecycle call backs,
      # the following are the most common lifecycle call backs# delete any that you are not using.
      # call backs may also reference an instance method i.e. before_mount :my_method

      def post_to_gateway(url)
        promise = Promise.new
        HTTP.post(url,payload: "<form></form>") do |response|
          if response.ok?
            # promise.resolve response.json
            puts response
          else
            # promise.reject response
            puts response
          end
        end
        promise
      end

      before_mount do
        state.filer_surname! Store.retrieve_item("filer_surname")
        state.filer_fname! Store.retrieve_item("filer_fname")
        state.filer_oname! Store.retrieve_item("filer_oname")
        state.filer_accr! Store.retrieve_item("filer_accr")
        state.filer_address! Store.retrieve_item("filer_address")
        state.filer_address_2! Store.retrieve_item("filer_address_2")
        state.filer_city! Store.retrieve_item("filer_city")
        state.filer_state! Store.retrieve_item("filer_state")
        state.filer_tel_number! Store.retrieve_item("filer_tel_number")
        state.filer_email! Store.retrieve_item("filer_email")
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
        div do
          div(class: "small-12 ") do
            div(id: "section-pane", class: "small-12 columns") do
              div(class: "small-12 large-8 medium-8 columns") do
                div(class: "small-12") do
                  if (true) 
                    h5 {"Filing Presented By"}
                    hr class: :noborder
                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Surname *"}
                        input(class: "handle small-12", type: :text, placeholder: "Surname").on(:change) do |e|
                          state.filer_surname! e.target.value
                        end
                      end
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"First Name *"}
                        input(class: "handle small-12", type: :text, placeholder: "First Name").on(:change) do |e|
                          state.filer_fname! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Other names"}
                        input(class: "handle small-12", type: :text, placeholder: "Other Names").on(:change) do |e|
                          state.filer_oname! e.target.value
                        end
                      end
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Accreditation Number *"}
                        input(class: "handle small-12", type: :text, placeholder: "Accreditation Number").on(:change) do |e|
                          state.filer_accr! e.target.value
                        end
                      end                     
                    end



                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        span {"Address *"}
                        input(class: "handle small-12", type: :text, placeholder: "Address").on(:change) do |e|
                          state.filer_address! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 columns") do
                        input(class: "handle small-12", type: :text, placeholder: "Address").on(:change) do |e|
                          state.filer_address2! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"City *"}
                        input(class: "handle small-12", type: :text, placeholder: "City").on(:change) do |e|
                          state.filer_city! e.target.value
                        end
                      end                     
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"State *"}
                        input(class: "handle small-12", type: :text, placeholder: "State").on(:change) do |e|
                          state.filer_state! e.target.value
                        end
                      end  
                    end

                    div(class: :row) do
                      div(class: "handle small-6 large-6 medium-6 columns") do
                        span {"Tel Number *"}
                        input(class: "handle small-12", type: :text, placeholder: "Tel Number").on(:change) do |e|
                          state.filer_tel_number! e.target.value
                        end
                      end                     
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Email *"}
                        input(class: "handle small-12", type: :text, placeholder: "Email").on(:change) do |e|
                          state.filer_email! e.target.value
                        end
                      end  
                    end 
                  end                  
                end
                hr class: :noborder
              end
              div(class: "small-12 large-4 medium-4 collapse columns") do 
                div() do
                  hr
                  b {"Presenter Details"}
                  br
                  if (state.filer_surname.present?) 

                    span {state.filer_surname.upcase}
                    span {", "}
                    span {state.filer_fname}
                    span {" "}
                    span {state.filer_oname}
                    br
                    b {"Accreditation No. "}
                    span {state.filer_accr}
                    br


                    span {state.filer_address}
                    if (state.filer_address_2.present?)
                      br
                      span {state.filer_address_2}
                    end
                    br
                    span {state.filer_city}
                    br
                    span {state.filer_state}
                    br
                    b {"Tel: "}
                    span {state.filer_tel_number}
                    br
                    b {"Email: "}
                    span {state.filer_email}
                    hr class: :noborder
                    div do
                      button(type: :button, class: "btn button action") { "Submit" }.on(:click) do
                        Store.add_item("filer_surname", state.filer_surname)
                        Store.add_item("filer_fname", state.filer_fname)
                        Store.add_item("filer_oname", state.filer_oname)
                        Store.add_item("filer_accr", state.filer_accr)
                        Store.add_item("filer_address", state.filer_address)
                        Store.add_item("filer_address_2", state.filer_address_2)
                        Store.add_item("filer_city", state.filer_city)
                        Store.add_item("filer_state", state.filer_state)
                        Store.add_item("filer_email", state.filer_email)
                        Store.add_item("filer_tel_number", state.filer_tel_number)
                        Store.commit()
                        tstore = {}
                        i = 0
                        Store.each do |k,v|
                          unless k == ("officers" || "shareholders")
                            tstore[k] = v 
                          # else
                            
                            # v.each do |a|
                            #   tstore[k] = a.to_json 
                            # end

                          end
                        end

                        off = Store.retrieve_item("officers")
                        offs = []
                        off.each do |o|
                          offs << o.attributes
                        end

                        share = Store.retrieve_item("shareholders")
                        shares = []
                        share.each do |s|
                          shares << s.attributes
                        end

                        
                        data = {}
                        tstore["officers"] = offs
                        tstore["shareholders"] = shares
                        data["tstore"] = tstore                        
                        state.address_update! 0

                        HTTP.put("/companies/#{params.company.id}", payload: data).then do |req|
                          
                        end 
                        `window.location = "/payments/new"` 
                      end if valid_filer_input?
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
