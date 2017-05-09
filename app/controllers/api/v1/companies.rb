module API  
  module V1
    class Companies < Grape::API
      include API::V1::Defaults

      resource :companies do
        desc "Return all companies"
        get "", root: :companies do
          Company.all
        end

        desc "Return a company"
        params do
          requires :name, type: String, desc: "Name of the company"
        end
        
          get :search do
            @companies = Company.where("name ILIKE ?", "%#{params[:name]}%")
            if @companies.empty?
             render json:{
              
              message: "couldn't find any company with that mail"
            }
            else
             render status:200, json:{
              message: "list of companies",
              companies: @companies
            }.to_json
            end
          end
        
        # get "?#{:name}", root: "company" do
        #   #Company.where(name: permitted_params[:name]).first!
        #   Company.where("name ILIKE ?", "%#{permitted_params[:name]}%").first!
        # end
      end
    end
  end
end  