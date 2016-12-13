module Components
  module Filing
    class Remita < React::Component::Base

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
        state.merchantId! "2547916"
        state.serviceTypeId! "4430731"
        state.orderId! "223348"
        state.payerName! "Odu Folarin"
        state.payerEmail! "odufolarin@yahoo.com"
        state.payerPhone! "0809009888"
        state.amt!  "5000"
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
          iframe(height: "600px", width: "100%", id: "iframe-a", name: "iframe-a")
          form(action: "http://www.remitademo.net/remita/ecomm/init.reg", name: "SubmitRemitaform", method: :post, target: "iframe-a") do
            # input(id: "merchantId", value: params.merchantId)
            # input(id: "serviceTypeId", value: params.serviceTypeId)
            # input(id: "orderId", value: params.orderId)
            # input(id: "hash", value: params.hash)
            # input(id: "payerName", value: params.payerName)
            # input(id: "payerEmail", value: params.payerEmail)
            # input(id: "payerPhone", value: params.payerPhone)
            # input(id: "amt", value: params.amt)
            # input(id: "responseurl", value: params.responseurl)
            # hashv = sha512(state.merchantId + state.serviceTypeId + state.orderId + state.amt + "http://localhost:3000" + "1946")
            hashv = "7388a3387c8bdc3f33c55877cd3a727430e709188916bc6b855757d7d603d7e5f14d82e1575c82e45a87c945eea2c2735485939ec92d248fdf5c4c469f021cdd"

            input(id: "merchantId", placeholder: "merchantId", value: state.merchantId, type: :hidden)
            input(id: "serviceTypeId", placeholder: "serviceTypeId", value: state.serviceTypeId, type: :hidden)
            input(id: "orderId", placeholder: "orderId", value: state.orderId, type: :hidden)
            input(id: "hash", placeholder: "hash", value: hashv, type: :hidden)
            input(id: "payerName", placeholder: "payerName", value: state.payerName, type: :hidden)
            input(id: "payerEmail", placeholder: "payerEmail", value: state.payerEmail, type: :hidden)
            input(id: "payerPhone", placeholder: "payerPhone", value: state.payerPhone, type: :hidden)
            input(id: "amt", placeholder: "amt", value: state.amt, type: :hidden)
            input(id: "responseurl", placeholder: "responseurl", value: "http://localhost:3000/filing/incoming/", type: :hidden)
            input(type: :submit, value: "PAY VIA REMITA")
          end
        end
      end
    end
  end
end
