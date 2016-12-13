class Officer < ActiveRecord::Base
  belongs_to :company
  # has_paper_trail

  def assign_company_address
    unless company.nil?
      puts company.registered_office_address
      self.residential_address = company.registered_office_address
      self.residential_address_city = company.registered_office_city
      self.residential_address_state = company.registered_office_state
      # residential_address_pob = company.registered_office_pob
      # residential_address_country = company.registered_office_country
      puts self.to_s
      self.save
    end
  end
end
