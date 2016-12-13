module Components
  module Filing
    class Capital < React::Component::Base

      def valid_capital_input?
        true
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
        state.capital_update! 0
        state.cap_auth_share_capital! Store.retrieve_item("cap_auth_share_capital")
        state.cap_number_of_shares! Store.retrieve_item("cap_number_of_shares")
        state.cap_issued_share_capital! Store.retrieve_item("cap_issued_share_capital")
        state.cap_paid_up_capital! Store.retrieve_item("cap_paid_up_capital") 
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
              div(class: "small-12 large-6 medium-6 collapse columns") do
                if (state.capital_update == 0) 
                  button(type: :button, class: "btn button action inner") { "Update Capital" }.on(:click) do
                    state.capital_update! 1
                  end
                end

                
                p do
                  br
                  span {"Current Capital Holding"}
                  br
                  text(style: {fontWeight: :bold})  {"Authorized Share Capital: "}
                  span  {params.company[:cap_auth_share_capital]}
                  br
                  text(style: {fontWeight: :bold})  {"Number of Shares: "}
                  span {params.company[:cap_number_of_shares]}
                  br
                  text(style: {fontWeight: :bold})  {"Price of Shares (N): "}
                  span {params.company[:cap_share_price]}
                  br
                  text(style: {fontWeight: :bold})  {"Issued Share Capital: "}
                  span {params.company[:cap_issued_share_capital]}
                  br
                  text(style: {fontWeight: :bold})  {"Paid Up Capital: "}
                  span {params.company[:cap_paid_up_capital]}
                  br
                end
                if (state.capital_update == 1 || state.cap_auth_share_capital.present?) 
                  hr
                  span {"New Capital Holding"}
                  br
                  b {"Authorized Share Capital: "}
                  span  {state.cap_auth_share_capital}
                  br
                  b  {"Number of Shares: "}
                  span {state.cap_number_of_shares}
                  br
                  b  {"Price of Shares (N): "}
                  span {state.cap_share_price}
                  br
                  b  {"Issued Share Capital: "}
                  span {state.cap_issued_share_capital}
                  br
                  b {"Paid Up Capital: "}
                  span {state.cap_paid_up_capital}
                  br
                end
                hr class: :noborder
              end
              div(class: "small-12 large-6 medium-6 collapse columns") do
                if (state.capital_update == 1) 
                  div do
                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Authorized Share Capital"}
                        input(class: "handle small-12", type: :text, placeholder: "Authorized Share Capital", value: state.cap_auth_share_capital).on(:change) do |e|
                          state.cap_auth_share_capital! e.target.value
                        end
                      end 
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Number of Shares"}
                        input(class: "handle small-12", type: :text, placeholder: "Number of Shares", value: state.cap_number_of_shares).on(:change) do |e|
                          state.cap_number_of_shares! e.target.value
                        end
                      end                     
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Price of Shares (N)"}
                        input(class: "handle small-12", type: :text, placeholder: "Price of Shares (N)", value: state.cap_share_price).on(:change) do |e|
                          state.cap_share_price! e.target.value
                        end
                      end                      
                    end

                    div(class: :row) do
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Issued Share Capital"}
                        input(class: "handle small-12", type: :text, placeholder: "Issued Share Capital", value: state.cap_issued_share_capital).on(:change) do |e|
                          state.cap_issued_share_capital! e.target.value
                        end
                      end 
                      div(class: "handle small-12 large-6 medium-6 columns") do
                        span {"Paid Up Capital"}
                        input(class: "handle small-12", type: :text, placeholder: "Paid Up Capital", value: state.cap_paid_up_capital).on(:change) do |e|
                          state.cap_paid_up_capital! e.target.value
                        end
                      end                     
                    end


                    div do
                      button(type: :button, class: "btn button action") { "Save" }.on(:click) do
                        Store.add_item("cap_auth_share_capital", state.cap_auth_share_capital)
                        Store.add_item("cap_number_of_shares", state.cap_number_of_shares)
                        Store.add_item("cap_share_price", state.cap_share_price)
                        Store.add_item("cap_issued_share_capital", state.cap_issued_share_capital)
                        Store.add_item("cap_paid_up_capital", state.cap_paid_up_capital)
                        state.capital_update! 0
                      end
                      button(type: :button, class: "btn button action inner") { "Cancel" }.on(:click) do
                        state.capital_update! 0
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
